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
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [profilebackground, setProfileBackground] = useState([]);

  const handleInput = (input, setInput, choosenColor) => {
    input !== "" &&
      setGroupsAndNotes(prev => {
        return [...prev, { group: input, notes: [] }];
      });
    setProfileBackground(prev => {
      return [...prev, choosenColor];
      // let temp = prev;
      // temp.push(choosenColor);
      // return temp;
    });
    // console.log(profilebackground);
    setInput("");
  };

  const openModal = () => setModalOpen(true);

  return (
    <div className='group-section'>
      <h1>Pocket Notes</h1>
      <div id='create-Groups-Button'>
        <button onClick={openModal}>+ Create Notes group</button>
      </div>
      <div className='groups'>
        {groupsandNotes.map((item, i) => (
          <Group
            group={item.group}
            index={i}
            key={"xyz" + i}
            selectedGroup={selectedGroup}
            setSelectedGroup={setSelectedGroup}
            profilebackground={profilebackground}
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
