import axios from "axios";

export const PortalService = {
  login: function () {
    return axios.get("http://localhost:8080/login");
  },
  getUser: function (id) {
    return axios.get(`http://localhost:8080/users/${id}`);
  },
  getALLUser: function () {
    return axios.get(`http://localhost:8080/users`);
  },
  postCreateUser: function (role, email, name, image, classroom, password) {
    return axios.post(`http://localhost:8080/users`, {
      role,
      email,
      name,
      image,
      classroom,
      password,
    });
  },
  putUpdateUser: function (id, name, image, email, role, classroom) {
    return axios.put(`http://localhost:8080/users/${id}`, {
      name,
      image,
      email,
      role,
      classroom,
    });
  },
  deleteUser: function (id) {
    return axios.delete(`http://localhost:8080/users/${id}`);
  },
};
