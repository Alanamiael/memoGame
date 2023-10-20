import { useState } from "react";
import Modal from "./components/UI/Modal/Modal";
import "./App.css";

function App() {
  const [modal, setModal] = useState(true);
  return (
    <div>
      <Modal visible={modal} setVisible={setModal}></Modal>
    </div>
  );
}

export default App;
