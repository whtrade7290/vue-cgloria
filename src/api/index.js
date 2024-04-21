import axios from "axios";

const config = {
  baseUrl: "http://localhost:8080/",
};
function getBoardList(name) {
  return axios.get(`${config.baseUrl}${name}`);
}
function fetchTraining(id) {
  return axios.post(`${config.baseUrl}training`, { id: id });
}
function fetchSermonList(id) {
  return axios.get(`${config.baseUrl}sermonView`, { id: id });
}
function fetchTrainingNotice(trainingId) {
  return axios.post(`${config.baseUrl}training/notice`, {
    trainingId: trainingId,
  });
}
function requestLogin(username, password) {
  return axios.post(`${config.baseUrl}login`, {
    username: username,
    password: password,
  });
}

export {
  fetchTraining,
  requestLogin,
  fetchTrainingNotice,
  fetchSermonList,
  getBoardList,
};
