import { useState, useEffect } from "react";
import Home from "./Home";
import Note from "./Note";
import "./index.css";

export default function index({
  groupsandNotes,
  setGroupsAndNotes,
  selectedGroup,
  currentSelectedGroup,
  setCurrentSelectedGroup,
}) {
  const [inputData, setInputData] = useState("");

  const handleInput = () => {
    inputData !== "" &&
      setGroupsAndNotes(prev => {
        let tempState = prev;
        let tempIndex = tempState.findIndex(
          prev => prev.groupName === selectedGroup
        );
        tempState[tempIndex].notes.push(inputData);

        let currentDateAndTime = new Date();
        tempState[tempIndex].dateAndTime.push(currentDateAndTime);

        localStorage.setItem("Data", JSON.stringify(tempState));
        return tempState;
      });
    setInputData("");
  };

  // useEffect(() => {
  //   localStorage.setItem("Data", JSON.stringify(groupsandNotes));
  // }, [groupsandNotes]);

  return (
    <div
      className='notes-section'
      style={{
        height: `${selectedGroup !== "" ? "98vh" : "100vh"}`,
        borderBottomLeftRadius: `${selectedGroup !== "" ? "1em" : "0"}`,
      }}
    >
      <div
        style={{
          visibility: `${selectedGroup !== "" ? "visible" : "hidden"}`,
        }}
        className='navbar'
      >
        <span id='navbar-groupImage'>
          <img src={currentSelectedGroup.groupProfileBackground} alt='' />
        </span>
        <span id='navbar-profile-text'>DM</span>
        <span id='navbar-label'>{currentSelectedGroup.groupName}</span>
      </div>
      {selectedGroup !== "" ? (
        <div className='note-section'>
          {groupsandNotes.map(item => {
            return (
              item.groupName === selectedGroup &&
              item.notes.map((note, i) => (
                <Note
                  item={item}
                  note={note}
                  key={"edfre" + i}
                  dateAndTime={item.dateAndTime[i]}
                />
              ))
            );
          })}
        </div>
      ) : (
        <Home />
      )}

      <div
        id='notes-text-field'
        style={{
          visibility: `${selectedGroup !== "" ? "visible" : "hidden"}`,
        }}
      >
        <textarea
          type='text'
          onChange={e => setInputData(e.target.value)}
          value={inputData}
          placeholder='Enter your text here...........'
        />
        <button id='note-add-button' onClick={handleInput}>
          Add
        </button>
      </div>
    </div>
  );
}
