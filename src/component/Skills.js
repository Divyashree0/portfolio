import "../css/Skills.css";
import c from "../icon/c.svg";
import html from "../icon/html.svg";
import css from "../icon/css.svg";
import javascript from "../icon/javascript.svg";
import java1 from "../icon/java1.svg";
function Skills() {
  return (
    <>
      <div id="skills">
        <h2>Skills</h2>
        <p>
         <img src={c} alt="c" />
         <img src={html} alt="html" />
         <img src={css} alt="css" />
         <img src={javascript} alt="javascript" />
         <img src={java1} alt="java1" />
        </p>
      </div>
    </>
  );
}
export default Skills;
