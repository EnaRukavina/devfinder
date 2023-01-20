import { IoSearchOutline } from 'react-icons/io5';

function SearchBar() {
  return (
    <div className="text-white flex items-center gap-2 relative">
     <IoSearchOutline className="text-3xl text-navy-300 absolute left-2"/>
     <input placeholder="Search GitHub username..." className="w-full h-16 rounded-xl pr-28 pl-10 bg-navy-500 placeholder:text-white font-light outline-0 text-xs"/>
     <button className="bg-navy-300 text-sm h-12 px-5 p-3 rounded-lg font-semibold text-white absolute right-2">Search</button>
    </div>
  )
}

export default SearchBar