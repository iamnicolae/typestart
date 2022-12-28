export const localDB = {
  current: JSON.parse(localStorage.getItem("score") || "[]"),
  get get() {
    return this.current;
  },
  set set(data) {
    return this.current = localStorage.setItem('score', JSON.stringify(data));
  },
}