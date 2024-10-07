import './App.css';
import logo from './assets/logo.png';
import menulogo from './assets/menu.png';
import { FaBeer,  } from 'react-icons/fa';



function Menu(e: React.MouseEvent<HTMLImageElement>) {
  const list = document.querySelector('ul');
  const target = e.target as HTMLImageElement; // Cast to HTMLImageElement
  const menuStatus = target.getAttribute('data-status');

  if (menuStatus === 'menu') {
    target.setAttribute('data-status', 'close');
    list?.classList.add('top-[80px]', 'opacity-100','z-[10]');
  } else {
    target.setAttribute('data-status', 'menu');
    list?.classList.remove('top-[80px]', 'opacity-100','z-[10[');
  }
}

function App() {
  return (
    <div className=''>
      <nav className='p-5 bg-greybackground shadow md:flex md:items-center md:justify-between'>
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

      <div className="bg-greybackground p-10 min-h-screen">
        <h1 className="text-3xl text-center white font-bold mb-5">Welcome to Rahmadyan's Website</h1>
        <p className="text-lg text-gray-700 text-center">
          This is the body content of the website. Here, you can add more sections such as an introduction, portfolio, and contact information.
        </p>
      </div>
    </div>
  );
}

export default App;
