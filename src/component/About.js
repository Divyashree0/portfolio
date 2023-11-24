import "../css/About.css";
import img3 from "../images/img3.JPG";
function About() {
  return (
    <>
    <div className="home-content">
      <h1>Hi! I'm Divyashree</h1>
      <div className="change-text">
        <h3>And I'm</h3>
        <h3><span className="word">UX/UI Developer</span></h3>
      </div>
    </div>
      <div id="about">
        <div className="firstsection">
        <div className="leftsection">
        <h2>About</h2>
        <p>
          My name is Divyashree.I am currently pursuing BE in Canara Engineering
          College,Benjanapadavu.I completed my PUC in shree Ramakunjeshwara PU
          College,Ramakunja.And I completed my High School in Shree
          Ramakunjeshwara English Medium School,Ramkunja.
        </p></div>
        <div className="photo">
          <img src={img3} alt="img3" />
        </div>
        </div>
      </div><br/><br/><br/>
    </>
  );
}
export default About;
