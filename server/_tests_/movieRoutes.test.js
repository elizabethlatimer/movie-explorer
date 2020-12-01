process.env.NODE_ENV = "test";

const request = require("supertest");
const app = require("../../app")
const db = require('../../db');

const Movies = require('../models/movies');

/**GET /movies returns {
  "movies": {
    "numResults": 0,
    "results": [{movie},...]
  }
} */

describe("GET /movies tests", () => {
  test("Gets list of movies with detail and count of results", async function () {

  });


})