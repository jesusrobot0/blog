"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

export function SortButton() {
  const [toggle, setToggle] = useState(false);
  const [sorting, setSorting] = useState("newest");

  const currentPath = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const params = new URLSearchParams(searchParams);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleChangeSorting = (e: ChangeEvent<HTMLInputElement>) => {
    setSorting(e.target.value);
  };

  const createPageUrl = (newPage: string) => {
    params.set("sortBy", String(newPage));
    router.replace(`${currentPath}?${params.toString()}`);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createPageUrl(sorting);
    setToggle(!toggle);
  };

  useEffect(() => {
    const body = document.body;
    if (toggle) {
      body.classList.add("overflow-y-hidden");
    } else {
      body.classList.remove("overflow-y-hidden");
    }

    return () => {
      body.classList.remove("overflow-y-hidden");
    };
  }, [toggle]);
  return (
    <div className="relative">
      <button
        className={`w-fit h-[42px] px-10 flex items-center gap-2 border border-transparent rounded-full bg-gray-200 z-30 hover:border-textColor hover:bg-white transition-colors duration-300 ${
          toggle ? "!border-textColor bg-white" : ""
        }`}
        onClick={handleToggle}
      >
        <span className="text-[18px]">Sort</span>
        <img
          src="/icons/chevron.svg"
          alt="Chevron"
          className={`w-[14px] h-[14px] mt-[1px] ${
            toggle ? "rotate-180" : ""
          } transition-transform duration-200`}
        />
      </button>
      <div
        className={`absolute  top-[52px] w-[200px]   p-[15px] border rounded-lg bg-white shadow-sm z-30 ${
          toggle ? "block" : "hidden"
        }`}
      >
        <form onSubmit={handleSubmit}>
          <fieldset className="mb-[15px] flex flex-col gap-3">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                onChange={handleChangeSorting}
                checked={sorting === "newest"}
                value="newest"
                className="h-4 w-4 text-background"
              />
              <span className="ml-3">Newest → Oldest</span>
            </label>

            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                onChange={handleChangeSorting}
                checked={sorting === "oldest"}
                value="oldest"
                className="h-4 w-4 text-blue-600"
              />
              <span className="ml-2">Oldest → Newest</span>
            </label>

            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                onChange={handleChangeSorting}
                checked={sorting === "az"}
                value="az"
                className="h-4 w-4 text-blue-600"
              />
              <span className="ml-2">Alphabetical (A-Z)</span>
            </label>

            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                onChange={handleChangeSorting}
                checked={sorting === "za"}
                value="za"
                className="h-4 w-4 text-blue-600"
              />
              <span className="ml-2">Alphabetical (Z-A)</span>
            </label>
          </fieldset>
          <fieldset className=" w-[170px] flex justify-between">
            <button className="w-1/2 py-2 text-[#666]">Cancel</button>
            <button type="submit" className="w-1/2 py-2">
              Apply
            </button>
          </fieldset>
        </form>
      </div>
      <div
        className={`w-screen h-screen top-0 left-0 z-20  ${
          toggle ? "fixed" : "hidden"
        }`}
        onClick={handleToggle}
      ></div>
    </div>
  );
}
