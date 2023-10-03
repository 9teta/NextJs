import Link from "next/link";
import ReadStoryCounter from "./ReadStoryCounter";

export default function Nav() {

  return (
    <nav 
      className="Nav 
      h-24 p-2 
      bg-gradient-to-br from-slate-200 to-slate-400 
      border-double border-stone-500 border-2
      overflow-hidden sticky top-0 z-20 
      flex justify-around items-center">
      <Link href="/" className="text-[3rem]">
        🏠
      </Link>
      <ReadStoryCounter />
      <Link
        href="https://developer.mozilla.org"
        className="hover:text-blue-600 hover:underline"
      >
        MDN
      </Link>
    </nav>
  );
}
