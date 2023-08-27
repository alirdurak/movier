export default function MovieDetail() {
  return (
    <div className="ml-10 mb-11">
      <div className="pt-56 relative z-10">
        <div className="text-title-gray h-9 w-72 font-bold">
          <div className="w-full h-full bg-content-gray/20 animate-pulse "></div>
        </div>
        <div className="flex gap-4 mt-5 items-center">
          <span className="text-orange-light flex h-4 w-11 items-center gap-2">
            <div className="w-full h-full bg-content-gray/20 animate-pulse "></div>
          </span>
          <div className="text-content-gray font-normal h-4 w-16 ">
            <div className="w-full h-full bg-content-gray/20 animate-pulse "></div>
          </div>
        </div>
        <div className="mt-4 ">
          <div className="text-orange-light h-5 mb-4 w-60 font-bold">
            <div className="w-full h-full bg-content-gray/20 animate-pulse "></div>
          </div>
          <div className="text-title-gray h-4 w-44 ">
            <div className="w-full h-full bg-content-gray/20 animate-pulse "></div>
          </div>
        </div>

        <div className="text-orange-light text-lg font-bold mt-2 cursor-pointer w-56 h-6">
          <div className="w-full h-full bg-content-gray/20 animate-pulse "></div>
        </div>
      </div>
    </div>
  );
}
