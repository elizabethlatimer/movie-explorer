/** Shared config for application; can be req'd many places. */

require("dotenv").config();

const PORT = +process.env.PORT || 3001;

const API_KEY = process.env.API_KEY;

// database is:
//
// - on Heroku, get from env var DATABASE_URL
// - in testing, 'movieapi-test'
// - else: 'movieapi'

let DB_URI;

if (process.env.NODE_ENV === "test") {
  DB_URI = "movieapi-test";
} else {
  DB_URI = process.env.DATABASE_URL || "movieapi";
}

module.exports = {
  PORT,
  API_KEY,
  DB_URI
};
