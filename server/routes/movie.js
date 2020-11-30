/** Routes for movie info. */

const Movies = require("../models/movies");
const express = require("express");
const router = new express.Router();


//get search results for movie
router.get('/', async function (req, res, next) {
  try {
    let movies = await Movies.search(req.query.q);

    return res.json({ movies });
  } catch (err) {
    return next(err);
  }
});

//voting routes
router.post('/thumbsup', async function (req, res, next) {
  try {
    let upvotes = await Movies.upvote(req.body);

    return res.json({ upvotes })
  } catch (err) {
    return next(err);
  }
})

router.post('/thumbsdown', async function (req, res, next) {
  try {
    let downvotes = await Movies.downvote(req.body);

    return res.json({ downvotes })
  } catch (err) {
    return next(err);
  }
})

module.exports = router;