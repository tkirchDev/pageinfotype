/**
 * @param first: number
 * @param skip: number
 * @param totalCount: number
 *
 * @return [type]
 */
declare function get(first: number | undefined, skip: number | undefined, totalCount: number): {
    nodesPerPage: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    currentPage: number;
    lastPage: number;
};
export { get };
