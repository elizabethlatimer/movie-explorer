process.env.NODE_ENV = "test";

const request = require("supertest");
const app = require("../app")
const db = require('../db');

const Movies = require('../models/movies');


let sampleMovieResp = {
  "numResults": 1,
  "results": [
    {
      "id": 618354,
      "title": "Superman: Man of Tomorrow",
      "overview": "It’s the dawn of a new age of heroes, and Metropolis has just met its first. But as Daily Planet intern Clark Kent – working alongside reporter Lois Lane – secretly wields his alien powers of flight, super-strength and x-ray vision in the battle for good, there’s even greater trouble on the horizon.",
      "thumbnailPoster": "https://image.tmdb.org/t/p/w185/6Bbq8qQWpoApLZYWFFAuZ1r2gFw.jpg",
      "mainPoster": "https://image.tmdb.org/t/p/w342/6Bbq8qQWpoApLZYWFFAuZ1r2gFw.jpg",
      "releaseDate": "August 22, 2020",
      "director": "Chris Palmer"
    }]
  }


  beforeEach(async function () {
    await db.query("DELETE FROM movies");

    await db.query(`INSERT INTO movies( id, title, upvotes, downvotes)
    VALUES ('0', 'Existing Movie', 1, 1)`);
  })

  /**GET /movies returns {
    "movies": {
      "numResults": 1,
      "results": [{movie},...]
    }
  } */
describe("GET /movies tests", () => {
  Movies.search = jest.fn(() => sampleMovieResp);
  test("Gets list of movies with detail and count of results", async function () {
    const response = await request(app).get('/movie');
    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual({ movies: sampleMovieResp });


  });


})

/**POST /movies/thumbsup -- if not in db, adds it, else updates votes
 * in both cases returns {upvotes: 1} */

describe("POST /movie/thumbsup tests", () => {
  test("Upvoting a movie not in db creates new record and returns upvote total", async function () {
    const resp = await request(app)
      .post('/movie/thumbsup')
      .send({ title: "New Test Movie", id: "2" });

    expect(resp.statusCode).toEqual(200);
    expect(resp.body).toEqual({ upvotes: 1 });

    const existsInDB = (await db.query(`SELECT * FROM movies WHERE id='2'`)).rows[0]
    expect(existsInDB).toBeTruthy();
    expect(existsInDB.downvotes).toEqual(0);
    expect(existsInDB.upvotes).toEqual(1);
  });

  test("Upvoting a movie already in db, doesn't create a new record, just updates votes", async function () {
    const inDB = (await db.query(`SELECT * FROM movies WHERE id='0'`)).rows[0];
    expect(inDB).toBeTruthy();

    const resp = await request(app)
      .post('/movie/thumbsup')
      .send({ title: "Existing Movie", id: 0 });

    expect(resp.statusCode).toEqual(200);
    expect(resp.body).toEqual({ upvotes: 2 });

    const updatedInDB = (await db.query(`SELECT * FROM movies WHERE id='0'`)).rows[0];
    expect(updatedInDB.upvotes).toEqual(2);
  });
})

/**POST /movies/thumbsdown -- if not in db, adds it, else updates votes
 * in both cases returns {downvotes: 1} */

describe("POST /movie/thumbsdown tests", () => {
  test("Upvoting a movie not in db creates new record and returns upvote total", async function () {
    const resp = await request(app)
      .post('/movie/thumbsdown')
      .send({ title: "New Test Movie", id: "2" });

    expect(resp.statusCode).toEqual(200);
    expect(resp.body).toEqual({ downvotes: 1 });

    const existsInDB = (await db.query(`SELECT * FROM movies WHERE id='2'`)).rows[0]
    expect(existsInDB).toBeTruthy();
    expect(existsInDB.upvotes).toEqual(0);
    expect(existsInDB.downvotes).toEqual(1);
  });

  test("Upvoting a movie already in db, doesn't create a new record, just updates votes", async function () {
    const inDB = (await db.query(`SELECT * FROM movies WHERE id='0'`)).rows[0];
    expect(inDB).toBeTruthy();

    const resp = await request(app)
      .post('/movie/thumbsdown')
      .send({ title: "Existing Movie", id: 0 });

    expect(resp.statusCode).toEqual(200);
    expect(resp.body).toEqual({ downvotes: 2 });

    const updatedInDB = (await db.query(`SELECT * FROM movies WHERE id='0'`)).rows[0];
    expect(updatedInDB.downvotes).toEqual(2);
  });
})

afterAll(async function () {
  // close db connection
  await db.end();
});