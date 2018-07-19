exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("menu-item")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("menu-item").insert([
        {
          name: "Potato Chips",
          price: 0.99,
          description: "",
          imageUrl:
            "https://foodimentaryguy.files.wordpress.com/2015/03/www-partyexcuses-com.jpg",
          quantity: 1
        }
      ]);
    });
};
