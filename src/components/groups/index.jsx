import { useState } from "react";
import Group from "./Group";
import index from "../notes";
import "./index.css";

export default function Groups({
  groupsandNotes,
  setGroupsAndNotes,
  setSelectedGroup,
  selectedGroup,
}) {
  const [input, setInput] = useState("");

  const handleInput = () => {
    input !== "" &&
      setGroupsAndNotes(prev => {
        return [...prev, { group: input, notes: [] }];
      });
    setInput("");
  };

  return (
    <div className='group-section'>
      <h1>Pocket Notes</h1>
      <div id='create-Groups-Button'>
        <button onClick={handleInput}>+ Create Notes group</button>
      </div>
      <div className='groups'>
        {groupsandNotes.map((item, i) => (
          <Group
            group={item.group}
            key={"xyz" + i}
            selectedGroup={selectedGroup}
            setSelectedGroup={setSelectedGroup}
          />
        ))}
      </div>
      <div>
        <input
          type='text'
          id='inputText'
          onChange={e => setInput(e.target.value)}
          value={input}
        />
      </div>
    </div>
  );
}
