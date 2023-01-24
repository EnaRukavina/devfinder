import { useEffect, useRef, useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { getUser } from '../usersApi';
import { useUserStore } from '../store/userStore';

function SearchBar() {
  const { setUser, setLoading } = useUserStore();
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  const getUserData = async (username: string) => {
    try {
      const res = await getUser(username);
      setUser(res);
    } catch (error: any) {
      console.log(error);
      if (error.response) {
        setUser(undefined);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    getUserData(inputValue);
    setInputValue('');
  };

  useEffect(() => {
    getUserData('enarukavina');
  }, []);

  const handleKeyDown = (event: any) => {
    if (event.keyCode === 13) {
      handleSubmit(event);
    }
  };

  return (
    <div className='dark:text-white text-slate-800 flex items-center gap-2 relative'>
      <IoSearchOutline className='text-3xl text-navy-200 absolute left-2 md:left-5' />
      <input
        ref={inputRef}
        onKeyDown={handleKeyDown}
        onChange={e => setInputValue(e.target.value)}
        placeholder='Search GitHub username...'
        className='w-full h-16 rounded-xl pr-28 pl-12 dark:bg-navy-500 bg-lightBlue-10 font-light outline-0 text-xs md:text-sm md:pl-16 md:pr-32 shadow-[1px_5px_8px_rgba(0,0,0,0.05)]'
        value={inputValue}
      />
      <button
        onClick={handleSubmit}
        className='bg-navy-300 text-sm h-12 px-5 p-3 rounded-lg font-semibold text-white absolute right-2 hover:bg-navy-300/50 transition'
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
