const express = require("express");
const router = express.Router();

router.delete("/", (req, res) => {
  const indexOfItem = req.currentUser.tokens.findIndex(
    (token) => token === req.headers.token
  );

  console.log(indexOfItem);

  req.currentUser.tokens.splice(indexOfItem, 1);

  res.send({ status: 1 });
});

module.exports = router;
