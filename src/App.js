import {
  RiWhatsappLine,
  RiGithubLine,
  RiLinkedinLine,
  RiInstagramLine,
  RiFileTextLine,
} from "react-icons/ri";

function App() {
  return (
    <>
      <div class="background-container">
        <circle className="shape"></circle>
        <circle className="shape1"></circle>
      </div>
      

      <div className="social-media-container">
      <h1 class="in">Hi, i'm <strong className="tomas-style">Tomas</strong></h1>
      <p>At this moment I am updating my portfolio with new projects.</p>
        <h4>
          You can reach me at
        </h4>
        <a href="https://linkedin.com/in/tomas-demo">
          <RiLinkedinLine className="icons"/>
        </a>
        <a href="https://github.com/Tomas13d" >
          <RiGithubLine className="icons"/>
        </a>
        <a href="https://ultramsg.com/m/3va2ZdI">
          <RiWhatsappLine className="icons"/>
        </a>
        <a href="https://www.instagram.com/tomasjdemo/">
          <RiInstagramLine className="icons"/>
        </a>
        <br />
        <a href="mailto:tomas.demobio@gmail.com">tomas.demobio@gmail.com</a>
      </div>
    </>
  );
}

export default App;
