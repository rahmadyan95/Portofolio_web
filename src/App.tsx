import './App.css';
import logo from './assets/logo.png';
import menulogo from './assets/menu.png';

function App() {
  return (
    <div className='min-h-screen bg-greybackground'>
      <nav className='bg-greybackground p-4'>
        <div className='container mx-auto flex items-center justify-between p-1'>
          <div className='flex items-center'>
            <img src={logo} alt="logo" className="h-7 mr-2" />
            <h1 className="text-white text-[20px] mb-1 md:mb-0 font-fira text-left">Rahmadyan</h1>
          </div>

          <div className='md:static absolute bg-greybackground md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5 '>
            <ul className='flex md:flex-row flex-col  md:items-center md:gap-[4vw] gap-8 font-fira text-[19px]'>
              <li>
                <a href="#" className="flex items-center">
                  <span className="text-purple-600">#</span>
                  <span className="text-white">home</span>
                </a>
              </li>

              <li>
                <a href="#" className="flex items-center">
                  <span className="text-purple-600">#</span>
                  <span className="text-white">works</span>
                </a>
              </li>
              
              <li>
                <a href="#" className="flex items-center">
                  <span className="text-purple-600">#</span>
                  <span className="text-white">about-me</span>
                </a>
              </li>
  
              <li>
                <a href="#" className="flex items-center">
                  <span className="text-purple-600">#</span>
                  <span className="text-white">contacts</span>
                </a>
              </li>
            </ul>
          
          
          </div>
           <div className='flex items-end md:gap-6'>
            <button className="flex items-center" >
            <img src={menulogo} alt="logo" className='h-7 mr-2 cursor-pointer md:hidden' />
            </button>
        </div>
         
        </div>
      </nav>
    </div>
  );
}

export default App;
