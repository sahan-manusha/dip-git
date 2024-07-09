// import { FaLinkedin } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";

// const Navbar = () => {
//   return <nav className=" mb-20 flex items-center justify-between py-6">
//     <div className="flex flex-shrink-0 items-center">
//     </div>
//     <div className="m-8 flex items-center justify-center gap-4 text-2xl">
//         <FaLinkedin/>
//         <FaGithub/>
//         <FaInstagram/>
//     </div>
//   </nav>
// }

// export default Navbar







import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        {/* You can add your logo or site name here if needed */}
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/sahan-manusha-616661277/" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-blue-500">
          <FaLinkedin />
        </a>
        <a href="https://github.com/sahan-manusha" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-black">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/your-instagram-profile" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-pink-500">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
