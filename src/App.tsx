import './App.css';
import logo from './assets/logo.png';
import menulogo from './assets/menu.png';
import foto_pribadi from './assets/myphoto.png';

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
            <img src={logo} alt="logo" className="inline h-11 mr-2" />
            Rahmadyan
          </span>

          <span className='text-3xl cursor-pointer md:hidden block'>
            <img
              src={menulogo}
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
            <a href="#" className="">
              <span className="text-purple-600">#</span>
              <span className="text-white hover:text-purple-600">home</span>
            </a>
          </li>

          <li className='mx-4 my-5 md:my-0'>
            <a href="#" className="flex items-center">
              <span className="text-purple-600">#</span>
              <span className="text-white hover:text-purple-600">works</span>
            </a>
          </li>

          <li className='mx-4 my-5 md:my-0'>
            <a href="#" className="flex items-center">
              <span className="text-purple-600">#</span>
              <span className="text-white hover:text-purple-600">about-me</span>
            </a>
          </li>

          <li className='mx-4 my-5 md:my-0'>
            <a href="#" className="flex items-center">
              <span className="text-purple-600">#</span>
              <span className="text-white hover:text-purple-600">contacts</span>
            </a>
          </li>
        </ul>
      </nav>

      <div className="bg-greybackground p-5 min-h-screen flex flex-col lg:flex-row justify-start lg:justify-between items-center lg:items-start">
        {/* Left side: Image */}
        <img src={foto_pribadi} alt="profile" className="mt-0 w-[560px] h-[560px] hidden lg:block lg:mt-0 lg:mr-5" />

        {/* Right side: Text content */}
        <div className="flex flex-col items-center lg:items-start lg:w-1/2 lg:ml-5">
          <h1 className="text-3xl text-white font-bold font-fira">Rahmadyan is a</h1>
          <p className="text-3xl text-white font-fira text-center lg:text-left">
            <span className="text-purple-400">Software Engineer</span> and <span className="text-purple-400">Data Science</span> <span className="text-white">Student</span>
          </p>
          <h1 className="mt-5 text-1xl text-gray-300 font-fira text-center lg:text-left">
            Crafting innovative solutions where data science meets software engineering
          </h1>
        </div>
        <img src={foto_pribadi} alt="profile" className="mt-5 w-83 h-83 lg:hidden" />
        
        <div className="mt-2 p-5 border-4 border-white text-center relative flex justify-center items-center w-full lg:w-80 h-13 lg:mt-5 lg:ml-5">
          <h2 className="text-white text-xl z-10 font-fira">
            Currently working on <span className="text-purple-400 font-bold">{projectName}</span>
          </h2>
          <div className="absolute inset-0 bg-greybackground opacity-0 z-0"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
