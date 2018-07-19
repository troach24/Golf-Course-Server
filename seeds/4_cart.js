exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("cart")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("cart").insert([
        {
          name: "",
          price: 40,
          description: "",
          imageUrl: "http://www.coyoterungolf.com/Scorecard.jpg",
          quantity: 1
        }
      ]);
    });
};
