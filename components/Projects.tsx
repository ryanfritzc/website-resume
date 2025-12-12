import Image from "next/image";
import { GithubGraph } from "@/components/GithubGraph";

export const Projects = () => {
  return (
    <div className="w-3/4 flex my-5 flex-col mx-auto">
      <GithubGraph />
    </div>
  );
};
