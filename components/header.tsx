import styles from "@/components/styles.module.css";
import Link from "next/link";
import ThemeChanger from "@/components/theme";
import SvgGithub from "@/components/svg/github";
 import Image from "next/image";

export default function Header() {
	return (
		<div className={styles.header}>
			<span className="flex">
				<Image
					src='/cat.png'
					width={32}
					height={32}
					alt=''
					className='-rotate-45 dark:invert'
				/>
				<h1 className="text-xl font-bold">Felipe Elias Rech</h1>
			</span>
			<ul>
				<li>
					<Link href="/works" className="hover:underline">
						Works
					</Link>
				</li>
				<li>
					<SvgGithub />
					<Link
						href="https://github.com/felipeeliasrech/rech-felipe"
						target="_blank"
						className="hover:underline"
					>
						Source
					</Link>
				</li>
			</ul>
			<ThemeChanger />
		</div>
	);
}
