const express = require("express");
const router = express.Router();

const queries = require("../queries/cart");

router.get("/", (request, response, next) => {
  console.log("GET cart items");
  var inv = queries.list();
  // console.log("inv: ", inv);

  queries
    .list()
    .then(cartItems => {
      response.json({ cartItems });
    })
    .catch(next);
});

router.get("/:id", (request, response, next) => {
  queries
    .read(request.params.id)
    .then(cartItem => {
      cartItem
        ? response.json({ cartItem })
        : response.status(404).json({ message: "Not found" });
    })
    .catch(next);
});

router.post("/", (request, response, next) => {
  queries
    .create(request.body)
    .then(cartItem => {
      return response.json({ cartItem });
    })
    .catch(next);
});

router.delete("/:id", (request, response, next) => {
  queries
    .delete(request.params.id)
    .then(() => {
      response.status(204).json({ deleted: true });
    })
    .catch(next);
});

router.put("/:id", (request, response, next) => {
  queries
    .update(request.params.id, request.body)
    .then(cartItem => {
      response.json({ cartItem });
    })
    .catch(next);
});

module.exports = router;
