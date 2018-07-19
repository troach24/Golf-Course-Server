exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("tee-time")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("tee-time").insert([
        {
          date: 07272018,
          time: 1000,
          booked: true,
          golfers: 4,
          price: 48
        }
      ]);
    });
};
