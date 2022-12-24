export const time = {
  current: 10000,
  get get() {
    return this.current;
  },
  set set(number) {
    return this.current = number;
  }
}