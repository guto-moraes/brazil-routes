import { cn } from "@/lib/utils";
import type { PaginationTypes } from "@/types/components-types";

const Pagination = ({
  hasPrevious,
  hasNext,
  offset,
  total,
  limit,
  maxItems,
  maxLeft,
  handlePagination,
}: PaginationTypes) => {
  const currentPage = offset ? offset / limit + 1 : 1;
  const pages = Math.ceil((total ?? 0) / limit);
  const maxFirst = Math.max(pages - (maxItems - 1), 1);
  const first = Math.min(Math.max(currentPage - maxLeft, 1), maxFirst);

  return (
    <div className="pagination flex justify-end items-center text-sm mt-24">
      <ul className="flex gap-x-2">
        {hasPrevious && (
          <li>
            <button
              className={cn(
                "rounded-xs h-7 grid place-content-center px-2 text-tan-50 bg-tan-600 border border-tan-600",
                "hover:bg-tan-700 border hover:border-tan-700 transition-colors duration-300 cursor-pointer",
              )}
              onClick={() => handlePagination(currentPage - 1)}
            >
              Anterior
            </button>
          </li>
        )}
        {Array.from({ length: Math.min(maxItems, pages) })
          .map((_, index) => index + first)
          .map((page) => (
            <li key={page}>
              <button
                className={cn(
                  "rounded-xs size-7 grid place-content-center px-2 text-tan-50 bg-tan-600 border border-tan-600",
                  "hover:bg-tan-700 border hover:border-tan-700 transition-colors duration-300 cursor-pointer",
                  "disabled:text-tan-400 disabled:border-tan-400 disabled:bg-tan-200 disabled:cursor-not-allowed",
                )}
                disabled={page === currentPage ? true : false}
                onClick={() => handlePagination(page)}
              >
                {page}
              </button>
            </li>
          ))}
        {hasNext && (
          <li>
            <button
              className={cn(
                "rounded-xs h-7 grid place-content-center px-2 text-tan-50 bg-tan-600 border border-tan-600",
                "hover:bg-tan-700 border hover:border-tan-700 transition-colors duration-300 cursor-pointer",
              )}
              onClick={() => handlePagination(currentPage + 1)}
            >
              Próximo
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Pagination;
