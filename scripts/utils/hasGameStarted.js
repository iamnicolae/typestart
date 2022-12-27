export const hasGameStarted = {
  current: false,
  get get() {
    return this.current;
  },
  set set(gameState) {
    return this.current = gameState;
  }
}