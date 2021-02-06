import React from "react";
import { CgGitFork } from "react-icons/cg";
import { VscDebugStackframeDot } from "react-icons/vsc";
import { BsStarHalf, BsLink45Deg } from "react-icons/bs";

interface RepoProps {
  repoName?: string;
  repoDesc?: string;
  forks?: number;
  language?: string;
  color?: string;
  star?: number;
  url?: string;
}

export const Repo: React.FC<RepoProps> = ({
  repoName,
  repoDesc,
  forks,
  language,
  color,
  star,
  url,
}) => {
  return (
    <div className="repo__card">
      <h3 className="repo__title">{repoName}</h3>
      <p>{repoDesc}</p>
      <div className="repo__flex">
        <div>
          <p style={{ color: `${color}` }}>
            <VscDebugStackframeDot />
            {language}
          </p>
        </div>
        <div>
          <p>
            <CgGitFork /> {forks}
          </p>
        </div>
        <div>
          <p>
            <BsStarHalf /> {star}
          </p>
        </div>
        <div>
          <p>
            <a href={`${url}`}>
              <BsLink45Deg />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
