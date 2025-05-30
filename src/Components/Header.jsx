import apple from '../assets/images/apple.svg';
import search from '../assets/images/search.svg';
import bag from '../assets/images/bag.svg';

const Header = () => {
  return (
    <header className='bg-black flex justify-between items-center px-6 py-10'>
      <nav>
        <img src={apple} alt="apple" className='h-6' />
      </nav>
      <ul className='flex gap-4'>
        <li>
           <a className='text-gray-400 hover:text-white transition-colors duration-200' href="store">Store</a>
        </li>
        <li>
           <a className='text-gray-400 hover:text-white transition-colors duration-200' href="iphones">iPhone</a>
        </li>
        <li>
           <a className='text-gray-400 hover:text-white transition-colors duration-200' href="mac">Mac</a>
        </li>
        <li>
           <a className='text-gray-400 hover:text-white transition-colors duration-200' href="support">Support</a>
        </li>
      </ul>
      <nav className='flex items-center space-x-4'>
        <img src={search} alt="search" className='h-5' />
        <img src={bag} alt="bag" className='h-5' />
      </nav>
    </header>
  );
};

export default Header;
