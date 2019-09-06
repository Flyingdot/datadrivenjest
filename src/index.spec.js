describe("datadriven jest", () => {
  describe("sample", () => {
    it("is even", () => {
      expect(2 % 2).toBe(0);
    });
  });

  describe("first dumb sample", () => {
    it.each([2, 4, 6])("should be evens", x => {
      expect(x % 2).toBe(0);
    });
  });

  describe("play with params", () => {
    it.each([2, 4, 5, 6])("%i should be even", n => {
      expect(n % 2).toBe(0);
    });

    it.each([[2, 4], [6, 36], [8, 64]])(
      "can square %i to %s",
      (n, expected) => {
        expect(n * n).toBe(expected);
      }
    );

    it.each`
      n     | expected
      ${1}  | ${1}
      ${2}  | ${4}
      ${4}  | ${16}
      ${12} | ${144}
    `("can square $n to $expected", ({ n, expected }) => {
      expect(n * n).toBe(expected);
    });
  });
});
