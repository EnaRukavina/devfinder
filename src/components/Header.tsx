import { BsFillSunFill } from 'react-icons/bs';

function Header() {
  return (
    <div className="text-white tracking-wide flex mb-10 items-center gap-5">
      <p className=" font-semibold text-2xl mr-auto">devfinder</p>
        <span className="text-md font-medium">LIGHT</span>
        <BsFillSunFill className="text-2xl"/> 
    </div>
  )
}

export default Header