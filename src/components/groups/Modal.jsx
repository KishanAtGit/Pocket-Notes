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
  const [choosenColor, setChoosenColor] = useState("");

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={closeModal}
      className='modal'
      ariaHideApp={false}
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
            <img
              style={{
                border: `${
                  choosenColor === color1 ? "2px solid grey" : "none"
                }`,
              }}
              src={color1}
              alt='color1'
            />
          </span>
          <span onClick={() => setChoosenColor(color2)}>
            <img
              style={{
                border: `${
                  choosenColor === color2 ? "2px solid grey" : "none"
                }`,
              }}
              src={color2}
              alt='color2'
            />
          </span>
          <span onClick={() => setChoosenColor(color3)}>
            <img
              style={{
                border: `${
                  choosenColor === color3 ? "2px solid grey" : "none"
                }`,
              }}
              src={color3}
              alt='color3'
            />
          </span>
          <span onClick={() => setChoosenColor(color4)}>
            <img
              style={{
                border: `${
                  choosenColor === color4 ? "2px solid grey" : "none"
                }`,
              }}
              src={color4}
              alt='color4'
            />
          </span>
          <span onClick={() => setChoosenColor(color5)}>
            <img
              style={{
                border: `${
                  choosenColor === color5 ? "2px solid grey" : "none"
                }`,
              }}
              src={color5}
              alt='color5'
            />
          </span>
          <span onClick={() => setChoosenColor(color6)}>
            <img
              style={{
                border: `${
                  choosenColor === color6 ? "2px solid grey" : "none"
                }`,
              }}
              src={color6}
              alt='color6'
            />
          </span>
        </div>
      </div>
      <button
        onClick={() => {
          handleInput(input, setInput, choosenColor, setChoosenColor);
        }}
        id='create-button'
      >
        Create
      </button>
    </Modal>
  );
}
