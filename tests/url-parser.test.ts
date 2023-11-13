// urlParser.test.ts

import { parseUrl } from "../url-parser";

describe("URL Parser", () => {
  test("Parse URL with variables and query parameters", () => {
    const urlFormat = "/:version/api/:collection/:id";
    const urlInstance = "/6/api/listings/3?sort=desc&limit=10";

    const parsedResult = parseUrl(urlFormat, urlInstance);

    expect(parsedResult).toEqual({
      version: 6,
      collection: "listings",
      id: 3,
      sort: "desc",
      limit: 10,
    });
  });
});
