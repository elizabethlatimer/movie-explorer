import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

class backendAPI {
  //assembles axios request with appropriate verbs and params or data
  static async request(endpoint, paramsOrData = {}, verb = "get") {
    try {
      return (await axios({
        method: verb,
        url: `${BASE_URL}/${endpoint}`,
        [verb === "get" ? "params" : "data"]: paramsOrData
      })).data;
    }

    catch (err) {
      console.error("API Error:", err.response);
      let message = err?.response?.data?.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  //takes query string and returns an object with number of results and array of movie detail objects
  static async searchMovies(query) {
    let res = await this.request('movie', {q: query});
    return res;
  }

  //takes movie id and title and either increases up or down votes or adds to database, returns vote count
  static async upvote(movie) {
    let res = await this.request('movie/thumbsup', movie, 'post');
    return res;
  }

  static async downvote(movie) {
    let res = await this.request('movie/thumbsdown', movie, 'post');
    return res;
  }
}

export default backendAPI;