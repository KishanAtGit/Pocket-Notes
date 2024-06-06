import Group from "./Group";
import index from "../notes";
import "./index.css";
import { useState } from "react";

export default function Groups({
  groupsandNotes,
  setGroupsAndNotes,
  setSelectedGroup,
}) {
  const [input, setInput] = useState("");
  console.log(input);

  const handleInput = e => {
    setInput(e.target.value);
    setGroupsAndNotes(prev => {
      return [...prev.group, input];
    });
  };

  return (
    <div className='group-section'>
      <h1>Pocket Notes</h1>
      <div>
        <button>+ Create Notes group</button>
      </div>
      <div>
        {groupsandNotes.group.map((item, i) => (
          <Group
            group={item}
            key={"xyz" + i}
            setSelectedGroup={setSelectedGroup}
          />
        ))}
      </div>
      <div>
        <input type='text' onChange={handleInput} value={input} />
      </div>
    </div>
  );
}
