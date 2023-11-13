// URL Parser Exercise
// We need some logic that extracts the variable parts of a url into a hash. The keys of the
// extract hash will be the "names" of the variable parts of a url, and the values of the hash
// will be the values. We will be supplied with:
// 1. A url format string, which describes the format of a url. A url format string can
// contain constant parts and variable parts, in any order, where "parts" of a url are
// separated with "/". All variable parts begin with a colon. Here is an example of
// such a url format string:

// '/:version/api/:collection/:id'

// 2. A particular url instance that is guaranteed to have the format given by the url
// format string. It may also contain url parameters. For example, given the example
// url format string above, the url instance might be:

// '/6/api/listings/3?sort=desc&limit=10'

// Given this example url format string and url instance, the hash we want that maps all
// the variable parts of the url instance to their values would look like this:

// {
//   version: 6,
//   collection: 'listings',
//   id: 3,
//   sort: 'desc',
//   limit: 10
// }

// Please implement a solution to this problem in JavaScript (or your programming
// language of choice, if applying for a DevOps position) with attention to code structure
// and readability. Feel free to use low-level libraries like Lodash.

export function parseUrl(
  format: string,
  url: string
): Record<string, string | number> {
  let result: Record<string, string | number> = {};

  const keys = format.split("/");
  const [baseUrl, queryParams] = url.split("?");
  const instanceParts = baseUrl.split("/");

  keys.forEach((key, i) => {
    if (key.startsWith(":")) {
      const keyName = key.slice(1);
      const value = instanceParts[i];

      result[keyName] = isNaN(+value) ? value : parseInt(value, 10);
    }
  });

  if (queryParams) {
    result = { ...result, ...parseQueryParams(queryParams) };
  }

  return result;
}

function parseQueryParams(queryParams: string) {
  const result: Record<string, string | number> = {};
  const paramsArray = queryParams.split("&");

  paramsArray.forEach((param) => {
    const [key, value] = param.split("=");
    result[key] = isNaN(+value) ? value : parseInt(value, 10);
  });

  return result;
}
