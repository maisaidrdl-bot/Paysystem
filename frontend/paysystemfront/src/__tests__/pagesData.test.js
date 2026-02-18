import { describe, it, expect } from "vitest";
import { pages } from "../pages/pagesData";

describe("pages structure", () => {
  it("should create 16 pages", () => {
    expect(pages.length).toBe(16);
  });

  it("each page should contain 5 links", () => {
    pages.forEach((p) => expect(p.links.length).toBe(5));
  });

  it("should have exactly 4 dropdown groups", () => {
    expect(new Set(pages.map((p) => p.dropdown)).size).toBe(4);
  });

  it("all paths should be unique", () => {
    expect(new Set(pages.map((p) => p.path)).size).toBe(
      pages.length
    );
  });
});
