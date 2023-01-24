import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { useThemeStore } from '../store/themeStore';

function Header() {
  const { theme, toggleTheme } = useThemeStore();
  return (
    <div className='text-slate-800 dark:text-white tracking-wide flex mb-10 items-center gap-5'>
      <p className=' font-semibold text-2xl mr-auto'>devfinder</p>
      <span className='text-md font-medium md:text-sm text-slate-500 dark:text-white select-none'>
        {theme}
      </span>
      {theme === 'LIGHT' ? (
        <BsFillMoonFill
          className='text-xl hover:text-slate-800 text-slate-500 dark:text-white  transition cursor-pointer'
          onClick={() => toggleTheme()}
        />
      ) : (
        <BsFillSunFill
          className='text-2xl hover:text-yellow-200 transition cursor-pointer'
          onClick={() => toggleTheme()}
        />
      )}
    </div>
  );
}

export default Header;
