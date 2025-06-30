import {useSelector } from "react-redux";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import "./index.css";
import Header from "./components/header";

function App() {
  const isToggled = useSelector((state) => state.toggle.isToggled);

  return (
    <div
      className="min-h-screen bg-neutral-50 text-gray-900"
      style={
        isToggled
          ? { backgroundColor: "#171717", color: "white" }
          : { backgroundColor: "white", color: "black" }
      }
    >
      <Navigation />

      {/* Hero Section */}
      <Header />

      {/* About Section */}
      < About />
      

      {/* Skills Section */}
      <Skills />

      {/* <Profile /> */}

      {/* Work Experience Section */}
      <WorkExperience />

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
