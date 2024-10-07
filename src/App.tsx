import './App.css';
import logo from './assets/logo.png';
import menulogo from './assets/menu.png';

function Menu(e: React.MouseEvent<HTMLImageElement>) {
  const list = document.querySelector('ul');
  const target = e.target as HTMLImageElement; // Cast to HTMLImageElement
  const menuStatus = target.getAttribute('data-status');

  if (menuStatus === 'menu') {
    target.setAttribute('data-status', 'close');
    list?.classList.add('top-[80px]', 'opacity-100');
  } else {
    target.setAttribute('data-status', 'menu');
    list?.classList.remove('top-[80px]', 'opacity-100');
  }
}

function App() {
  return (
    <div className='bg-greybackground'>
      <nav className='p-5 bg-greybackground shadow md:flex md:items-center md:justify-between'>
        <div className='flex justify-between items-center'>
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
    </div>
  );
}

export default App;
