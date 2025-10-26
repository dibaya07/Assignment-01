import LeftArea from "./leftArea/page";
import RightArea from "./rightArea/page";

export default function Home() {
  return (
    <div className="flex bg-[#23272B] justify-around w-screen h-screen xl:py-14 md:py-8 xl:px-4 md:px-1">
      <LeftArea />
      <RightArea />
      <hr className="absolute w-[40%] xl:bottom-12 md:bottom-6 xl:right-20 md:right-10 h-1 bg-[#363C43] shadow-[1px_3px_3px_1px_#1a1b1c] rounded-full  border-none" />
    </div>
  );
}
