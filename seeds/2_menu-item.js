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
        },
        {
          name: "Hot Dog",
          price: 2.99,
          description: "",
          imageUrl:
            "https://www.ballparkbrand.com/sites/default/files/Hero_Dog_0.png",
          quantity: 1
        },
        {
          name: "Cheese Steak",
          price: 6.99,
          description: "",
          imageUrl:
            "https://i0.wp.com/hapanom.com/wp-content/uploads/2015/02/Bulgogi-Cheesesteak-Recipe-Banner.jpg",
          quantity: 1
        },
        {
          name: "Quesadilla",
          price: 4.99,
          description: "",
          imageUrl:
            "https://www.simplyrecipes.com/wp-content/uploads/2006/05/quesadilla-hoirz-640.jpg",
          quantity: 1
        },
        {
          name: "Bacon Cheeseburger",
          price: 5.99,
          description: "",
          imageUrl:
            "https://chadwicksnaturals.com/wp-content/uploads/2017/07/BaconCheeseburger.png",
          quantity: 1
        }
      ]);
    });
};
