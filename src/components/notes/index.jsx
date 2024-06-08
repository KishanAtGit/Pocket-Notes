import { useState } from "react";
import Home from "./Home";
import Note from "./Note";
import "./index.css";

export default function index({
  groupsandNotes,
  setGroupsAndNotes,
  selectedGroup,
}) {
  const [inputData, setInputData] = useState("");

  const handleInput = () => {
    inputData !== "" &&
      setGroupsAndNotes(prev => {
        let tempState = prev;
        let tempIndex = tempState.findIndex(
          prev => prev.group === selectedGroup
        );
        tempState[tempIndex].notes.push(inputData);
        console.log(tempState[tempIndex].notes);
        return tempState;
      });
    setInputData("");
  };

  return (
    <div className='notes-section'>
      {selectedGroup !== "" ? (
        groupsandNotes.map(item => {
          return (
            item.group === selectedGroup &&
            item.notes.map((note, i) => <Note note={note} key={"edfre" + i} />)
          );
        })
      ) : (
        <Home />
      )}
      <div
        style={{
          visibility: `${selectedGroup !== "" ? "visible" : "hidden"}`,
        }}
      >
        <input
          type='text'
          onChange={e => setInputData(e.target.value)}
          value={inputData}
        />
        <button onClick={handleInput}>Add</button>
      </div>
    </div>
  );
}
