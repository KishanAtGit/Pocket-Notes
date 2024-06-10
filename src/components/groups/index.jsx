import { useState } from "react";
import Group from "./Group";
import ModalComponent from "./Modal";
import "./index.css";

export default function Groups({
  groupsandNotes,
  setGroupsAndNotes,
  currentSelectedGroup,
  setCurrentSelectedGroup,
}) {
  const [modalOpen, setModalOpen] = useState(false);

  // {
  //   group: { name: "JavaScript", shortForm: "JS" },
  //   groupProfileBackground: "",
  //   dateAndTime: [],
  //   notes: [
  //     "sfhbhksdbkh JavaScript ahfjds ahkfh",
  //     "jcjhg jfgsdg JavaScript jgfj,sjhfjhkhs",
  //     "kshfkjshkh JavaScript sfhiush shfj",
  //   ],
  // },

  const handleInput = (input, setInput, choosenColor, setChoosenColor) => {
    if (input !== "" && choosenColor !== "") {
      setGroupsAndNotes(prev => {
        return [
          ...prev,
          {
            group: {
              ...prev.group,
              name: input,
              shortForm: input.substring(0, 2).toUpperCase(),
            },
            groupProfileBackground: choosenColor,
            dateAndTime: [],
            notes: [],
          },
        ];
      });
      setInput("");
      setChoosenColor("");
      setModalOpen(false);
    }
  };

  const openModal = () => setModalOpen(true);

  return (
    <div className='group-section'>
      <div id='group-heading'>Pocket Notes</div>
      <div id='create-Groups-Button'>
        <button onClick={openModal}>
          <span>+</span> <span>Create Notes group</span>
        </button>
      </div>
      <div className='groups'>
        {groupsandNotes.map((item, i) => (
          <Group
            group={item.group}
            index={i}
            key={"xyz" + i}
            groupProfileBackground={item.groupProfileBackground}
            currentSelectedGroup={currentSelectedGroup}
            setCurrentSelectedGroup={setCurrentSelectedGroup}
          />
        ))}
      </div>
      {modalOpen && (
        <ModalComponent
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          handleInput={handleInput}
        />
      )}
    </div>
  );
}
