
exports.up = function (knex, Promise) {
    knex.schema.createTable('users', function (table) {
        table.increments();
        table.string('name', 100);
        table.string('email');
        table.string('password');
        table.string('role', 20);
        table.timestamps();
    })
};

exports.down = function (knex, Promise) {
    knex.schema.dropTableIfExists('users');
};
