"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Product", [
      {
        nameproduct: "Laptop",
        priceProduct: 10000000,
        stockProduct: 10,
        description: "Laptop Asus",
        image:
          "https://www.asus.com/media/global/products/3v8d4j5l3h7y5x7n/P_setting_000_1_90_end_500.png",
      },
      {
        nameproduct: "Mouse",
        priceProduct: 100000,
        stockProduct: 50,
        description: "Mouse Logitech",
        image:
          "https://www.logitech.com/content/dam/logitech/en/products/mice/mx-master-3/mx-master-3-soft-grip.png",
      },
      {
        nameproduct: "Keyboard",
        priceProduct: 500000,
        stockProduct: 20,
        description: "Keyboard Razer",
        image:
          "https://www.razer.com/assetlibrary/ccf3c9b7-7c9a-4b9d-8d1e-1f9e5b4f6f2f/razer-cynosa-v2-gallery-1",
      },
    ]);
  },
  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
