export default function Group({ group, setSelectedGroup }) {
  const handleSelection = () => {
    setSelectedGroup(group);
  };

  return (
    <div style={{ cursor: "pointer" }}>
      <div onClick={handleSelection}>{group}</div>
    </div>
  );
}
