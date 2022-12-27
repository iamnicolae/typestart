export const time = {
  current: 10000,
  total: 10000,
  get get() {
    return this.current;
  },
  set set(number) {
    return this.current = number;
  },
  get getTotal() {
    return this.total;
  },
  set setTotal(number) {
    return this.total += number;
  }
}