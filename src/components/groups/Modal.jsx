import Modal from "react-modal";
import { useState } from "react";
import color1 from "../../assets/Ellipse1.png";
import color2 from "../../assets/Ellipse2.png";
import color3 from "../../assets/Ellipse3.png";
import color4 from "../../assets/Ellipse4.png";
import color5 from "../../assets/Ellipse5.png";
import color6 from "../../assets/Ellipse6.png";

export default function ModalComponent({
  modalOpen,
  setModalOpen,
  handleInput,
}) {
  const [input, setInput] = useState("");
  const [choosenColor, setChoosenColor] = useState(null);
  //   const profile_background = {
  //     color1: "#B38BFA",
  //     color2: "#FF79F2",
  //     color3: "#43E6FC",
  //     color4: "#F19576",
  //     color5: "#0047FF",
  //     color6: "#6691FF",
  //   };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={closeModal}
      ariaHideApp={false}
      className='modal'
    >
      <div>Create New Notes group</div>
      <div>
        <span>Group Name</span>
        <span>
          <input
            id='modal-input'
            type='text'
            placeholder='Enter your group name...'
            onChange={e => setInput(e.target.value)}
            value={input}
          />
        </span>
      </div>
      <div>
        <div>Choose Color</div>
        <div id='color-group' style={{ display: "flex", gap: "1ch" }}>
          <span onClick={() => setChoosenColor(color1)}>
            <img src={color1} alt='color1' />
          </span>
          <span onClick={() => setChoosenColor(color2)}>
            <img src={color2} alt='color1' />
          </span>
          <span onClick={() => setChoosenColor(color3)}>
            <img src={color3} alt='color1' />
          </span>
          <span onClick={() => setChoosenColor(color4)}>
            <img src={color4} alt='color1' />
          </span>
          <span onClick={() => setChoosenColor(color5)}>
            <img src={color5} alt='color1' />
          </span>
          <span onClick={() => setChoosenColor(color6)}>
            <img src={color6} alt='color1' />
          </span>
        </div>
      </div>
      <button
        onClick={() => {
          handleInput(input, setInput, choosenColor);
          input !== "" && closeModal();
        }}
        id='create-button'
      >
        Create
      </button>
    </Modal>
  );
}
