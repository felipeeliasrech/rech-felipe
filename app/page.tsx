import { Code, GithubIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  const res = await fetch("http://localhost:3000/api");
  const data = await res.json();

  return (
    <div>
      <div>
        <div className="bg-[#f5f0e8] dark:bg-[#313134] w-[500px] p-[10px] rounded-lg m-auto text-center">
          Backend developer with a hobby in robotics.
        </div>
        <div className="w-[500px] m-auto mt-[15px]">
          <h1 className="underline underline-offset-8 decoration-4 decoration-[#525252] dark:decoration-[#313134] mb-[15px]">
            Works
          </h1>
        </div>
        <div className="w-[500px] m-auto mt-[15px]">
          <h1 className="underline underline-offset-8 decoration-4 decoration-[#525252] dark:decoration-[#313134] mb-[15px]">
            Skills
          </h1>
          <ul>
            {data.map((skill: any) => (
              <li key={skill.id} className="p-[5px] bg-sky-500 inline-block mr-[5px] rounded-lg">{skill.title}</li>
            ))}
          </ul>
        </div>
        <div className="w-[500px] m-auto mt-[15px]">
          <h1 className="underline underline-offset-8 decoration-4 decoration-[#525252] dark:decoration-[#313134] mb-[15px]">
            Where to find me
          </h1>
          <p className="p-[10px]">
            <Link
              href="https://github.com/felipeeliasrech"
              className="hover:bg-sky-500 hover:rounded-lg p-[10px]"
            >
              <GithubIcon className="float-left" />
              @felipeeliasrech
            </Link>
          </p>
          <p className="p-[10px]">
            <Link
              href="https://leetcode.com/u/felipeeliasrech/"
              className="hover:bg-sky-500 hover:rounded-lg p-[10px]"
            >
              <Code className="float-left" />
              @felipeeliasrech
            </Link>
          </p>
          <p className="p-[10px]">
            <Link
              href="https://www.linkedin.com/in/felipeeliasrech/"
              className="hover:bg-sky-500 hover:rounded-lg p-[10px]"
            >
              <LinkedinIcon className="float-left" />
              @felipeeliasrech
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
