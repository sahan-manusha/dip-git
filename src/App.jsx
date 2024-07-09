// import Hero from "./components/Hero";
// import Navbar from "./components/Navbar";

// const App = () => {
//   return (
//     <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
//       <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
//       <div className="flixed top-0 -z-10 h-full w-full"></div>
//       <div className="container mx-auto px-8">
//       <Navbar />
//       <Hero/>
//       </div>
    
//     </div>
//   );
// };

// export default App;


// import Hero from "./components/Hero";
// import Navbar from "./components/Navbar";

// const App = () => {
//   return (
//     <div
//       style={{
//         overflowX: "hidden",
//         color: "#d1d5db", // text-neutral-300
//         WebkitFontSmoothing: "antialiased",
//         MozOsxFontSmoothing: "grayscale",
//         minHeight: "100vh",
//       }}
//     >
//       <div
//         style={{
//           position: "absolute",
//           top: 0,
//           zIndex: -2,
//           height: "100vh",
//           width: "100vw",
//           background: "linear-gradient(135deg, #1f2937 0%, #3b4252 100%)", // Dark gradient
//         }}
//       ></div>
//       <div
//         style={{
//           position: "fixed",
//           top: 0,
//           zIndex: -10,
//           height: "100%",
//           width: "100%",
//           background: "rgba(0, 0, 0, 0.6)", // Subtle dark overlay
//         }}
//       ></div>
//       <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
//         <Navbar />
//         <Hero />
//       </div>
//     </div>
//   );
// };

// export default App;
















// import About from "./components/About";
// import Hero from "./components/Hero";
// import Navbar from "./components/Navbar";

// const App = () => {
//   return (
//     <div
//       style={{
//         overflowX: "hidden",
//         color: "#d1d5db", // text-neutral-300
//         WebkitFontSmoothing: "antialiased",
//         MozOsxFontSmoothing: "grayscale",
//         minHeight: "100vh",
//         display: "flex",
//         flexDirection: "column",
//       }}
//     >
//       <div
//         style={{
//           position: "absolute",
//           top: 0,
//           zIndex: -2,
//           height: "100vh",
//           width: "100vw",
//           background: "linear-gradient(135deg, #1f2937 0%, #3b4252 100%)", // Dark gradient
//         }}
//       ></div>
//       <div
//         style={{
//           position: "fixed",
//           top: 0,
//           zIndex: -10,
//           height: "100%",
//           width: "100%",
//           background: "rgba(0, 0, 0, 0.6)", // Subtle dark overlay
//         }}
//       ></div>
//       <div
//         style={{
//           maxWidth: "1200px",
//           margin: "0 auto",
//           padding: "0 2rem",
//           flex: 1,
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//         }}
//       >
//         <Navbar />
//         <Hero />
//         <About/>
//       </div>
//     </div>
//   );
// };

// export default App;



import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div
      style={{
        overflowX: "hidden",
        color: "#d1d5db", // text-neutral-300
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          zIndex: -2,
          height: "100vh",
          width: "100vw",
          background: "linear-gradient(135deg, #1f2937 0%, #3b4252 100%)", // Dark gradient
        }}
      ></div>
      <div
        style={{
          position: "fixed",
          top: 0,
          zIndex: -10,
          height: "100%",
          width: "100%",
          background: "rgba(0, 0, 0, 0.6)", // Subtle dark overlay
        }}
      ></div>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 2rem",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Navbar />
        <Hero />
        <About />
      </div>
    </div>
  );
};

export default App;
