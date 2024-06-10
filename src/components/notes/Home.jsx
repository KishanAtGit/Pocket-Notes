import homeImage from "../../assets/homePageImage.png";
import encriptionText from "../../assets/encriptionText.png";

export default function Home() {
  return (
    <div className='notes-home'>
      <div id='home-image'>
        <img src={homeImage} alt='' />
      </div>
      <div style={{ textAlign: "center", fontSize: "2.5em" }}>Pocket Notes</div>
      <p style={{ textAlign: "center", color: "#292929" }}>
        Send and receive messages without keeping your phone online.
        <br /> Use Pocket Notes on up to 4 linked devices and 1 mobile phone
      </p>
      <div style={{ position: "absolute", bottom: "1vh", left: "42%" }}>
        <img style={{ width: "11vw" }} src={encriptionText} alt='' />
      </div>
    </div>
  );
}
