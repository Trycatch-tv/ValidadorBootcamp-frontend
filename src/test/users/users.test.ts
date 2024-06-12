import { describe, expect, test } from "vitest";

//Test de ejemplo

describe("example users", () => {
  test("1 + 1 = 2", () => {
    expect(1 + 2).toBe(3);
  });
  //Este test falla como ejemplo
  test("2 + 2 = 4", () => {
    expect(2 + 1).toBe(4);
  });
});
