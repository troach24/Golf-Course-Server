exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("shop-item")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("shop-item").insert([
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
