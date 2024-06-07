export default function Group({ group, setSelectedGroup, selectedGroup }) {
  const handleSelection = () => {
    setSelectedGroup(group);
  };

  return (
    <>
      <div
        onClick={handleSelection}
        style={{
          backgroundColor: `${selectedGroup === group ? "#F7ECDC" : "white"}`,
        }}
      >
        <span id='groupImage'>DM</span>
        <span id='group'>{group}</span>
      </div>
    </>
  );
}
