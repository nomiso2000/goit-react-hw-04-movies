import queryString from "query-string";

export default function parseQueryString(qs) {
  return queryString.parse(qs);
}
