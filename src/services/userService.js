import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/users";
// const apiEndpoint = "/users";

export function getUsers() {
  return http.get(apiEndpoint);
}

export function register(user) {
  return http.post(apiEndpoint + "/add", {
    username: user.username
  });
}
