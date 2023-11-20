import "../css/About.css";
import img3 from "../images/img3.JPG";
function About() {
  return (
    <>
      <div id="about">
        <div className="firstsection">
        <div className="leftsection">
        <h2>About</h2>
        <p>
          My name is Divyashree.I am currently pursuing BE in Canara Engineering
          College,Benjanapadavu.I completed my PUC in shree Ramakunjeshwara pU
          College,Ramakunja.And I completed my High School in Shree
          Ramakunjeshwara English Medium School,Ramkunja.
        </p></div>
        <div className="photo">
          <img src={img3} alt="img3" />
        </div>
        </div>
      </div>
    </>
  );
}
export default About;
