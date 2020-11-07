import axios from "axios";

const BASEURL = "https://randomuser.me/api/?inc=name,email,login,phone,id,picture&";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(...queries) {
    return axios.get(BASEURL + queries.join("&"));
  },

  getNumOfUsers: function(num) {
    return this.search(`results=${num}`);
  }
};
