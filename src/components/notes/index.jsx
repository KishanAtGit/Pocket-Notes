import Home from "./Home";
import Note from "./Note";
import "./index.css";

export default function index({ groupsandNotes, selectedGroup }) {
  return (
    <div className='notes-section'>
      {/* {groupsandNotes.map(item =>
        item.notes.map((note, i) => <Note note={note} key={"shjf" + i} />)
      )} */}
      {selectedGroup !== "" ? (
        groupsandNotes.group.map((item, i) => {
          return item === selectedGroup
            ? groupsandNotes.notes.map((notes, j) =>
                j === i
                  ? notes.map(note => <Note note={note} key={"edfre" + i++} />)
                  : null
              )
            : null;
        })
      ) : (
        <Home />
      )}
    </div>
  );
}
