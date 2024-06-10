export default function Group({
  group,
  groupProfileBackground,
  currentSelectedGroup,
  setCurrentSelectedGroup,
}) {
  const handleSelection = () => {
    setCurrentSelectedGroup(prev => ({
      ...prev,
      groupName: group.name,
      groupShortForm: group.shortForm,
      groupProfileBackground: groupProfileBackground,
    }));
  };

  return (
    <>
      <div
        onClick={handleSelection}
        style={{
          backgroundColor: `${
            currentSelectedGroup.groupName === group.name ? "#F7ECDC" : "white"
          }`,
        }}
      >
        <span className='groupImage'>
          <img src={groupProfileBackground} alt='' />
        </span>
        <span className='profile-label'>{group.shortForm}</span>
        <span className='group'>{group.name}</span>
      </div>
    </>
  );
}
