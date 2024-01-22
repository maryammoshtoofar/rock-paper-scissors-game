import { useState } from "react";
import { createPortal } from "react-dom";
import Buttons from "./components/buttons/Buttons";
import Header from "./components/header/Header";
import RulesBtn from "./components/rules-btn/Rules-btn";
import Modal from "./components/modal/Modal";
import Container from "./components/container/Container";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Container>
      <Header />
      <Buttons />
      <RulesBtn openModal={() => setShowModal(true)} />
      {showModal &&
        createPortal(
          <Modal CloseModal={() => setShowModal(false)} />,
          document.body
        )}
    </Container>
  );
};

export default App;
