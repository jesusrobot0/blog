import { Loader } from "../loader/Loader";

interface Props {
  text: string;
  isLoading: boolean;
  onLoadMore: () => void;
}

export function LoadMoreButton({ text, isLoading, onLoadMore }: Props) {
  return (
    <div className="mb-[70px]">
      {isLoading ? (
        <Loader />
      ) : (
        <button
          onClick={onLoadMore}
          className="overflow-hidden w-[258px] h-[52px] flex justify-center items-center gap-3 text-[18px] tracking-[.9px] uppercase border border-[#121212] rounded-full group hover:border-transparent hover:bg-[#AD9C94] transition-colors duration-500"
        >
          <div className="relative flex flex-col">
            <span className="relative top-0 group-hover:top-[-40px] group-hover:text-white transition-all duration-100">
              {text}
            </span>
            <span className="absolute bottom-[-40px] group-hover:bottom-0 text-white transition-all duration-200">
              {text}
            </span>
          </div>

          <div className="flex justify-center items-center w-[30px] h-[30px] rounded-full bg-white group-hover:rotate-90 transition-transform duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-[25px] h-[25px]"
              viewBox="0 0 50 50"
            >
              <g transform="translate(0.364 0.756)" id="ss3522480518_1">
                <path
                  d="M 24.684 48.487 L 0 24.244 L 24.684 0 L 49.369 24.244 Z"
                  fill="transparent"
                ></path>
                <path
                  d="M 11.494 9.972 C 13.186 11.634 15.162 12.982 17.312 13.941 C 19.461 14.899 21.741 15.45 24.021 15.56 C 26.3 15.67 28.536 15.338 30.599 14.583 C 32.663 13.828 34.514 12.665 36.046 11.159 L 36.101 11.213 L 36.101 11.213 L 37.952 13.031 L 37.952 13.031 L 38.007 13.085 C 36.474 14.59 35.289 16.408 34.521 18.434 C 33.752 20.461 33.414 22.657 33.526 24.896 C 33.638 27.135 34.198 29.374 35.175 31.485 C 36.151 33.596 37.524 35.537 39.215 37.198 L 37.322 39.057 C 30.336 32.195 29.998 23.419 34.476 16.445 L 13.268 37.275 L 11.417 35.456 L 32.625 14.627 C 25.524 19.025 16.588 18.693 9.601 11.831 Z"
                  fill="#121212"
                ></path>
              </g>
            </svg>
          </div>
        </button>
      )}
    </div>
  );
}
