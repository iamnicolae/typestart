export const counter = {
  current: 0,
  get get() {
    return this.current;
  },
  set set(number) {
    return this.current = number;
  }
}