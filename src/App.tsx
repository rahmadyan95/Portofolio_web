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
    <div className=''>
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
            <a href="#home" className="">
              <span className="text-purple-600">#</span>
              <span className="text-white hover:text-purple-600">home</span>
            </a>
          </li>

          <li className='mx-4 my-5 md:my-0'>
            <a href="#home" className="flex items-center">
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
          <a href="https://github.com/rahmadyan95" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-2 transition-transform transform hover:scale-110">
            <img
              src={require('./assets/logo_github.png')}
              alt="GitHub Logo"
              className="h-9 w-11 rounded-full mb-1"
            />
          </a>

          {/* Instagram Logo as Button */}
          <a href="https://www.instagram.com/haekal_rahmadyan/profilecard/?igsh=MWxscWVmYjg3enNwYw%3D%3D" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-2 transition-transform transform hover:scale-110">
            <img
              src={require('./assets/instagram_logo.png')}
              alt="Instagram Logo"
              className="h-8 w-8 mb-1"
            />
          </a>

          {/* LinkedIn Logo as Button */}
          <a href="https://www.linkedin.com/in/haekal-rahmadyan-174506271/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-2 transition-transform transform hover:scale-110">
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
      target="_blank"
      rel="noopener noreferrer"
      className="mt-5 bg-transparent border-2 border-violet-400 text-white font-bold font-fira text-center py-2 px-4 rounded hover:bg-violet-400 hover:text-gray-900 transition duration-500"
    >
      Download CV
    </a>
    
    {/* Social media logos for mobile only */}
    <div className="flex justify-center mt-4 md:hidden"> {/* Only show on mobile */}
      {/* GitHub Logo */}
      <a href="https://github.com/rahmadyan95" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-2 transition-transform transform hover:scale-110 mx-2">
        <img
          src={require('./assets/logo_github.png')}
          alt="GitHub Logo"
          className="h-10 w-10 rounded-full"
        />
      </a>

      {/* Instagram Logo */}
      <a href="https://www.instagram.com/haekal_rahmadyan/profilecard/?igsh=MWxscWVmYjg3enNwYw%3D%3D" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-2 transition-transform transform hover:scale-110 mx-2">
        <img
          src={require('./assets/instagram_logo.png')}
          alt="Instagram Logo"
          className="h-8 w-8"
        />
      </a>

      {/* LinkedIn Logo */}
      <a href="https://www.linkedin.com/in/haekal-rahmadyan-174506271/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-2 transition-transform transform hover:scale-110 mx-2">
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
    </div>
  );
}

export default App;
