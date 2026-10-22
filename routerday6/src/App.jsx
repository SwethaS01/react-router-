// import { useNavigate } from "react-router";
// import "./styles/App.css";

// const App = () => {
//   const navigate = useNavigate();
//   return (
//     <div>
//       <nav>
//         <button onClick={() => navigate("/")}>Home</button>
//         <button onClick={() => navigate("/About")}>About</button>
//         <button onClick={() => navigate("/Project")}>Project</button>
//         <button onClick={() => navigate("/Skill")}>Skill</button>
//         <button onClick={() => navigate("/Education")}>Education</button>
//         <button onClick={() => navigate("/Achievements")}>Achievements</button>
//         <button onClick={() => navigate("/Contact")}>Contact</button>
//       </nav>
//       <section>
//         <p>WELCOME TO MY PORTFOLIO</p>

//         <h1>Hi, Welcome!</h1>

//         <h2>I'm Swetha S</h2>

//         <h3>
//           Turning Ideas Into Digital Experiences
//         </h3>
//         <img
//           src="/swetha S.jpg"
//           alt="Swetha S"
         
//           style={{
//             width: "240px",
//             height: "240px",
//             borderRadius: "50%",
//             objectFit: "cover",
//             objectPosition: "center 20%",
//             display: "block",
//             margin: "20px auto"
//           }}
//         />
//         <p>
//           Every great application starts with an idea.
//           I enjoy exploring creative solutions, experimenting
//           with technology, and transforming concepts into
//           meaningful digital experiences.
//         </p>

//         <p>
//           Explore my portfolio to discover what I create,
//           what inspires me, and how I approach technology
//           and design.
//         </p>

        
//       </section>
//     </div>
//   )
// }
// export default App


import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "./styles/App.css";
import { useTheme } from "./components/Theme.jsx";


const App = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  return (
    <div>
      <nav>
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/About")}>About</button>
        <button onClick={() => navigate("/Project")}>Project</button>
        <button onClick={() => navigate("/Skill")}>Skill</button>
        <button onClick={() => navigate("/Education")}>Education</button>
        <button onClick={() => navigate("/Achievements")}>Achievements</button>
        <button onClick={() => navigate("/Contact")}>Contact</button>

        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </nav>

      <section>
        <p>WELCOME TO MY PORTFOLIO</p>

        <h1>Hi, Welcome!</h1>

        <h2>I'm Swetha S</h2>

        <h3>Turning Ideas Into Digital Experiences</h3>

        <img
          src="/swetha S.jpg"
          alt="Swetha S"
          style={{
            width: "240px",
            height: "240px",
            borderRadius: "50%",
            objectFit: "cover",
            objectPosition: "center 20%",
            display: "block",
            margin: "20px auto"
          }}
        />

        <p>
          Every great application starts with an idea.
          I enjoy exploring creative solutions, experimenting
          with technology, and transforming concepts into
          meaningful digital experiences.
        </p>

        <p>
          Explore my portfolio to discover what I create,
          what inspires me, and how I approach technology
          and design.
        </p>
      </section>
    </div>
  );
};

export default App;
