DROP TABLE IF EXISTS movies;

CREATE TABLE movies
(
    id text PRIMARY KEY NOT NULL,
    title text NOT NULL,
    upvotes integer,
    downvotes integer
);