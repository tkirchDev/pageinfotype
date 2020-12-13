/**
 * @param first: number
 * @param skip: number
 * @param totalCount: number
 *
 * @return [type]
 */
declare function get(first: number, skip: number, totalCount: number): {
    nodesPerPage: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    currentPage: number;
    lastPage: number;
};
export { get };
