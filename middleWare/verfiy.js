//if user is loggedin/verfied then go to next=>

const verify = (req, res, next) => {
  // let userId = req.headers["userId"];
  let userId = req.headers;
  // console.log(userId, "=======a=sas=as=da=da=dad=asasd");
  if (!userId) {
    return res.status(401).json({ error: "UserId required" });
  }
  next();
};
const auth = { verify: verify };

module.exports = auth;
