exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("cart")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("cart").insert([
        {
          name: "July 27th @ 11am",
          price: 40,
          description: "",
          imageUrl: "http://www.coyoterungolf.com/Scorecard.jpg",
          quantity: 4
        }
      ]);
    });
};
