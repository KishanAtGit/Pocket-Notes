import { useState } from "react";
import Groups from "./components/groups";
import Notes from "./components/notes";

import "./App.css";

export default function App() {
  const [groupsandNotes, setGroupsAndNotes] = useState({
    group: ["JavaScript", "Java"],
    notes: [
      [
        "sfhbhksdbkh JavaScript ahfjds ahkfh",
        "jcjhg jfgsdg JavaScript jgfj,sjhfjhkhs",
        "kshfkjshkh JavaScript sfhiush shfj",
      ],
      [
        "sfhbhksdbkh Java ahfjds ahkfh",
        "jcjhg jfgsdg Java jgfj,sjhfjhkhs",
        "kshfkjshkh sfhiush Java shfj",
        "sjhdfgsi fis Java fgsgfg sfgssygf sgfy,",
        "jsgf sgdfyusuyfuysgyfgy Java syfukjdhf iifg wd",
      ],
    ],
  });

  const [selectedGroup, setSelectedGroup] = useState("");

  return (
    <div className='main-page'>
      <Groups
        groupsandNotes={groupsandNotes}
        setGroupsAndNotes={setGroupsAndNotes}
        setSelectedGroup={setSelectedGroup}
      />
      <Notes groupsandNotes={groupsandNotes} selectedGroup={selectedGroup} />
    </div>
  );
}
