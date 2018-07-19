const express = require("express");
const router = express.Router();

const queries = require("../queries/tee-time");

router.get("/", (request, response, next) => {
  console.log("get tee times");
  var inv = queries.list();
  // console.log("inv: ", inv);

  queries
    .list()
    .then(teeTimes => {
      response.json({ teeTimes });
    })
    .catch(next);
});

router.get("/:id", (request, response, next) => {
  queries
    .read(request.params.id)
    .then(teeTime => {
      teeTime
        ? response.json({ teeTime })
        : response.status(404).json({ message: "Not found" });
    })
    .catch(next);
});

router.post("/", (request, response, next) => {
  queries
    .create(request.body)
    .then(teeTime => {
      response.status(201).json({ teeTime });
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
    .then(teeTime => {
      response.json({ teeTime });
    })
    .catch(next);
});

module.exports = router;
