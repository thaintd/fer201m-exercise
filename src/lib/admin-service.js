import axios from "axios";

export const adminPortalService = {
  login: function () {
    return axios.get("http://localhost:8080/login");
  },
  getUser: function (id) {
    return axios.get(`http://localhost:8080/users/${id}`);
  },

  addUser: function (id, role) {
    return axios.get(`http://localhost:8080/users/${id}`, role);
  },
};
