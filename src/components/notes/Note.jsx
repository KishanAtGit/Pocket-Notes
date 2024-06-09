import { Clock } from "./Clock";

export default function Note({ note, dateAndTime }) {
  return (
    <div className='notes'>
      <Clock currentTime={dateAndTime} />
      <div className='note'>{note}</div>
    </div>
  );
}
