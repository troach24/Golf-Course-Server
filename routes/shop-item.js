const express = require("express");
const router = express.Router();

const queries = require("../queries/shop-item");

router.get("/", (request, response, next) => {
  console.log("get shop items");
  var inv = queries.list();
  // console.log("inv: ", inv);

  queries
    .list()
    .then(shopItems => {
      response.json({ shopItems });
    })
    .catch(next);
});

router.get("/:id", (request, response, next) => {
  queries
    .read(request.params.id)
    .then(shopItem => {
      shopItem
        ? response.json({ shopItem })
        : response.status(404).json({ message: "Not found" });
    })
    .catch(next);
});

router.post("/", (request, response, next) => {
  queries
    .create(request.body)
    .then(shopItem => {
      response.status(201).json({ shopItem });
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
    .then(shopItem => {
      response.json({ shopItem });
    })
    .catch(next);
});

module.exports = router;
