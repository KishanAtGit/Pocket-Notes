import { useState } from "react";
import index from "../notes";
import Group from "./Group";
import ModalComponent from "./Modal";
import "./index.css";

export default function Groups({
  groupsandNotes,
  setGroupsAndNotes,
  setSelectedGroup,
  selectedGroup,
  setCurrentSelectedGroup,
}) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleInput = (input, setInput, choosenColor) => {
    input !== "" &&
      setGroupsAndNotes(prev => {
        return [
          ...prev,
          {
            groupName: input,
            groupProfileBackground: choosenColor,
            dateAndTime: [],
            notes: [],
          },
        ];
      });
    setInput("");
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
            group={item.groupName}
            index={i}
            key={"xyz" + i}
            selectedGroup={selectedGroup}
            setSelectedGroup={setSelectedGroup}
            groupProfileBackground={item.groupProfileBackground}
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
