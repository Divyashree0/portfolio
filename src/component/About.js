import "../css/About.css";
import img3 from "../images/img3.JPG";
function About() {
  return (
    <>
    <div className="home-content">
      <h1>Hi! I'm Divyashree</h1>
      <div className="change-text">
        <h3>And I'm</h3>
        <h3><span className="word">Student</span></h3>
      </div>
    </div>
      <div id="about">
        <div className="firstsection">
        <div className="leftsection">
        <h2>About</h2>
        <p>
          My name is Divyashree.Iam currently pursuing my BE in Canara Engineering
          College,Benjanapadavu.Iam a hard-working engineering student specialised in Computer Science Engineering 
          with an overall CGPA of 8.21. Along with my degree,I have completed Introduction to C Programming and HTML,CSS,JS courses on coursera.
          The various technologies that I've learnt helped me to do various projects. And my strength is Iam hardworking and self motivating person.
          Sometimes,I find it hard to manage my time and cut too close to the deadlines. To overcome this, I have organise my calender to include
          my daily,weekly and long term tasks so that I prioritise my work better.My hobbies are drawing,cooking,gardning. 
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
