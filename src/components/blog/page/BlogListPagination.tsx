import { PAGE_OFFSET } from "@/constants/constants"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export default function BlogListPagination({ count, normalizedPage }: { count: number | null, normalizedPage: number }) {
  if (!count) {
    return null
  }
  const pageCount = Math.ceil(count / PAGE_OFFSET)
  const paginationArray = Array.from({ length: pageCount }).fill(1)

  return (
    <Pagination>
      <PaginationContent>
        {normalizedPage && normalizedPage > 1 &&
          <PaginationItem>
            <PaginationPrevious href={`/blog/page/${normalizedPage - 1}`} />
          </PaginationItem>
        }
        {
          paginationArray.map((_, index) => (
            <PaginationItem key={`pagination-page-${index}`} >
              <PaginationLink href={`/blog/page/${index + 1}`}>
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))
        }
        {normalizedPage && normalizedPage < pageCount &&
          <PaginationItem>
            <PaginationNext href={`/blog/page/${normalizedPage + 1}`} />
          </PaginationItem>
        }
      </PaginationContent >
    </Pagination >
  )
}