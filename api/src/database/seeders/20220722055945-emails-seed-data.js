'use strict';

module.exports = {
  async up (queryInterface,) {
     queryInterface.bulkInsert('emails', [
        { address: 'test1@gmail.com' },
        { address: 'test2@gmail.com' },
        { address: 'test3@gmail.com' },
        { address: 'test4@gmail.com' },
        { address: 'test5@gmail.com' },
        { address: 'test6@gmail.com' },
        { address: 'test7@gmail.com' },
        { address: 'test8@gmail.com' },
        { address: 'test9@gmail.com' },
        { address: 'test10@gmail.com' },
        { address: 'test11@gmail.com' },
        { address: 'test12@gmail.com' },
        { address: 'test13@gmail.com' },
        { address: 'test14@gmail.com' },
        { address: 'test15@gmail.com' },
      ], {});
  },

  async down (queryInterface,) {
    await queryInterface.bulkDelete('emails', null, {});
  }
};
