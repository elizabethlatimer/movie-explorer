/** Routes for movie info. */

const Movie = require("../models/movies");
const express = require("express");
const router = new express.Router();


// router.post("/login", async function(req, res, next) {
//   try {
//     const user = await User.authenticate(req.body);
//     const token = createToken(user);
//     return res.json({ token });
//   } catch (e) {
//     console.error("Something went wrong in the login route")
//     return next(e);
//   }
// });


module.exports = router;