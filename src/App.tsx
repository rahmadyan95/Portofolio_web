import './App.css';
import { useState, useEffect } from 'react';
import {Link} from 'react-scroll';

function Menu(e: React.MouseEvent<HTMLImageElement>) {
  const list = document.querySelector('ul');
  const target = e.target as HTMLImageElement; // Cast to HTMLImageElement
  const menuStatus = target.getAttribute('data-status');

  if (menuStatus === 'menu') {
    target.setAttribute('data-status', 'close');
    list?.classList.add('top-[80px]', 'opacity-100', 'z-[10]');
  } else {
    target.setAttribute('data-status', 'menu');
    list?.classList.remove('top-[80px]', 'opacity-100', 'z-[10]');
  }
}

let projectName = "Portfolio";

function App() {


  
  const [imageSrc, setImageSrc] = useState("https://readme-typing-svg.demolab.com?font=Fira+Code&size=60&pause=1000&color=A78BFA&random=true&width=700&height=92&lines=Software+Engineer+;Data+Science");

  useEffect(() => {
    // Function to check window width and update the src accordingly
    const updateImageSrc = () => {
      if (window.innerWidth < 768) { // 768px is the default breakpoint for mobile (md)
        setImageSrc("https://readme-typing-svg.demolab.com?font=Fira+Code&size=40&pause=1000&color=A78BFA&center=true&random=true&width=400&height=92&lines=Software+Engineer+;Data+Science");
      } else {
        setImageSrc("https://readme-typing-svg.demolab.com?font=Fira+Code&size=60&pause=1000&color=A78BFA&random=true&width=700&height=92&lines=Software+Engineer+;Data+Science");
      }
    };

    // Call function on component mount
    updateImageSrc();

    // Add event listener to handle window resizing
    window.addEventListener('resize', updateImageSrc);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', updateImageSrc);
  }, []);
  
  return (
    <div id='main' className=' bg-greybackground shadow'>
      {/* Sticky Header */}
      <nav className='p-5 bg-greybackground shadow md:flex md:items-center md:justify-between sticky top-0 z-20'>
        <div className='flex justify-between items-center md:ml-4'>
          <span className='text-2xl font-fira cursor-pointer text-white'>
            <Link to="main" spy={true} smooth={true} offset={0} duration={400}>
            <img src={require('./assets/logo.png')} alt="logo" className="inline h-11 mr-2" />
            Rahmadyan
            </Link>
          </span>

          <span className='text-3xl cursor-pointer md:hidden block'>
            
            <img
              src={require('./assets/menu.png')}
              alt="menulogo"
              className="inline h-7"
              data-status="menu" // Using a data attribute
              onClick={(e) => Menu(e)}
            />
          </span>
        </div>

        <ul className='font-fira md:flex md:items-center text-[20px] z-[-1] md:z-auto
          md:static absolute bg-greybackground w-full left-0 md:w-auto md:py-0 py-4 md:pl-0
          pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500'>
          <li className='mx-4 my-5 md:my-0 '>
            <Link to="main" spy={true} smooth={true} offset={0} duration={400}>
              <span className="text-purple-600">#</span>
              <span className="text-white hover:text-purple-600">home</span>
            </Link>
          </li>

          <li className='mx-4 my-5 md:my-0'>
            <Link to="experience" spy={true} smooth={true} offset={-80} duration={400} className="flex items-center" >
              <span className="text-purple-600">#</span>
              <span className="text-white hover:text-purple-600">experience</span>
            </Link>
          </li>

          <li className='mx-4 my-5 md:my-0'>
            <Link to="works" spy={true} smooth={true} offset={-80} duration={400} className="flex items-center" >
              <span className="text-purple-600">#</span>
              <span className="text-white hover:text-purple-600">works</span>
            </Link>
          </li>

          <li className='mx-4 my-5 md:my-0'>
            <Link spy={true} smooth={true} offset={-80} duration={400} to="about-me" className="flex items-center">
              <span className="text-purple-600">#</span>
              <span className="text-white hover:text-purple-600">about-me</span>
            </Link>
          </li>

          <li className='mx-4 my-5 md:my-0'>
            <Link to="footer" spy={true} smooth={true} offset={-20} duration={400} className="flex items-center">
              <span className="text-purple-600">#</span>
              <span className="text-white hover:text-purple-600">contacts</span>
            </Link>
          </li>
        </ul>
      </nav>

      <div id="home" className="bg-greybackground min-h-screen p-5 flex flex-col lg:flex-row justify-start lg:justify-between items-center lg:items-start mb-[3vw]">
      {/* Kontainer untuk Garis Vertikal dan Ikon Media Sosial */}
        <div className="hidden lg:flex flex-col items-center mt-[-2vh] ml-[1.5vh]">
          {/* Garis Vertikal */}
          <div className="w-[2px] bg-[#ABB2BF] h-[10vh] mb-2"></div>
          
          {/* Kontainer untuk Ikon Media Sosial */}
          <div className="flex flex-col items-center space-y-0">
            <a href="https://github.com/rahmadyan95" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-2 transition-transform transform hover:scale-110">
              <img src={require('./assets/logo_github.png')} alt="GitHub Logo" className="h-[4vh] w-[4vh] rounded-full" /> {/* Ukuran diperkecil */}
            </a>
            <a href="https://www.instagram.com/haekal_rahmadyan/profilecard/?igsh=MWxscWVmYjg3enNwYw%3D%3D" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-2 transition-transform transform hover:scale-110">
              <img src={require('./assets/instagram_logo.png')} alt="Instagram Logo" className="h-[4vh] w-[4vh]" /> {/* Ukuran diperkecil */}
            </a>
            <a href="https://www.linkedin.com/in/muhammad-haekal-aditya-rahmadyan-174506271/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-2 transition-transform transform hover:scale-110">
              <img src={require('./assets/linkedin_logo.png')} alt="LinkedIn Logo" className="h-[4vh] w-[4vh]" /> {/* Ukuran diperkecil */}
            </a>
          </div>
        </div>

    {/* Social Media Icons for Mobile */}

      {/* Main Content: Image and Text */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:ml-[4vw] w-full">
        {/* Left Side: Image for larger screens */}
        <img 
          src={require('./assets/myphoto.png')} 
          alt="profile" 
          className="hidden lg:block lg:mr-5 w-full max-w-[40vw] h-auto object-contain" 
          style={{ aspectRatio: '1 / 1' }} // Optional: use aspect ratio if needed
        />

        {/* Right Side: Text Content and 'Currently Working On' */}


        <div className="flex flex-col items-center lg:items-start lg:ml-[1vw] lg:w-[50vw] w-full lg:mt-[3vw]">
          <h1 className="text-[6vw] lg:text-[3vw] text-white font-bold font-fira lg:mb-[2.2vw] ">Rahmadyan is a</h1>
          
          {/* Kontainer untuk Typing SVG */}
          <div className="flex justify-center lg:justify-start w-full lg:mb-[-2.5vw]">
              <a className='flex-auto lg:items-center' href="https://git.io/typing-svg">
                <img 
                  className="mx-auto lg:mx-0 mt-[-2.5vw]"
                  src={imageSrc} 
                  alt="Typing SVG" 
                />
              </a>
            </div>

    <h1 className="text-[6vw] lg:text-[2.5vw] text-white font-fira lg:mb-[2.5vw] lg:mt-1.5 mt-[-5.5vw]">Student</h1>

    

  
  <h1 className="text-[3vw] lg:text-[1.8vw] text-gray-300 font-fira text-center lg:text-left mb-5 mt-[-1vw]">
    Crafting innovative solutions where data science meets software engineering
  </h1>

  {/* Box for 'Currently Working On' */}
  <div className="p-3 border-2 border-white text-center relative flex justify-center items-center w-[80vw] lg:w-[30vw] h-auto lg:mt-1">
    <h2 className="text-[5vw] lg:text-[1.5vw] text-white font-fira">
      Currently working on <span className="text-purple-400 font-bold">{projectName}</span>
    </h2>
    <div className="absolute inset-0 bg-greybackground opacity-0 z-0"></div>
  </div>

  {/* Download CV Button */}
  <a 
    href="https://drive.google.com/file/d/1VHGt3z-VfRIMG_g_QwW5AY_f_jjnL-Bp/view?usp=sharing" 
    target="_blank"
    rel="noopener noreferrer"
    className="mt-[2vh] bg-transparent border-2 border-violet-400 text-white font-bold font-fira text-center py-[2vh] px-[4vw] rounded hover:bg-violet-400 hover:text-gray-900 transition duration-500"
  >
    Download CV
  </a>

  {/* Social Media Icons for Mobile */}
    <div className="flex justify-center mt-[6vh] md:hidden">
      <a href="https://github.com/rahmadyan95" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-[2vw] transition-transform transform hover:scale-110 mx-2">
        <img src={require('./assets/logo_github.png')} alt="GitHub Logo" className="h-[7vh] w-[7vh] rounded-full" />
      </a>
      <a href="https://www.instagram.com/haekal_rahmadyan/profilecard/?igsh=MWxscWVmYjg3enNwYw%3D%3D" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-[2vw] transition-transform transform hover:scale-110 mx-2">
        <img src={require('./assets/instagram_logo.png')} alt="Instagram Logo" className="h-[6vh] w-[6vh]" />
      </a>
      <a href="https://www.linkedin.com/in/muhammad-haekal-aditya-rahmadyan-174506271/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-[2vw] transition-transform transform hover:scale-110 mx-2">
        <img src={require('./assets/linkedin_logo.png')} alt="LinkedIn Logo" className="h-[6vh] w-[6vh]" />
      </a>
    </div>
  </div>

      </div>

      {/* Image for mobile only */}
      <img 
        src={require('./assets/myphoto.png')} 
        alt="profile" 
        className="mt-[5vh] w-[83vw] h-auto lg:hidden object-contain" 
        style={{ aspectRatio: '1 / 1' }} // Optional: use aspect ratio if needed
      />
    </div>


      {/* {Experence } */}
      <div id="experience" className="p-5 min-h-screen flex flex-col items-center lg:items-start mx-[40px] mt-0 lg:mb-[-100px]">
        <h2 className="relative text-3xl text-white font-fira mb-8 flex items-center w-full">
          <span className="flex-grow border-t border-violet-400"></span>
          <span className="mx-4 flex-shrink">
            <span className="text-violet-400">#</span>Experience
          </span>
          <span className="flex-grow border-t border-violet-400"></span>
        </h2>

        <div className="flex flex-col lg:flex-row items-center lg:items-start w-full">
          {/* Bagian Kiri: Text */}
          <div className="lg:w-1/2 w-full text-white mb-8 lg:mb-0 lg:pr-8 font-fira lg:mt-8">
            <a href="https://github.com/dekastra/GCS_Drone" rel="noopener noreferrer" target="_blank" className="text-[6.5vw] lg:text-[4vw] font-bold mb-1 text-violet-400 hover:underline">
              Research Assistant
            </a>
            <p className="md:text-[1.6vw] text-[3.2vw] mb-0">Badan Riset Inovasi Nasional (BRIN)</p>
            <p className="mb-8 md:text-[1.2vw] text-[2.5vw]">Bandung, September 2023 - August 2024</p>
            <p className="mb-2 md:text-[3.5vw] lg:text-[1.3vw]">In a collaborative project between the Bandung Institute of Technology, Bina Nusantara University (BINUS), and Terra Drone, initiated by the National Research and Innovation Agency (BRIN), I served as an assistant researcher for the BINUS Bandung team. My role as a programmer involved developing the Ground Control System for micro drones, which are used to detect cracks or damage on the CN-235 aircraft body. I was also responsible for creating the camera interface for the drone and integrating the trained model using YOLO version 8 with the GUI I had developed.</p>
            {/* Tambahkan konten teks lainnya di sini */}
          </div>

          {/* Bagian Kanan: Foto */}
          <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
            <img src={require('./assets/foto.png')} className="rounded-lg lg:w-[1200px]"
            alt='foto pesawat' />
          </div>
        </div>
      </div>


      {/* {WORKS SECTOR} */}

      <div id="works" className="p-5 min-h-screen flex flex-col items-center lg:items-start mx-[40px]">
          <h2 className="relative text-3xl text-white font-fira mb-8 flex items-center w-full">
            <span className="flex-grow border-t border-violet-400"></span>
            <span className="mx-4 flex-shrink">
              <span className="text-violet-400">#</span>Projects
            </span>
            <span className="flex-grow border-t border-violet-400"></span>
          </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-[#1E1E1E] p-5 rounded-lg shadow-lg">
              <img
              src={require('./assets/pothole_detector.png')}
              alt="Project 1 Thumbnail"
              className="mb-4 w-full h-auto rounded-lg"
              />
            <h3 className="text-xl font-fira text-white mb-2">Pothole Detector</h3>
            <p className="text-gray-400 font-fira ">A ground control system for drones that allows real-time video feed, altitude monitoring, and precise control.</p>
            <div className='mt-4 flex flex-wrap gap-1'>
              <img className="" src="https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white" alt="Python"></img>
              <img src="https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style=for-the-badge&logo=PyTorch&logoColor=white" alt="TensorFlow"></img>
              <img src="https://img.shields.io/badge/Matplotlib-%23ffffff.svg?style=for-the-badge&logo=Matplotlib&logoColor=black" alt="TensorFlow"></img>
              <img src="https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white" alt="TensorFlow"></img>
              <img src="https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white" alt="TensorFlow"></img>
              <img src="https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="TensorFlow"></img>
              <img src="https://img.shields.io/badge/opencv-%23white.svg?style=for-the-badge&logo=opencv&logoColor=white" alt="TensorFlow"></img>
            </div>

            <div className="mt-6">
              <button className="border-2 border-purple-500 text-white font-fira py-2 px-4 rounded hover:bg-purple-500 hover:text-white transition duration-300">
                <a href="https://github.com/rahmadyan95/Pothole-Detector" rel="noopener noreferrer" target="_blank">View Project &larr;&rarr;</a>
              </button>
            </div>

          </div>

          <div className="bg-[#1E1E1E] p-5 rounded-lg shadow-lg">
              <img
              src={require('./assets/drone.png')}
              alt="Project 1 Thumbnail"
              className="mb-4 w-full h-auto rounded-lg"
              />
            <h3 className="text-xl font-fira text-white mb-2">Damage Detector on CN-235 Aircraft Body using drones with AI</h3>
            <p className="text-gray-400 font-fira">A ground control system for drones that allows real-time video feed and altitude monitoring.</p>

            <div className='mt-4 flex flex-wrap gap-1'>
              <img className="" src="https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white" alt="Python"></img>
              <img src="https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style=for-the-badge&logo=PyTorch&logoColor=white" alt="TensorFlow"></img>
              <img src="https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white" alt="TensorFlow"></img>
              <img src="https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white" alt="TensorFlow"></img>
              <img src="https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="TensorFlow"></img>
              <img src="https://img.shields.io/badge/opencv-%23white.svg?style=for-the-badge&logo=opencv&logoColor=white" alt="TensorFlow"></img>
            </div>

            <div className="mt-6">
              <button className="border-2 border-purple-500 text-white font-fira py-2 px-4 rounded hover:bg-purple-500 hover:text-white transition duration-300">
                <a href="https://github.com/dekastra/GCS_Drone" rel="noopener noreferrer" target="_blank">View Project &larr;&rarr;</a>
              </button>
            </div>
          
          
          </div>

          {/* {PROJECT 3} */}
          <div className="bg-[#1E1E1E] p-5 rounded-lg shadow-lg">
              <img
              src={require('./assets/Dia.png')}
              alt="Project 1 Thumbnail"
              className="mb-4 w-full h-auto rounded-lg"
              />
            <h3 className="text-xl font-fira text-white mb-2">DiaCheckApp</h3>
            <p className="text-gray-400 font-fira">This app uses the XGBoost algorithm to classify diabetes indicators and integrates with the Gemini AI API for tailored recommendations.</p>

            <div className='mt-4 flex flex-wrap gap-1'>
              <img className="" src="https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white" alt="Python"></img>
              <img src="https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white" alt="TensorFlow"></img>
              <img src="https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white" alt="TensorFlow"></img>
              <img src="https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white" alt="TensorFlow"></img>
              <img src="https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="TensorFlow"></img>
              <img src="https://img.shields.io/badge/google%20gemini-4285F4?style=for-the-badge&logo=google%20assistant&logoColor=white" alt="TensorFlow"></img>
            </div>

            <div className="mt-10">
              <button className="border-2 border-purple-500 text-white font-fira py-2 px-4 rounded hover:bg-purple-500 hover:text-white transition duration-300">
                <a href="https://github.com/dekastra/GCS_Drone" rel="noopener noreferrer" target="_blank">View Project &larr;&rarr;</a>
              </button>
            </div>
          
          

          </div>

          <div className="bg-[#1E1E1E] p-5 rounded-lg shadow-lg">
              <img
              src={require('./assets/Earthquake.png')}
              alt="Project 1 Thumbnail"
              className="mb-4 w-full h-auto rounded-lg"
              />
            <h3 className="text-xl font-fira text-white mb-2">Earthquake Alarm</h3>
            <p className="text-gray-400 font-fira">This app fetches data from the BMKG and integrates it with a Telegram bot for earthquake alerts. It refreshes every 30 seconds and sends spam alerts when an earthquake is detected.</p>

            <div className='mt-4 flex flex-wrap gap-1'>
              <img src="https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=csharp&logoColor=white" alt="Python"></img>
              <img src="https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white" alt="TensorFlow"></img>
              
            </div>

            <div className="mt-10">
              <button className="border-2 border-purple-500 text-white font-fira py-2 px-4 rounded hover:bg-purple-500 hover:text-white transition duration-300">
                <a href="https://github.com/dekastra/GCS_Drone" rel="noopener noreferrer" target="_blank">View Project &larr;&rarr;</a>
              </button>
            </div>
          </div>

          <div className="bg-[#1E1E1E] p-5 rounded-lg shadow-lg">
              <img
              src={require('./assets/porto_logo.png')}
              alt="Project 1 Thumbnail"
              className="mb-4 w-full h-auto rounded-lg"
              />
            <h3 className="text-xl font-fira text-white mb-2">Portofolio_Me</h3>
            <p className="text-gray-400 font-fira">This is my portfolio, an application created to showcase the work I have done during my time at university.</p>

            <div className='mt-4 flex flex-wrap gap-1'>
              <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="Python"></img>
              <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TensorFlow"></img>
              <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="TensorFlow"></img>
              <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="TensorFlow"></img>
              <img src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white" alt="TensorFlow"></img>
              <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="TensorFlow"></img>
            </div>

            
            <div className="mt-10">
              <button className="border-2 border-purple-500 text-white font-fira py-2 px-4 rounded hover:bg-purple-500 hover:text-white transition duration-300 mr-2" >
                <a href="https://github.com/rahmadyan95/Portofolio_web" rel="noopener noreferrer" target="_blank" className=''>View Project &larr;&rarr;</a>
              </button>

              <button className="border-2 border-gray-500 text-white font-fira py-2 px-2 rounded hover:bg-purple-500 hover:text-white transition duration-300" >
                <a href="https://portofolio-web-rho.vercel.app/" rel="noopener noreferrer" target="_blank" className=''>Live &larr;&rarr;</a>
              </button>
            </div>
        
          </div>
          <div className="bg-[#1E1E1E] p-5 rounded-lg shadow-lg">
              <img
              src={require('./assets/EAS.png')}
              alt="Project 1 Thumbnail"
              className="mb-2 w-50 h-auto rounded-lg bg-greybackground"
              />
            <h3 className="text-xl font-fira text-white mb-2">Earthquake Alarm</h3>
            <p className="text-gray-400 font-fira">An emergency autoresponder using YOLOv8 detects collisions at intersections and instantly alerts nearby emergency services, reducing response time and improving road safety</p>

            <div className='mt-4 flex flex-wrap gap-1'>
              <img className="" src="https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white" alt="Python"></img>
              <img src="https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style=for-the-badge&logo=PyTorch&logoColor=white" alt="TensorFlow"></img>
              <img src="https://img.shields.io/badge/Matplotlib-%23ffffff.svg?style=for-the-badge&logo=Matplotlib&logoColor=black" alt="TensorFlow"></img>
              <img src="https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white" alt="TensorFlow"></img>
              <img src="https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white" alt="TensorFlow"></img>
              <img src="https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="TensorFlow"></img>
              <img src="https://img.shields.io/badge/opencv-%23white.svg?style=for-the-badge&logo=opencv&logoColor=white" alt="TensorFlow"></img>
            </div>

            <div className="mt-5">
              <button className="border-2 border-purple-500 text-white font-fira py-2 px-4 rounded hover:bg-purple-500 hover:text-white transition duration-300">
                <a href="https://github.com/rahmadyan95/Emergency-Autoresponder" rel="noopener noreferrer" target="_blank">View Project &larr;&rarr;</a>
              </button>
            </div>
          </div>

          <div className="bg-[#1E1E1E] p-5 rounded-lg shadow-lg">
              <img
              src={require('./assets/Hangman.png')}
              alt="Project 1 Thumbnail"
              className="mb-2 w-50 h-auto rounded-lg bg-greybackground"
              />
            <h3 className="text-xl font-fira text-white mb-2">Hangman Games</h3>
            <p className="text-gray-400 font-fira">The Hangman Game in C is a classic word-guessing game that challenges players to decipher a hidden word by guessing one letter at a time.</p>

            <div className='mt-4 flex flex-wrap gap-1'>
              <img className="" src="https://img.shields.io/badge/-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white" alt="Python"></img>
            </div>

            <div className="mt-5">
              <button className="border-2 border-purple-500 text-white font-fira py-2 px-4 rounded hover:bg-purple-500 hover:text-white transition duration-300">
                <a href="https://github.com/rahmadyan95/Simple-Hangman" rel="noopener noreferrer" target="_blank">View Project &larr;&rarr;</a>
              </button>
            </div>
          </div>


          <div className="bg-[#1E1E1E] p-5 rounded-lg shadow-lg">
              <img
              src={require('./assets/sortalgo.png')}
              alt="Project 1 Thumbnail"
              className="mb-2 w-50 h-auto rounded-lg bg-greybackground"
              />
            <h3 className="text-xl font-fira text-white mb-2">Sorting Algorithm Visualization</h3>
            <p className="text-gray-400 font-fira">This is an application that implements several sorting algorithms, visualizing the sorting process.</p>

            <div className='mt-4 flex flex-wrap gap-1'>
              <img className="" src="https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white" alt="Python"></img>
              <img src="https://img.shields.io/badge/Matplotlib-%23ffffff.svg?style=for-the-badge&logo=Matplotlib&logoColor=black" alt="TensorFlow"></img>
              <img src="https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white" alt="TensorFlow"></img>
              <img src="https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="TensorFlow"></img>
            </div>

            <div className="mt-5">
              <button className="border-2 border-purple-500 text-white font-fira py-2 px-4 rounded hover:bg-purple-500 hover:text-white transition duration-300">
                <a href="https://github.com/rahmadyan95/Simple-Hangman" rel="noopener noreferrer" target="_blank">View Project &larr;&rarr;</a>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Certificate */}

      <div id="Certificate" className="p-5 flex flex-col items-center lg:items-start mx-[40px] mb-0">{/* Margin bawah diatur ke 0 */}
  <h2 className="relative text-3xl text-white font-fira mb-8 flex items-center w-full">
    <span className="flex-grow border-t border-violet-400"></span>
    <span className="mx-4 flex-shrink">
      <span className="text-violet-400">#</span>Certificate
    </span>
    <span className="flex-grow border-t border-violet-400"></span>
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
    {/* Kolom 1 */}
    <div className="bg-[#1E1E1E] p-5 rounded-lg shadow-lg flex flex-col md:flex-row items-start">
      <div className="flex justify-center mb-2 md:mb-0 md:mr-4">
        <img
          src={require('./assets/Microsoft_logo.png')}
          alt="Certificate Thumbnail"
          className="w-[80px] h-auto md:w-[200px]" // Ukuran gambar yang lebih kecil
        />
      </div>
      <div className="text-left flex-grow">
        <a 
          href='https://www.coursera.org/account/accomplishments/verify/ZJT8CP7Q6X72' 
          rel="noopener noreferrer" 
          target="_blank" 
          className="hover:underline text-[3vw] md:text-[1.05vw] font-fira text-white mb-2"
        >
          Build a computer vision app with Azure Cognitive Services
        </a>
        <p className="text-gray-400 font-fira text-[2.5vw] md:text-[1vw]">Microsoft</p>
        <p className="text-gray-400 font-fira text-[2.5vw] md:text-[1vw]">ZJT8CP7Q6X72</p>
      </div>
    </div>

    {/* Kolom 2 */}
    <div className="bg-[#1E1E1E] p-5 rounded-lg shadow-lg flex flex-col md:flex-row items-start">
      <div className="flex justify-center mb-2 md:mb-0 md:mr-4">
        <img
          src={require('./assets/freecodecamp.png')}
          alt="Certificate Thumbnail"
          className="w-[80px] h-auto md:w-[150px]" // Ukuran gambar yang lebih kecil
        />
      </div>
      <div className="text-left flex-grow">
        <a 
          href='https://www.freecodecamp.org/certification/rahmadyan2004/foundational-c-sharp-with-microsoft' 
          rel="noopener noreferrer" 
          target="_blank" 
          className="hover:underline text-[3vw] md:text-[1.05vw] font-fira text-white mb-2"
        >
          Foundational C# with Microsoft
        </a>
        <p className="text-gray-400 font-fira text-[2.5vw] md:text-[1vw]">Microsoft & FreeCodeCamp</p>
        <p className="text-gray-400 font-fira text-[2.5vw] md:text-[1vw]">rahmadyan2004-mlwp</p>
      </div>
    </div>

    {/* Kolom 3 */}
    <div className="bg-[#1E1E1E] p-5 rounded-lg shadow-lg flex flex-col md:flex-row items-start">
      <div className="flex justify-center mb-2 md:mb-0 md:mr-4">
        <img
          src={require('./assets/freecodecamp.png')}
          alt="Certificate Thumbnail"
          className="w-[80px] h-auto md:w-[150px]" // Ukuran gambar yang lebih kecil
        />
      </div>
      <div className="text-left flex-grow">
        <a 
          href='https://www.freecodecamp.org/certification/rahmadyan2004/machine-learning-with-python-v7' 
          rel="noopener noreferrer" 
          target="_blank" 
          className="hover:underline text-[3vw] md:text-[1.05vw] font-fira text-white mb-2"
        >
          Machine Learning with Python
        </a>
        <p className="text-gray-400 font-fira text-[2.5vw] md:text-[1vw]">FreeCodeCamp</p>
        <p className="text-gray-400 font-fira text-[2.5vw] md:text-[1vw]">rahmadyan2004-fcswm</p>
      </div>
    </div>

    <div className="bg-[#1E1E1E] p-5 rounded-lg shadow-lg flex flex-col md:flex-row items-start">
      <div className="flex justify-center mb-2 md:mb-0 md:mr-4">
        <img
          src={require('./assets/Dlink.png')}
          alt="Certificate Thumbnail"
          className="w-[80px] h-auto md:w-[150px]" // Ukuran gambar yang lebih kecil
        />
      </div>
      <div className="text-left flex-grow">
        <a 
          href='https://drive.google.com/file/d/1Gb_WkC9ZQc05QaAs1AVjuV4V3-t1HoV4/view?usp=sharing' 
          rel="noopener noreferrer" 
          target="_blank" 
          className="hover:underline text-[3vw] md:text-[1.05vw] font-fira text-white mb-2"
        >
          
          D-Link Certified Network Design Associate (DCNA)
        </a>
        <p className="text-gray-400 font-fira text-[2.5vw] md:text-[1vw]">Dlink</p>
        <p className="text-gray-400 font-fira text-[2.5vw] md:text-[1vw]"></p>
      </div>
    </div>
  </div>
</div>

     

      {/* About me */}

      <div id="about-me" className="p-5 min-h-screen flex flex-col items-center lg:items-start mx-[40px] mt-0"> {/* Margin atas diatur ke 0 */}
        <h2 className="relative text-3xl text-white font-fira mb-8 flex items-center w-full">
          <span className="flex-grow border-t border-violet-400"></span>
          <span className="mx-4 flex-shrink">
            <span className="text-violet-400">#</span>about-me
          </span>
          <span className="flex-grow border-t border-violet-400"></span>
        </h2>

        <div className="flex flex-col lg:flex-row items-center lg:items-start w-full">
          {/* Bagian Kiri: Foto */}
          <div className="lg:w-1/2 w-full flex justify-center lg:justify-start mb-2 lg:mb-0 lg:ml-10">
            <img src={require('./assets/Haekal.png')} alt='fotosaya' className="rounded-lg lg:w-[550px] max-w-full h-auto" />
          </div>

          {/* Bagian Kanan: Text */}
          <div className="lg:w-1/2 w-full text-white lg:pl- font-fira mt-4 lg:mt-0">
            <h3 className="text-[6.5vw] lg:text-[4vw] font-bold mb-1 text-violet-400 hover:underline">
              Haekal Rahmadyan
            </h3>
            <p className="md:text-[1.6vw] text-[3.2vw] mb-0">Bina Nusantara University (Undergraduate)</p>
            <p className="mb-4 md:text-[1.2vw] text-[2.5vw]">July 2022 - Present</p>
            <p className="mb-2 md:text-[3.5vw] lg:text-[1.1vw]">
              My name is Muhammad Haekal Aditya Rahmadyan, a dedicated Data Science student at Bina Nusantara University with a strong passion for both software engineering and data science. I pride myself on being a reliable team player, known for my diligence and high integrity in every project I undertake. My technical expertise spans a wide range of technologies, including operating systems like Arch Linux, Ubuntu, Debian, and Windows; programming languages such as Python, Java, R, C, C++, C#, Scala, and TypeScript; and frameworks like React, Tailwind CSS, Django, and TensorFlow. I also have strong skills in database management with PostgreSQL, web development using HTML5 and CSS3, and shell scripting with PowerShell and Bash. With a solid foundation in these technologies, I am eager to apply my knowledge and continue growing professionally by contributing to innovative projects within your organization.
            </p>
            {/* Tambahkan konten teks lainnya di sini */}
          </div>
        </div>
      </div>


      {/* Footer Atas */}
{/* Footer Atas */}
{/* Footer Atas */}
<footer className="w-screen shadow-lg border-t-gray-500 border-t-2 py-6 mt-8">
  <div id="footer" className="flex flex-col lg:flex-row justify-between items-center text-white px-4 lg:px-8 w-full">
    
    {/* Left Section: Logo and Tagline */}
    
    <div className="text-center lg:text-left mb-4 lg:mb-0 w-full lg:w-1/2">
      <Link to="main" spy={true} smooth={true} offset={0} duration={400}>
        <img src={require('./assets/porto_logo.png')} alt='gambarfooter' className='lg:w-[25vw]' />
      </Link>
    </div>
    

    {/* Right Section: Media Links */}
    <div className="flex flex-col items-center lg:items-end w-full lg:w-1/2">
      {/* Title: Media */}
      <p className="font-fira text-[4vw] lg:text-[2vw] text-center lg:text-left text-lg mb-4 lg:mb-7 lg:mr-12">Media</p>
      
      {/* Media Logos */}
      <div className="flex justify-center lg:justify-center space-x-6">
        {/* Instagram */}
        <a href="https://www.instagram.com/haekal_rahmadyan/profilecard/?igsh=MWxscWVmYjg3enNwYw%3D%3D" target="_blank" rel="noopener noreferrer">
          <img 
            src={require('./assets/instagram_logo.png')} 
            alt="Instagram" 
            className="w-8 h-8 transition-transform transform hover:scale-110" 
          />
        </a>
        {/* Email */}
        <a href="mailto:haekal.rahmadyan95@gmail.com">
          <img 
            src={require('./assets/email.png')} 
            alt="Email" 
            className="w-8 h-8 transition-transform transform hover:scale-110" 
          />
        </a>
        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/muhammad-haekal-aditya-rahmadyan-174506271/" target="_blank" rel="noopener noreferrer">
          <img 
            src={require('./assets/linkedin_logo.png')} 
            alt="LinkedIn" 
            className="w-8 h-8 transition-transform transform hover:scale-110" 
          />
        </a>
        {/* GitHub */}
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <img 
            src={require('./assets/logo_github.png')} 
            alt="GitHub" 
            className="w-8 h-8 transition-transform transform hover:scale-110" 
          />
        </a>
      </div>
    </div>
  </div>
</footer>

{/* Footer Bawah */}
<footer  className="w-screen bg-gray-800 py-4">
  <div className="text-center text-gray-400 text-sm">
    &copy; 2024 Rahmadyan. All rights reserved.
  </div>
</footer>







      

  
    </div>
  );
}

export default App;
