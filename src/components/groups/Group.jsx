export default function Group({
  group,
  index,
  setSelectedGroup,
  selectedGroup,
  profilebackground,
}) {
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
        <span id='groupImage'>
          <img src={profilebackground[index]} alt='' />
        </span>
        <span id='group'>{group}</span>
      </div>
    </>
  );
}
