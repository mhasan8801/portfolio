import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";

// export default function Home() {
//   return (
//     <main>
//       <Hero />
//       <Experience />
//       <Skills />
//       <Projects />
//       <Certifications />
//       <Blog />
//       <Contact />
//     </main>
//   );
// }


export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#0f172a",
        color: "white",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <div>
        <h1
          style={{
            fontSize: "3rem",
            marginBottom: "1rem",
          }}
        >
          🚀 Coming Soon
        </h1>

        <p
          style={{
            fontSize: "1.2rem",
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: "1.8",
          }}
        >
          I'm currently building my portfolio website focused on
          QA Automation, AI-Augmented Testing, and Software Quality
          Engineering.
        </p>

        <p
          style={{
            marginTop: "2rem",
            opacity: 0.7,
          }}
        >
          Stay tuned.
        </p>
      </div>
    </main>
  );
}