const express = require("express");
const router = express.Router();

const queries = require("../queries/menu-item");

router.get("/", (request, response, next) => {
  console.log("get menu items");
  var inv = queries.list();
  // console.log("inv: ", inv);

  queries
    .list()
    .then(menuItems => {
      response.json({ menuItems });
    })
    .catch(next);
});

router.get("/:id", (request, response, next) => {
  queries
    .read(request.params.id)
    .then(menuItem => {
      menuItem
        ? response.json({ menuItem })
        : response.status(404).json({ message: "Not found" });
    })
    .catch(next);
});

router.post("/", (request, response, next) => {
  queries
    .create(request.body)
    .then(menuItem => {
      response.status(201).json({ menuItem });
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
    .then(menuItem => {
      response.json({ menuItem });
    })
    .catch(next);
});

module.exports = router;
