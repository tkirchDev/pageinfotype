/**
 * @param first: number
 * @param skip: number
 * @param totalCount: number
 * 
 * @return [type]
 */
function get(first: number = 20, skip: number = 0, totalCount: number) {
  let lastPage = Math.ceil(totalCount / first) - 1;
  return {
    nodesPerPage: first,
    hasNextPage: skip < lastPage,
    hasPreviousPage: skip > 0,
    currentPage: skip,
    lastPage,
  };
}

export { get };
