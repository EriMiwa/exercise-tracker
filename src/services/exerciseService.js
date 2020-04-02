import http from './httpService';
import { apiUrl } from '../config.json';

const apiEndpoint = apiUrl + '/exercises/';

export function getExercises() {
  return http.get(apiEndpoint)
}

export function getExercise(exerciseId) {
  return http.get(apiEndpoint + exerciseId)
}

export function saveExercise(exercise) {
  return http.post(apiEndpoint + "add/" , exercise)
}

export function editExercise(exerciseId, exercise) {
  return http.post(apiEndpoint + "update/" + exerciseId , exercise)
}

export function deleteExercise(exerciseId) {
  return http.delete(apiEndpoint + exerciseId);
}