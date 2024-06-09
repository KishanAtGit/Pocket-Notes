export default function Group({
  group,
  setSelectedGroup,
  selectedGroup,
  groupProfileBackground,
  setCurrentSelectedGroup,
}) {
  const handleSelection = () => {
    setSelectedGroup(group);
    setCurrentSelectedGroup(prev => ({
      ...prev,
      groupName: group,
      groupProfileBackground: groupProfileBackground,
      // const tempPrev = prev;
      // tempPrev.groupName = group;
      // tempPrev.groupProfileBackground = groupProfileBackground;
      // return tempPrev;
    }));
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
          <img src={groupProfileBackground} alt='' />
        </span>
        <span id='profile-label'>DM</span>
        <span id='group'>{group}</span>
      </div>
    </>
  );
}
