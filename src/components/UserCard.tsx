import { IoLocationSharp, IoLogoTwitter } from 'react-icons/io5';
import { ImLink } from 'react-icons/im';
import { HiBuildingOffice2 } from 'react-icons/hi2';
import { useUserStore } from '../store/userStore';
import { UserCardBullet } from './UserCardBullet';
import { NotFound } from './NotFound';
import { ImSpinner8 } from 'react-icons/im';

function UserCard() {
  const { user, loading } = useUserStore();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options = { day: '2-digit', month: 'short', year: 'numeric' } as any;
    const formattedDate = date.toLocaleDateString('en-US', options);
    return formattedDate;
  };

  return (
    <div className='dark:text-white dark:bg-navy-500 text-slate-700 bg-lightBlue-100 shadow-[1px_5px_8px_rgba(0,0,0,0.05)] rounded-xl md:p-10 md:pb-8 p-6 mt-5 dark:font-light text-sm md:flex md:gap-8'>
      {loading ? (
        <div className='flex items-center flex-1 justify-center h-22 flex-col gap-3'>
          Loading...
          <ImSpinner8 className='animate-spin text-3xl text-navy-300' />
        </div>
      ) : user === undefined ? (
        <NotFound />
      ) : (
        <>
          <img
            src={user?.avatar_url || require('../defaultAvatar.png')}
            className='md:w-24 md:h-24 rounded-full shrink-0 hidden md:block'
          />
          <div className='flex-1'>
            <div className='flex items-center gap-5 mb-8 md:mb-2'>
              <img
                src={user?.avatar_url || require('../defaultAvatar.png')}
                className='w-20 h-20 rounded-full bg-white shrink-0 md:hidden'
              />
              <div className='flex flex-col md:flex-row flex-1 justify-between'>
                <div>
                  <p className='md:text-2xl font-medium'>{user?.name || ''}</p>
                  <a
                    href={user?.html_url}
                    target='_blank'
                    className='text-navy-200 my-1 hover:text-slate-500 dark:hover:text-blue-200 transition'
                  >{`@${user?.login}`}</a>
                </div>
                <p className='relative md:top-2'>{`Joined ${formatDate(
                  user?.created_at!
                )}`}</p>
              </div>
            </div>
            <p className={`leading-7 mb-6 ${user?.bio ? '' : 'opacity-50'}`}>
              {user?.bio || 'This profile has no bio'}
            </p>
            <div className='dark:bg-navy-900 bg-lightBlue-200 rounded-xl p-5 md:py-4 md:px-7 px-8 flex justify-between'>
              <div className='flex flex-col items-center gap-2'>
                <p className='text-xs md:text-sm'>Repos</p>
                <p className='text-lg md:text-xl font-medium'>
                  {user?.public_repos}
                </p>
              </div>
              <div className='flex flex-col items-center gap-2'>
                <p className='text-xs md:text-sm'>Followers</p>
                <p className='text-lg font-medium md:text-xl'>
                  {user?.followers}
                </p>
              </div>
              <div className='flex flex-col items-center gap-2'>
                <p className='text-xs md:text-sm'>Following</p>
                <p className='text-lg font-medium md:text-xl'>
                  {user?.following}
                </p>
              </div>
            </div>
            <div className='mt-6 grid md:grid-cols-2 overflow-hidden md:gap-10'>
              <div>
                <UserCardBullet
                  item={user?.location}
                  icon={<IoLocationSharp />}
                />
                <UserCardBullet item={user?.blog} icon={<ImLink />} link />
              </div>
              <div>
                <UserCardBullet
                  item={user?.twitter_userName}
                  icon={<IoLogoTwitter />}
                />
                <UserCardBullet
                  item={user?.company}
                  icon={<HiBuildingOffice2 />}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default UserCard;
