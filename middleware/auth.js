module.exports.checkToken = (req, res, next) => {
  const { simpsons, headers } = req;

  //important in case token is not set!
  if (!headers.token) {
    res.send({ status: 0, error: "Token not set!" });
  }

  //find the user
  let indexOfItem = -1;
  simpsons.forEach((character, index) => {
    if (character.tokens) {
      character.tokens.forEach((token) => {
        if (token === headers.token) {
          indexOfItem = index;
        }
      });
    }
  });

  //check the token
  if (indexOfItem === -1) {
    res.send({ status: 0, error: "Token not valid!" });
    return;
  }

  req.currentUser = simpsons[indexOfItem];

  next();
};
