import { Controller, Post, Body, Put, Param, UseGuards } from '@nestjs/common';
import {
    ApiBearerAuth,
    ApiCreatedResponse,
    ApiUseTags
} from '@nestjs/swagger';
import { SupportService } from './support.service';
import { CreateSupportRequest } from './create-support.request';
import { DetaiSupportRequest } from './detail-support.request';
import { DetailSupportActive } from './detail-support-isActive.request';
import { AuthGuard } from '@nestjs/passport';
@ApiBearerAuth()
@ApiUseTags('Support')
@UseGuards(AuthGuard('jwt'))
@Controller('Support')
export class SupportController {
    constructor(private service: SupportService) { }
    @Post('add-new')
    @ApiCreatedResponse({ description: 'Find admin by ID' })
    async create(@Body() request: CreateSupportRequest) {
            return await this.service.createSupport(request);
    }

    @Put(':id')
    @ApiCreatedResponse({ description: 'Find admin by ID' })
    update(@Param('id') id: Number, @Body() params: DetaiSupportRequest) {
        return this.service.updateSupport(id, params);
    }

    @Put(':id/update_active')
    @ApiCreatedResponse({ description: 'Find admin by ID' })
    updateActive(@Param('id') id: Number, @Body() params: DetailSupportActive) {
        return this.service.updateSupportActive(id, params);
    }
}
