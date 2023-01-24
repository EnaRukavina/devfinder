import { ReactElement } from 'react';

interface IUserCardBullet {
  item: string | undefined | null;
  icon: ReactElement;
  link?: boolean;
}

export const UserCardBullet = ({ item, icon, link }: IUserCardBullet) => {
  return (
    <div
      className={`flex items-center gap-3 py-1.5 ${item ? '' : 'opacity-50'}`}
    >
      <div className='text-2xl'>{icon}</div>
      {!link ? (
        <p className='line-clamp-1'>{item ? item : 'Not Available'}</p>
      ) : (
        <a
          href={item || ''}
          className='line-clamp-1 hover:text-navy-200 transition'
        >
          {item ? item : 'Not Available'}
        </a>
      )}
    </div>
  );
};
