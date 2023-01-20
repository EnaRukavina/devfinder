import { IoLocationSharp , IoLogoTwitter} from 'react-icons/io5';
import { ImLink } from 'react-icons/im';
import { HiBuildingOffice2 } from 'react-icons/hi2';

function UserCard() {
  return (
    <div className='text-white bg-navy-500 rounded-xl p-6 mt-5 font-light text-sm'>
      <div className='flex items-center gap-5 mb-8'>
        <div className='w-20 h-20 rounded-full bg-white shrink-0' />
        <div className='gap-1 flex flex-col'>
          <p>The octocat</p>
          <p className='text-navy-300 '>@octocat</p>
          <p className=''>Joined 25 Jan 2011</p>
        </div>
      </div>
      <p className='leading-7 mb-6'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, numquam.
      </p>
      <div className='bg-navy-900 rounded-xl p-5 px-8 flex justify-between'>
        <div className='flex flex-col items-center gap-2'>
          <p className='text-xs'>Repos</p>
          <p className='text-lg font-medium'>8</p>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <p className='text-xs'>Followers</p>
          <p className='text-lg font-medium'>12312</p>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <p className='text-xs'>Following</p>
          <p className='text-lg font-medium'>8</p>
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <IoLocationSharp className="text-2xl" />
          <p>San Francisco</p>
        </div>
        <div className="flex items-center gap-3">
          <ImLink className="text-2xl" />
          <p>https://github.blog</p>
        </div>
        <div className="flex items-center gap-3 opacity-50">
          <IoLogoTwitter className="text-2xl" />
          <p>Not Available</p>
        </div>
        <div className="flex items-center gap-3">
          <HiBuildingOffice2 className="text-2xl" />
          <p>@github</p>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
