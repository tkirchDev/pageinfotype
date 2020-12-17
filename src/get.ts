/**
 * @param first: number
 * @param skip: number
 * @param totalCount: number
 * 
 * @return [type]
 */
function get(first: number, skip: number, totalCount: number) {
  let lastPage = Math.ceil(totalCount / first);
  return {
    nodesPerPage: first,
    hasNextPage: skip < lastPage,
    hasPreviousPage: skip > 1,
    currentPage: skip ? skip + 1 : 1,
    lastPage,
  };
}

export { get };
