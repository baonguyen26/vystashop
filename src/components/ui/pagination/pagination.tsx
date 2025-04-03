import { Button } from "../button";
import { LocalIcon } from "src/assets/local-icon";

interface PaginationProps {
  totalPage: number;
  currentPage: number;
  onPage: (page: number) => void;
}

export const Pagination = ({
  totalPage,
  currentPage,
  onPage,
}: PaginationProps) => {
  const getPageNumbers = () => {
    const pages = [];

    if (totalPage <= 7) {
      for (let i = 1; i <= totalPage; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage < 5) {
        pages.push(1, 2, 3, 4, 5, "...", totalPage);
      } else if (currentPage >= 5 && currentPage <= totalPage - 4) {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPage
        );
      } else {
        pages.push(
          1,
          "...",
          totalPage - 4,
          totalPage - 3,
          totalPage - 2,
          totalPage - 1,
          totalPage
        );
      }
    }

    return pages;
  };

  return (
    <>
      <div className="flex flex-row flex-nowrap justify-center items-center mx-auto mt-10 px-5">
        <div className="flex items-center gap-[24px]">
          <Button
            variant="outlined"
            startIcon={
              <LocalIcon
                iconName="ic_arrow"
                className="rotate-[90deg] [&>path]:fill-black"
              />
            }
            className="p-[10px]"
            disabled={currentPage == 1}
            onClick={() => onPage(currentPage - 1)}
          />

          <div className="flex items-center gap-[8px]">
            {getPageNumbers().map((page, index) => (
                <Button
                variant="transparent"
                size="sm"
                key={index}
                onClick={() => {
                  if(typeof page === "number") {
                    onPage(page);
                  } else if(page === "...") {
                    if(index == 1) {
                      onPage(Math.max(1, currentPage - 3));
                    } else {
                      onPage(Math.min(totalPage, currentPage + 3));
                    }
                  }
                }}
              >
                <p className={`cursor-pointer ${currentPage == page ? "text-blue-700 font-[600]" : "text-gray-500 font-[400]"}`}>{page}</p>
              </Button>
            ))}
          </div>

          <Button
            variant="outlined"
            startIcon={
              <LocalIcon
                iconName="ic_arrow"
                className="rotate-[-90deg] [&>path]:fill-black"
              />
            }
            className="p-[10px]"
            disabled={currentPage == totalPage}
            onClick={() => onPage(currentPage + 1)}
          />
        </div>
      </div>
    </>
  );
};
