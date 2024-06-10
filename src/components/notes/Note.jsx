import { Clock } from "./Clock";

export default function Note({ note, dateAndTime }) {
  return (
    <div className='notes'>
      <Clock currentTime={dateAndTime} />
      <div className='note'>
        <p style={{ margin: "0", overflowWrap: "anywhere", width: "56vw" }}>
          {note}
        </p>
      </div>
    </div>
  );
}
