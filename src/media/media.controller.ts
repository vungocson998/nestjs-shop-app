import {
    Controller,
    Post,
    Body,
    Get,
    Put,
    Delete,
    Param,
    HttpException,
    HttpStatus,
    UseGuards,
    Request,
    Res,
    UseInterceptors,
    UploadedFiles
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import {
    ApiBearerAuth,
    ApiCreatedResponse,
    ApiUseTags,
    ApiConsumes,
    ApiImplicitFile
} from '@nestjs/swagger';
import { extname } from 'path';
import { AuthGuard } from '@nestjs/passport';
import { MediaService } from './media.service';
import { DetailRequest } from './detail-request';
import { UpdateRequest } from './update-request';
import * as uuid from 'uuid';
@ApiBearerAuth()
@ApiUseTags('Medias')
@UseGuards(AuthGuard('jwt'))
@Controller('medias')

export class MediaController {
    constructor(private service: MediaService) { }
    @Post('create')
    @UseInterceptors(FileFieldsInterceptor([{ name: 'medias', maxCount: 10 }], {
        dest: './uploads',
        storage: diskStorage(
            {
                destination: './uploads',
                filename: (req, file, cb) => {
                    let ext = extname(file.originalname);
                    return cb(null, [uuid.v4(), ext].join(''));
                }
            }
        ),
        limits: {
            fileSize: 20 * 1024 * 1024,//20MB
        },
        fileFilter: function (req, file, cb) {
            const mimeTypeList = ['image/png', 'image/jpeg', 'video/mp4'];

             return mimeTypeList.some(item => item === file.mimetype)
                ? cb(null, true)
                : cb(null, false);
        },
    }))
    @ApiConsumes('multipart/form-data')
    @ApiImplicitFile({ name: 'medias', required: true, description: 'Firt file' })
    async create(@Request() req: Request, @UploadedFiles() file) {
        let user = req['user'];
        console.log('medias', file.medias);
        return await this.service.create(user, file.medias);
    }
 
    @Get(':id')
    @ApiCreatedResponse({ description: 'Find admin by ID' })
    async get(@Res() res, @Param() request: DetailRequest) {
        let media = await this.service.findBy({ id: request.id });

        return res.sendFile(media.fileName, {root:'uploads'});
    }

    @Put(':id')
    update(@Request() req: Request, @Param('id') id: Number, @Body() params: UpdateRequest) {
    let user = req['user'];
        return this.service.update(id, params, user);
    }
}
