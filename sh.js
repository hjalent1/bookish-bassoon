function livepro() {
  return "Sentara Health";
}

test("livepro output", () => {
  expect(livepro()).toBe("Sentara Health");
});
