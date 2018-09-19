/**
 * Encharged of parsing URL params
 * @param {string} qs
 */
export function parseQuery(queryString) {
  const query = {};
  const pairs = queryString.replace(/^\?/u, '').split('&');
  pairs.forEach((element) => {
    const pair = element.split('=');
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
  });
  return query;
}
