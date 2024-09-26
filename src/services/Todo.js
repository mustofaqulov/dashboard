import { axiosInstance } from "../utils/config/axios";

export function getTodos() {
  return axiosInstance.get("todos");
}

export function addTodo(todo) {
  return axiosInstance.post("todos/add", todo);
}

export function deleteTodo(id) {
  return axiosInstance.delete(`todos/${id}`);
}

export function editTodo(id) {
  return axiosInstance.put(`todos/${id}`);
}
