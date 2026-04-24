import { cn } from "@/lib/utils";

const Pagination = () => {
  return (
    <div className="pagination flex justify-center items-center text-sm mt-24">
      <ul className="flex gap-x-2">
        <li>
          <button
            className={cn(
              "rounded-xs h-7 grid place-content-center px-2 text-tan-50 bg-tan-600 border border-tan-600",
              "hover:bg-tan-700 border hover:border-tan-700 transition-colors duration-300 cursor-pointer",
            )}
          >
            Anterior
          </button>
        </li>
        <li>
          <button
            className={cn(
              "rounded-xs size-7 grid place-content-center px-2 text-tan-50 bg-tan-600 border border-tan-600",
              "hover:bg-tan-700 border hover:border-tan-700 transition-colors duration-300 cursor-pointer",
              "data-[active=true]:text-tan-400 data-[active=true]:border-tan-400 data-[active=true]:bg-tan-200",
              "data-[ative=true]:disabled data-[active=true]:cursor-not-allowed",
            )}
            data-active="true"
          >
            1
          </button>
        </li>
        <li>
          <button
            className={cn(
              "rounded-xs size-7 grid place-content-center px-2 text-tan-50 bg-tan-600 border border-tan-600",
              "hover:bg-tan-700 border hover:border-tan-700 transition-colors duration-300 cursor-pointer",
              "data-[active=true]:text-tan-400 data-[active=true]:border-tan-400 data-[active=true]:bg-tan-200",
              "data-[ative=true]:disabled data-[active=true]:cursor-not-allowed",
            )}
            data-active="false"
          >
            2
          </button>
        </li>
        <li>
          <button
            className={cn(
              "rounded-xs size-7 grid place-content-center px-2 text-tan-50 bg-tan-600 border border-tan-600",
              "hover:bg-tan-700 border hover:border-tan-700 transition-colors duration-300 cursor-pointer",
              "data-[active=true]:text-tan-400 data-[active=true]:border-tan-400 data-[active=true]:bg-tan-200",
              "data-[ative=true]:disabled data-[active=true]:cursor-not-allowed",
            )}
            data-active="false"
          >
            3
          </button>
        </li>
        <li>
          <button
            className={cn(
              "rounded-xs h-7 grid place-content-center px-2 text-tan-50 bg-tan-600 border border-tan-600",
              "hover:bg-tan-700 border hover:border-tan-700 transition-colors duration-300 cursor-pointer",
            )}
          >
            Próximo
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
