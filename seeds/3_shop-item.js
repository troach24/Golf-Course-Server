exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("shop-item")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("shop-item").insert([
        {
          name: "Range Balls",
          price: 5,
          description: "",
          imageUrl:
            "https://www.richmondforestgolf.com/images/bucket-of-balls.png",
          quantity: 1
        },
        {
          name: "Tees",
          price: 1,
          description: "",
          imageUrl:
            "https://www.gpencil.com/Merchant2/graphics/00000001/3498.jpg",
          quantity: 1
        },
        {
          name: "Glove",
          price: 12.99,
          description: "",
          imageUrl:
            "https://s7d2.scene7.com/is/image/dkscdn/SS14TM14BURNERGLOV_White_is/",
          quantity: 1
        },
        {
          name: "Golf Balls",
          price: 2.99,
          description: "",
          imageUrl:
            "http://www.discountgolfworld.com/content/callaway/hex-chrome-plus-golfball-white-sleeve.jpg",
          quantity: 1
        }
      ]);
    });
};
