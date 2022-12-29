export const localDB = {
  get get() {
    return JSON.parse(localStorage.getItem("score") || "[]");
  },
  set set(data) {
    return localStorage.setItem('score', JSON.stringify(data));
  },
}