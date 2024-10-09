import './App.css';

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
  
  return (
    <div id='main' className=' bg-greybackground shadow'>
      {/* Sticky Header */}
      <nav className='p-5 bg-greybackground shadow md:flex md:items-center md:justify-between sticky top-0 z-20'>
        <div className='flex justify-between items-center md:ml-4'>
          <span className='text-2xl font-fira cursor-pointer text-white'>
            <img src={require('./assets/logo.png')} alt="logo" className="inline h-11 mr-2" />
            Rahmadyan
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
            <a href="#main" className="">
              <span className="text-purple-600">#</span>
              <span className="text-white hover:text-purple-600">home</span>
            </a>
          </li>

          <li className='mx-4 my-5 md:my-0'>
            <a href="#experience" className="flex items-center" >
              <span className="text-purple-600">#</span>
              <span className="text-white hover:text-purple-600">experience</span>
            </a>
          </li>

          <li className='mx-4 my-5 md:my-0'>
            <a href="#works" className="flex items-center" >
              <span className="text-purple-600">#</span>
              <span className="text-white hover:text-purple-600">works</span>
            </a>
          </li>

          <li className='mx-4 my-5 md:my-0'>
            <a href="#home" className="flex items-center">
              <span className="text-purple-600">#</span>
              <span className="text-white hover:text-purple-600">about-me</span>
            </a>
          </li>

          <li className='mx-4 my-5 md:my-0'>
            <a href="#home" className="flex items-center">
              <span className="text-purple-600">#</span>
              <span className="text-white hover:text-purple-600">contacts</span>
            </a>
          </li>
        </ul>
      </nav>

      <div id="home" className="bg-greybackground p-5 min-h-screen flex flex-col lg:flex-row justify-start lg:justify-between items-center lg:items-start">
        <div className="w-[3px] bg-[#ABB2BF] h-[180px] absolute top-[40px] left-[64px] hidden lg:flex flex-col items-center justify-between"></div>
        <div className="hidden lg:flex flex-col items-center lg:items-start lg:ml-5 lg:mt-[125px] w-full lg:w-auto">
          {/* GitHub Logo as Button */}
          <a href="https://github.com/rahmadyan95" rel="noopener noreferrer" className="flex items-center justify-center p-2 transition-transform transform hover:scale-110">
            <img
              src={require('./assets/logo_github.png')}
              alt="GitHub Logo"
              className="h-9 w-11 rounded-full mb-1"
            />
          </a>

          {/* Instagram Logo as Button */}
          <a href="https://www.instagram.com/haekal_rahmadyan/profilecard/?igsh=MWxscWVmYjg3enNwYw%3D%3D" rel="noopener noreferrer" className="flex items-center justify-center p-2 transition-transform transform hover:scale-110">
            <img
              src={require('./assets/instagram_logo.png')}
              alt="Instagram Logo"
              className="h-8 w-8 mb-1"
            />
          </a>

          {/* LinkedIn Logo as Button */}
          <a href="https://www.linkedin.com/in/haekal-rahmadyan-174506271/" rel="noopener noreferrer" className="flex items-center justify-center p-2 transition-transform transform hover:scale-110">
            <img
              src={require('./assets/linkedin_logo.png')}
              alt="LinkedIn Logo"
              className="h-8 w-8 mb-1"
            />
          </a>
        </div>

        {/* Combined container for Image, Text, and Currently Working On */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:ml-[50px]">
        {/* Lenpm i @tsparticles/reactft side: Image */}
        <img src={require('./assets/myphoto.png')} alt="profile" className="mt-0 w-[520px] h-[520px] hidden lg:block lg:mr-5" />

        {/* Right side: Text content and Currently Working On */}
        <div className="flex flex-col items-center lg:items-start lg:ml-5 lg:w-[800px] lg:pr-5 lg:mt-10"> {/* Set a wider width for the text container */}
          <h1 className="text-3xl text-white font-bold font-fira mb-2">
            Rahmadyan is a
          </h1>
          <p className="text-3xl text-white font-fira text-center lg:text-left mb-3">
            <span className="text-purple-400">Software Engineer</span> and <span className="text-purple-400">Data Science</span> <span className="text-white">Student</span>
          </p>
          <h1 className="text-1xl text-gray-300 font-fira text-center lg:text-left mb-5">
            Crafting innovative solutions where data science meets software engineering
          </h1>

          {/* The box for 'Currently working on' */}
          <div className="p-3 border-2 border-white text-center relative flex justify-center items-center w-full lg:w-[400px] h-auto lg:mt-1">
            <h2 className="text-white text-xl z-10 font-fira">
              Currently working on <span className="text-purple-400 font-bold">{projectName}</span>
            </h2>
            <div className="absolute inset-0 bg-greybackground opacity-0 z-0"></div>
          </div>
          <a 
            href="https://drive.google.com/file/d/1VHGt3z-VfRIMG_g_QwW5AY_f_jjnL-Bp/view?usp=sharing" // Replace with the actual path to your CV
          
            rel="noopener noreferrer"
            className="mt-5 bg-transparent border-2 border-violet-400 text-white font-bold font-fira text-center py-2 px-4 rounded hover:bg-violet-400 hover:text-gray-900 transition duration-500"
          >
            Download CV
          </a>
          
            {/* Social media logos for mobile only */}
            <div className="flex justify-center mt-4 md:hidden"> {/* Only show on mobile */}
              {/* GitHub Logo */}
              <a href="https://github.com/rahmadyan95" rel="noopener noreferrer" className="flex items-center justify-center p-2 transition-transform transform hover:scale-110 mx-2">
                <img
                  src={require('./assets/logo_github.png')}
                  alt="GitHub Logo"
                  className="h-10 w-10 rounded-full"
                />
              </a>

              {/* Instagram Logo */}
              <a href="https://www.instagram.com/haekal_rahmadyan/profilecard/?igsh=MWxscWVmYjg3enNwYw%3D%3D" rel="noopener noreferrer" className="flex items-center justify-center p-2 transition-transform transform hover:scale-110 mx-2">
                <img
                  src={require('./assets/instagram_logo.png')}
                  alt="Instagram Logo"
                  className="h-8 w-8"
                />
              </a>

              {/* LinkedIn Logo */}
              <a href="https://www.linkedin.com/in/haekal-rahmadyan-174506271/" rel="noopener noreferrer" className="flex items-center justify-center p-2 transition-transform transform hover:scale-110 mx-2">
                <img
                  src={require('./assets/linkedin_logo.png')}
                  alt="LinkedIn Logo"
                  className="h-8 w-8"
                />
              </a>
            </div>
          </div>
        </div>


        <img src={require('./assets/myphoto.png')} alt="profile" className="mt-5 w-83 h-83 lg:hidden" />

      </div>
      {/* {Experence } */}
      <div id="experience" className="p-5 min-h-screen flex flex-col items-center lg:items-start mx-[40px]">
        <h2 className="relative text-3xl text-white font-fira mb-8 flex items-center w-full">
          <span className="flex-grow border-t border-violet-400"></span>
          <span className="mx-4 flex-shrink">
            <span className="text-violet-400">#</span>Experience
          </span>
          <span className="flex-grow border-t border-violet-400"></span>
        </h2>

        <div className="flex flex-col lg:flex-row items-center lg:items-start w-full">
          {/* Bagian Kiri: Text */}
          <div className="lg:w-1/2 w-full text-white mb-8 lg:mb-0 lg:pr-8 font-fira mt-8">
            <a href="https://github.com/dekastra/GCS_Drone" rel="noopener noreferrer" className="text-5xl font-bold mb-1 text-violet-400 hover:underline">
              Research Assistant
            </a>
            <p className="text-[22px] mb-0">Badan Riset Inovasi Nasional (BRIN)</p>
            <p className="mb-8">Bandung, September 2023 - August 2024</p>
            <p className="mb-2">In a collaborative project between the Bandung Institute of Technology, Bina Nusantara University (BINUS), and Terra Drone, initiated by the National Research and Innovation Agency (BRIN), I served as an assistant researcher for the BINUS Bandung team. My role as a programmer involved developing the Ground Control System for micro drones, which are used to detect cracks or damage on the CN-235 aircraft body. I was also responsible for creating the camera interface for the drone and integrating the trained model using YOLO version 8 with the GUI I had developed.</p>
            {/* Tambahkan konten teks lainnya di sini */}
          </div>

          {/* Bagian Kanan: Foto */}
          <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
            <img src={require('./assets/foto.png')} alt="Experience Photo" className="rounded-lg lg:w-[1200px]" />
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
                <a href="https://github.com/rahmadyan95/Pothole-Detector" rel="noopener noreferrer">View Project &larr;&rarr;</a>
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
                <a href="https://github.com/dekastra/GCS_Drone" rel="noopener noreferrer">View Project &larr;&rarr;</a>
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
                <a href="https://github.com/dekastra/GCS_Drone" rel="noopener noreferrer">View Project &larr;&rarr;</a>
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
                <a href="https://github.com/dekastra/GCS_Drone" rel="noopener noreferrer">View Project &larr;&rarr;</a>
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
                <a href="https://github.com/rahmadyan95/Portofolio_web" rel="noopener noreferrer" className=''>View Project &larr;&rarr;</a>
              </button>

              <button className="border-2 border-gray-500 text-white font-fira py-2 px-2 rounded hover:bg-purple-500 hover:text-white transition duration-300" >
                <a href="https://portofolio-web-rho.vercel.app/" rel="noopener noreferrer" className=''>Live &larr;&rarr;</a>
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
                <a href="https://github.com/rahmadyan95/Emergency-Autoresponder" rel="noopener noreferrer">View Project &larr;&rarr;</a>
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
                <a href="https://github.com/rahmadyan95/Simple-Hangman" rel="noopener noreferrer">View Project &larr;&rarr;</a>
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
                <a href="https://github.com/rahmadyan95/Simple-Hangman" rel="noopener noreferrer">View Project &larr;&rarr;</a>
              </button>
            </div>
          </div>

        </div>
      </div>

      <div id="experience" className="p-5 min-h-screen flex flex-col items-center lg:items-start mx-[40px]">
  <h2 className="relative text-3xl text-white font-fira mb-8 flex items-center w-full">
    <span className="flex-grow border-t border-violet-400"></span>
    <span className="mx-4 flex-shrink">
      <span className="text-violet-400">#</span>about-me
    </span>
    <span className="flex-grow border-t border-violet-400"></span>
  </h2>

  <div className="flex flex-col lg:flex-row items-center lg:items-start w-full">
    {/* Bagian Kiri: Foto */}
    <div className="lg:w-1/2 w-full flex justify-center lg:justify-start">
      <img src={require('./assets/foto.png')} alt="Experience Photo" className="rounded-lg lg:w-[1200px]" />
    </div>

    {/* Bagian Kanan: Text */}
    <div className="lg:w-1/2 w-full text-white mb-8 lg:mb-0 lg:pl-8 font-fira mt-8">
      <a className="text-5xl font-bold mb-1 text-violet-400 hover:underline">
        Haekal Rahmadyan
      </a>
      <p className="text-[22px] mb-0">Bina Nusantara University (Undergraduate)</p>
      <p className="mb-8">Bandung, September 2023 - August 2024</p>
      <p className="mb-2">
        In a collaborative project between the Bandung Institute of Technology, Bina Nusantara University (BINUS), and Terra Drone, initiated by the National Research and Innovation Agency (BRIN), I served as an assistant researcher for the BINUS Bandung team. My role as a programmer involved developing the Ground Control System for micro drones, which are used to detect cracks or damage on the CN-235 aircraft body. I was also responsible for creating the camera interface for the drone and integrating the trained model using YOLO version 8 with the GUI I had developed.
      </p>
      {/* Tambahkan konten teks lainnya di sini */}
    </div>
  </div>
</div>
    </div>
  );
}

export default App;
