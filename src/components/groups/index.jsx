import Group from "./Group";
import index from "../notes";
import "./index.css";

export default function Groups({ groupsandNotes, setSelectedGroup }) {
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
    </div>
  );
}
