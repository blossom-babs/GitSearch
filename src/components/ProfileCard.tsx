import React from "react";
import { GoLocation, GoCalendar } from "react-icons/go";

interface ProfileCardProps {
  src?: string;
  fullName?: string;
  userName?: string;
  bio?: string;
  location?: string;
  date?: string;
  followers?: number;
  following?: number;
  totalRepo?: number;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  src,
  fullName,
  userName,
  bio,
  location,
  date,
  followers,
  following,
  totalRepo,
}) => {
  return (
    <div className="card">
      <img className="card__avatar" src={src} alt="avatar" />
      <h1 className="card__name card__children">{fullName}</h1>
      <p className="card__login card__children">@{userName}</p>
      <p className="card__bio card__children">{bio}</p>
      <div className="card__flex">
        <div>
          <GoLocation />
          <span className="card__flex--content">{location}</span>
        </div>

        <div>
          <GoCalendar />
          <span className="card__flex--content">{date}</span>
        </div>
      </div>
      <div className="flex card__details">
        <div>
          {followers}
          <span className="card__details--content">followers</span>
        </div>
        <div>
          {following}
          <span className="card__details--content">following</span>
        </div>
        <div>
          {totalRepo}
          <span className="card__details--content">repositories</span>
        </div>
      </div>
    </div>
  );
};
