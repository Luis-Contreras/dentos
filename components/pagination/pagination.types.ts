export interface PaginationTypes {
    currentPage: number 
    totalPages: number 
    onPageChange: (newPage: number) => void
}