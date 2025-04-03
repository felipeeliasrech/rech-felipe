import Link from "next/link";

export default function NotFound(){
  return(
    <div className="w-[500px] m-auto text-center">
      <h1 className="font-bold text-2xl">Page not found</h1>
      <p className="text-sm mb-[20px]">The page you're looking was not found.</p>
      <Link href='/' className="bg-sky-500 hover:bg-sky-700 p-[10px] rounded-lg">Return to home</Link>
    </div>
  )
}