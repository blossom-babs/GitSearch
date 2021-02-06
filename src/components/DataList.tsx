import React from "react";
import { USER_DATA } from "../queries";
import { useQuery } from "@apollo/client";
import { ProfileCard } from "./ProfileCard";
import { Repo } from "./Repo";

interface DataProps {
  searchTerm?: any;
}

const formatDate = (date: string) => {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let dateArr = date.substring(0, 10).split("-");

  let themonths = months[Number(dateArr[1]) - 1];

  return `${themonths} ${dateArr[2]}, ${dateArr[0]}`;
};

export const DataList: React.FC<DataProps> = ({ searchTerm }) => {
  const { loading, error, data } = useQuery(USER_DATA, {
    variables: { login: searchTerm },
  });
  console.log(error);
  if (loading) return <h1 className="header__title">Loading</h1>;
  if (error) return <h1 className="header__title">User Not found</h1>;
  if (!data) return <h1 className="header__title">There are no such users</h1>;

  return (
    <>
      <ProfileCard
        src={data.user.avatarUrl}
        fullName={data.user.name}
        userName={data.user.login}
        bio={data.user.bio}
        date={formatDate(data.user.createdAt)}
        followers={data.user.followers.totalCount}
        following={data.user.following.totalCount}
        location={data.user.location}
        totalRepo={data.user.repositories.totalCount}
      />
      <div>
        {data.user.topRepositories.nodes.length > 0 && (
          <h1 className="header__title">Top repositories</h1>
        )}
        <div className="repo">
          {data.user.topRepositories.nodes.length > 0 &&
            Array.from(
              data.user.topRepositories.nodes
            ).map((repo: any, index: number) => (
              <Repo
                key={index}
                repoName={repo.name}
                repoDesc={repo.description}
                forks={repo.forkCount}
                color={
                  repo.primaryLanguage == null
                    ? null
                    : repo.primaryLanguage.color
                }
                language={
                  repo.primaryLanguage == null
                    ? null
                    : repo.primaryLanguage.name
                }
                star={repo.stargazerCount}
                url={repo.url}
              />
            ))}
        </div>
      </div>
    </>
  );
};
