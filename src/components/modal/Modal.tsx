import React from "react";
import "./Modal.css";
import { User } from "../../types/UserInterface";

interface ModalProps {
  user: User | null;
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ user, isOpen, onClose }) => {
  if (!isOpen || !user) return null;

  return (
    <aside className="modalBackdrop" onClick={onClose}>
      <section className="modalContent" onClick={(e) => e.stopPropagation()}>
        <header className="modalHeader">
          <div className="modalHeaderContent">
            <h2 className="modalUserName">{user.name}</h2>
            <p className="modalUserCompany">{user.company.name}</p>
          </div>
          <button
            className="modalCloseBtn"
            aria-label="Close modal"
            onClick={onClose}
          >
            &times;
          </button>
        </header>
        <div className="modalBody">
          <section className="modalColumn">
            <p>
              <strong>Username:</strong>
            </p>
            <p>{user.username}</p>
          </section>
          <section className="modalColumn">
            <p>
              <strong>Address:</strong>
            </p>
            <p>{user.address.street}</p>
            <p>{user.address.suite}</p>
            <p>{user.address.city}</p>
          </section>
          <section className="modalColumn">
            <p>
              <strong>Phone:</strong>
            </p>
            <p>{user.phone}</p>
          </section>
          <section className="modalColumn">
            <p>
              <strong>Email:</strong>
            </p>
            <p>{user.email}</p>
            <p>
              <strong>Website:</strong>
            </p>
            <p>{user.website}</p>
          </section>
        </div>
      </section>
    </aside>
  );
};

export default Modal;
