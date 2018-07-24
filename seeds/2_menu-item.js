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
          category: "Food",
          description: "",
          imageUrl:
            "https://foodimentaryguy.files.wordpress.com/2015/03/www-partyexcuses-com.jpg",
          quantity: 1
        },
        {
          name: "Hot Dog",
          price: 2.99,
          category: "Food",
          description: "",
          imageUrl:
            "https://www.ballparkbrand.com/sites/default/files/Hero_Dog_0.png",
          quantity: 1
        },
        {
          name: "Philly Cheese Steak",
          price: 6.99,
          category: "Food",
          description: "",
          imageUrl:
            "https://i0.wp.com/hapanom.com/wp-content/uploads/2015/02/Bulgogi-Cheesesteak-Recipe-Banner.jpg",
          quantity: 1
        },
        {
          name: "Quesadilla",
          price: 4.99,
          category: "Food",
          description: "",
          imageUrl:
            "https://www.simplyrecipes.com/wp-content/uploads/2006/05/quesadilla-hoirz-640.jpg",
          quantity: 1
        },
        {
          name: "Bacon Cheeseburger",
          price: 5.99,
          category: "Food",
          description: "",
          imageUrl:
            "https://chadwicksnaturals.com/wp-content/uploads/2017/07/BaconCheeseburger.png",
          quantity: 1
        },
        {
          name: "Gatorade",
          price: 2.5,
          category: "Drink",
          description: "",
          imageUrl:
            "https://www.dollargeneral.com/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/0/0/00052000338768_0.jpg",
          quantity: 1
        },
        {
          name: "Water",
          price: 2,
          category: "Drink",
          description: "",
          imageUrl:
            "https://hips.hearstapps.com/ghk.h-cdn.co/assets/cm/15/12/5508e9bb6b9a7-0312-water-bottle-xl.jpg",
          quantity: 1
        },
        {
          name: "Tequila Soda",
          price: 3.99,
          category: "Drink",
          description: "",
          imageUrl:
            "http://manhattanwithatwistdotcom.files.wordpress.com/2013/05/mint-margito.jpg",
          quantity: 1
        },
        {
          name: "Beer",
          price: 2.99,
          category: "Drink",
          description: "",
          imageUrl:
            "http://www.womenonguard.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/a/pabst-blue-ribbon-beer-can-safe-1.gif",
          quantity: 1
        }
      ]);
    });
};
