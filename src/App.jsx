import { useState, useEffect } from "react";
import Groups from "./components/groups";
import Notes from "./components/notes";

import "./App.css";

export default function App() {
  const [groupsandNotesData, setGroupsAndNotesData] = useState([
    // { ///name is item
    //   groupName: "JavaScript",  // item.group
    //   groupProfileBackground: ""
    //   dateAndTime:[]
    //   notes: [
    //     "sfhbhksdbkh JavaScript ahfjds ahkfh",
    //     "jcjhg jfgsdg JavaScript jgfj,sjhfjhkhs",
    //     "kshfkjshkh JavaScript sfhiush shfj",
    //   ],
    // },
  ]);

  const [selectedGroup, setSelectedGroup] = useState("");

  const [currentSelectedGroup, setCurrentSelectedGroup] = useState({
    groupName: "",
    groupProfileBackground: "",
  });
  // console.log(currentSelectedGroup);

  // useEffect(() => {
  //   const data = localStorage.getItem("Data");
  //   if (data != []) setGroupsAndNotesData(prev => [...prev, JSON.parse(data)]);
  //   console.log(JSON.parse(data));
  //   console.log(groupsandNotesData);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("Data", JSON.stringify(groupsandNotesData));
  // }, [groupsandNotesData]);

  return (
    <div className='main-page'>
      <Groups
        groupsandNotes={groupsandNotesData}
        setGroupsAndNotes={setGroupsAndNotesData}
        selectedGroup={selectedGroup}
        setSelectedGroup={setSelectedGroup}
        setCurrentSelectedGroup={setCurrentSelectedGroup}
      />
      <Notes
        groupsandNotes={groupsandNotesData}
        setGroupsAndNotes={setGroupsAndNotesData}
        selectedGroup={selectedGroup}
        currentSelectedGroup={currentSelectedGroup}
        setCurrentSelectedGroup={setCurrentSelectedGroup}
      />
    </div>
  );
}
