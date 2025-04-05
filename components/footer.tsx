import Link from "next/link";

export default function Footer(){
	return(
		<div>
			<p className="text-xl text-center mt-[30px]"><Link href='mailto:felipeeliasrech@pm.me' className="underline underline-offset-4">felipeeliasrech@pm.me</Link></p>
		</div>
	)
}