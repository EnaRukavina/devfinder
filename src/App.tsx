import Header from './components/Header';
import SearchBar from './components/SearchBar';
import UserCard from './components/UserCard';
import { useThemeStore } from './store/themeStore';

function App() {
  const { theme } = useThemeStore();

  return (
    <div className={`${theme === 'DARK' && 'dark'}`}>
      <div
        className={`dark:bg-navy-900 bg-lightBlue-200 h-full w-full py-8 px-6 min-h-screen justify-center items-center flex `}
      >
        <div className='md:w-[700px] shrink-0 w-full'>
          <Header />
          <SearchBar />
          <UserCard />
        </div>
      </div>
    </div>
  );
}

export default App;
