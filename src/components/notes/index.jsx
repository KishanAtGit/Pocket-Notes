import { useState, useEffect } from "react";
import Home from "./Home";
import Note from "./Note";
import "./index.css";
import leftArrow from "../../assets/Vector.png";
import sendButton from "../../assets/Vector2.png";

export default function index({
  groupsandNotes,
  setGroupsAndNotes,
  currentSelectedGroup,
  setCurrentSelectedGroup,
}) {
  const [inputData, setInputData] = useState("");

  const handleInputOnEnterKey = e => {
    if (e.key === "Enter") handleInput();
  };

  const handleInput = () => {
    inputData !== "" &&
      setGroupsAndNotes(prev => {
        let tempState = prev;
        let tempIndex = tempState.findIndex(
          prev => prev.group.name === currentSelectedGroup.groupName
        );
        tempState[tempIndex].notes.push(inputData);

        let currentDateAndTime = new Date();
        tempState[tempIndex].dateAndTime.push(currentDateAndTime);

        localStorage.setItem("Data", JSON.stringify(tempState));
        return tempState;
      });
    setInputData("");
  };

  return (
    <div
      className='notes-section'
      style={{
        height: `${currentSelectedGroup.groupName !== "" ? "98vh" : "100vh"}`,
        borderBottomLeftRadius: `${
          currentSelectedGroup.groupName !== "" ? "1em" : "0"
        }`,
      }}
    >
      <div
        style={{
          visibility: `${
            currentSelectedGroup.groupName !== "" ? "visible" : "hidden"
          }`,
        }}
        className='navbar'
      >
        <span
          onClick={() =>
            setCurrentSelectedGroup(prev => ({ ...prev, groupName: "" }))
          }
          style={{ cursor: "pointer" }}
        >
          <img src={leftArrow} alt='' />
        </span>
        <span id='navbar-groupImage'>
          <img src={currentSelectedGroup.groupProfileBackground} alt='' />
        </span>
        <span id='navbar-profile-text'>
          {currentSelectedGroup.groupShortForm}
        </span>
        <span id='navbar-label'>{currentSelectedGroup.groupName}</span>
      </div>
      {currentSelectedGroup.groupName !== "" ? (
        <div className='note-section'>
          {groupsandNotes.map(item => {
            return (
              item.group.name === currentSelectedGroup.groupName &&
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
          visibility: `${
            currentSelectedGroup.groupName !== "" ? "visible" : "hidden"
          }`,
        }}
      >
        <textarea
          type='text'
          onChange={e => setInputData(e.target.value)}
          onKeyUp={handleInputOnEnterKey}
          value={inputData}
          placeholder='Enter your text here...........'
        />
        <img
          id='note-add-button'
          src={sendButton}
          alt='sendButton'
          onClick={handleInput}
        />
      </div>
    </div>
  );
}
