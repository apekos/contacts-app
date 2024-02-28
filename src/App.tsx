import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/footer";
import UserCard from "./components/userCard/UserCard";
import Modal from "./components/modal/Modal";
import { useFetchUsers } from "./hooks/useFetchUsers";
import { User } from "./types/UserInterface";

function App() {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { users, isLoading, error } = useFetchUsers();

  const handleUserSelect = (user: User) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <Header />
      <main>
        {isLoading ? (
          <p className="text-center">Loading...</p>
        ) : error ? (
          <p className="text-center">Error: {error}</p>
        ) : (
          <section className="userCardsContainer">
            {users.map((user) => (
              <UserCard key={user.id} user={user} onSelect={handleUserSelect} />
            ))}
          </section>
        )}
      </main>
      {selectedUser && (
        <Modal
          user={selectedUser}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
