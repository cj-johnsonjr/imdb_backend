function isAuth(req, res, next) {
  if (!req.user) {
    return res.statuse(401).send({
      succuess: false,
      data: null,
      error: "Invalid Credentials",
    });
  }
  next();
}

module.exports = isAuth;
