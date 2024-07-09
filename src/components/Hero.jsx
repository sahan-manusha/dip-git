// import { HERO_CONTENT } from "../constants"

// const Hero = () => {
//   return (
//     <div className="border-b border-neutral-900 pb-4 lg:mb-35">
//         <div className="flex flex-wrap">
//             <div className="w-full lg:w-1/2">

//             <div className="flex flex-col items-center lg:items-start">
//                 <h1 className="pb-16  text-6xl font-thin tracking-tight lg:mt-16
//                 lg:text-8xl">Sahan Manusha</h1>

//                 <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Full Stack Developer

//                 </span>
//                 <p>{HERO_CONTENT}</p>

//             </div>

//             </div>
//         </div>
//     </div>
//   )
// }

// export default Hero

// import { HERO_CONTENT } from "../constants"
// import profilePic from "../assets/kevinRushProfile.png";

// const Hero = () => {
//   return (
//     <div className="border-b border-neutral-900 pb-4 lg:mb-35">
//         <div className="flex flex-wrap">
//             <div className="w-full lg:w-1/2">

//             <div className="flex flex-col items-center lg:items-start">
//                 <h1 className="pb-16 text-4xl font-thin tracking-tight lg:mt-16 lg:text-6xl">Sahan Manusha</h1>

//                 <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent lg:text-3xl">
//                     Full Stack Developer
//                 </span>
//                 <p>{HERO_CONTENT}</p>
//             </div>

//             </div>
//             <div className="w-full lg:w-1/2 lg:p-8">
//             <div className="flex justify-center">
//                 <img src="{profilePic}"/>
//             </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Hero

// import { HERO_CONTENT } from "../constants";
// import profilePic from "../assets/kevinRushProfile.png";
// import { motion } from "framer-motion";

// const Hero = () => {
//   return (
//     <div className="flex flex-wrap items-center h-full">
//       <div className="w-full lg:w-1/2">
//         <div className="flex flex-col items-center lg:items-start">
//           <motion.h1
//             className="pb-4 text-4xl font-thin tracking-tight lg:mt-16 lg:text-6xl"
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//           >
//             Sahan Manusha
//           </motion.h1>

//           <motion.span
//             className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent lg:text-3xl"
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.5 }}
//           >
//             Full Stack Developer
//           </motion.span>
//           <motion.p
//             className="text-center lg:text-left mt-4 lg:mt-8"
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 1 }}
//           >
//             {HERO_CONTENT}
//           </motion.p>
//         </div>
//       </div>
//       <div className="w-full lg:w-1/2 lg:p-8 flex justify-center">
//         <motion.img
//           src={profilePic}
//           alt="Profile Picture"
//           className="w-1/3 lg:w-1/2 max-w-xs lg:max-w-sm"
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1, delay: 1.5 }}
//         />
//       </div>
//     </div>
//   );
// };

// export default Hero;

import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/My.jpg.jpeg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="flex flex-wrap items-center h-full">
      <div className="w-full lg:w-1/2">
        <div className="flex flex-col items-center lg:items-start">
          <motion.h1
            className="pb-4 text-4xl font-thin tracking-tight lg:mt-16 lg:text-6xl"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Sahan Manusha
          </motion.h1>

          <motion.span
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent lg:text-3xl"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Full Stack Developer
          </motion.span>
          <motion.p
            className="text-center lg:text-left mt-4 lg:mt-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            {HERO_CONTENT}
          </motion.p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 lg:p-8 flex justify-center">
        <motion.img
          src={profilePic}
          alt="Profile Picture"
          className="w-1/2 lg:w-full max-w-xs lg:max-w-md rounded-full" // Adjusted width, max-width, and added rounded shape
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        />
      </div> 
    </div>
  );
};

export default Hero;
