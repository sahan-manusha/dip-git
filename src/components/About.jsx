// const About = () => {
//   return (
//     <div className="border-b border-neutral-900 pb-4">
//         <h1 className="my-20 text-center text-4xl">About <span className="text-neutral-500">Me</span></h1>
//     </div>
//   )
// }

// export default About



// import aboutImg from '..assets/about.jpg
// const About = () => {
//     return (
//       <div className="text-center mt-8 lg:mt-16">
//         <h2 className="text-3xl lg:text-4xl font-semibold mb-4">
//           About Me
//         </h2>
//         <p className="text-lg lg:text-xl">
          
//         </p>
//         <img src="{aboutImg}" alt="" />

//       </div>
//     );
//   };
  
//   export default About;
  









// import aboutImg from '../assets/about.jpg'; // Corrected import path
// import {ABOUT_TEXT} from '../constants'

// const About = () => {
//   return (
//     <div className="text-center mt-8 lg:mt-16">
//       <h2 className="text-3xl lg:text-4xl font-semibold mb-4">
//         About Me
//       </h2>
//       <p className="text-lg lg:text-xl">
//         {/* Add your description here */}
//       </p>
//       <img src={aboutImg} alt="About Me" /> {/* Correct usage of image source */}
//       <p>{ABOUT_TEXT}</p>
//     </div>
//   );
// };

// export default About;





import aboutImg from '../assets/about.jpg';
import { ABOUT_TEXT } from '../constants';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="text-center mt-8 lg:mt-16 flex flex-col lg:flex-row items-center justify-center">
      <div className="lg:w-1/2 lg:mr-8">
        <motion.img
          src={aboutImg}
          alt="About Me"
          className="max-w-full lg:max-w-xs rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
        />
      </div>
      <motion.div
        className="lg:w-1/2 text-left lg:text-right mt-4 lg:mt-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 2}}
      >
        <h2 className="text-3xl lg:text-4xl font-semibold mb-4">About Me</h2>
        <p className="text-lg lg:text-xl">{ABOUT_TEXT}</p>
      </motion.div>
    </div>
  );
};

export default About;
