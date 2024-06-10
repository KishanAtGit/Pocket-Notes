import { useState, useEffect } from "react";
import Groups from "./components/groups";
import Notes from "./components/notes";
import { useIsMobile } from "./hooks/useMobile";

import "./App.css";
import Group from "./components/groups/Group";

export default function App() {
  const isMobile = useIsMobile();

  const [groupsandNotesData, setGroupsAndNotesData] = useState([
    // {
    //   group: { name: "JavaScript", shortForm: "JS" },
    //   groupProfileBackground: "",
    //   dateAndTime: [],
    //   notes: [
    //     "sfhbhksdbkh JavaScript ahfjds ahkfh",
    //     "jcjhg jfgsdg JavaScript jgfj,sjhfjhkhs",
    //     "kshfkjshkh JavaScript sfhiush shfj",
    //   ],
    // },
  ]);

  const [currentSelectedGroup, setCurrentSelectedGroup] = useState({
    groupName: "",
    groupShortForm: "",
    groupProfileBackground: "",
  });

  useEffect(() => {
    const data = localStorage.getItem("Data");
    setGroupsAndNotesData(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem("Data", JSON.stringify(groupsandNotesData));
  }, [groupsandNotesData]);

  return !isMobile ? (
    <div className='main-page'>
      <Groups
        groupsandNotes={groupsandNotesData}
        setGroupsAndNotes={setGroupsAndNotesData}
        currentSelectedGroup={currentSelectedGroup}
        setCurrentSelectedGroup={setCurrentSelectedGroup}
      />
      <Notes
        groupsandNotes={groupsandNotesData}
        setGroupsAndNotes={setGroupsAndNotesData}
        currentSelectedGroup={currentSelectedGroup}
        setCurrentSelectedGroup={setCurrentSelectedGroup}
      />
    </div>
  ) : currentSelectedGroup.groupName === "" ? (
    <Groups
      groupsandNotes={groupsandNotesData}
      setGroupsAndNotes={setGroupsAndNotesData}
      currentSelectedGroup={currentSelectedGroup}
      setCurrentSelectedGroup={setCurrentSelectedGroup}
    />
  ) : (
    <Notes
      groupsandNotes={groupsandNotesData}
      setGroupsAndNotes={setGroupsAndNotesData}
      currentSelectedGroup={currentSelectedGroup}
      setCurrentSelectedGroup={setCurrentSelectedGroup}
      isMobile={isMobile}
    />
  );
}
