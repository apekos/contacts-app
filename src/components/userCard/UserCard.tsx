import React from "react";
import { User } from "../../types/UserInterface";
import "./UserCard.css";
import { ReactComponent as ViewMoreIcon } from "../../assets/icon-supervisor.svg";

interface UserCardProps {
  user: User;
  onSelect: (user: User) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onSelect }) => {
  return (
    <article className="userCard">
      <h3 className="userCard-name">{user.name}</h3>
      <p className="userCard-company">
        Company: <span className="userCard-detail">{user.company.name}</span>
      </p>
      <p className="userCard-email">
        E-mail: <span className="userCard-detail">{user.email}</span>
      </p>
      <footer className="userCard-footer">
        <button className="userCard-viewMoreBtn" onClick={() => onSelect(user)}>
          <ViewMoreIcon />
        </button>
      </footer>
    </article>
  );
};

export default UserCard;
