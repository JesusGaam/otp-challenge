import React from 'react';
import waringIcon from '../../assets/warning-icon.svg';

interface NotificationMessageProps {
  type: 'error' | 'success' | 'info';
  title: string;
  message: string;
  className?: string;
}

const NotificationMessage: React.FC<NotificationMessageProps> = ({ type, title, message, children, className = '' }) => {
  return (
    <div className={`flex flex-col gap-4 p-4 md:p-6 bg-white/10 border border-white/20 rounded-lg w-full ${className}`}>
      <div className='grid grid-cols-[32px_1fr] gap-4 md:gap-4'>
        <div className='flex flex-col justify-center'>
          {type === 'error' && <img src={waringIcon} alt="Warning icon" width={32} />}
        </div>
        <div className='flex flex-col gap-2'>
          <div className='font-semibold text-[16px] md:text-[20px] text-white/80'>{title}</div>
          <div className='font-normal text-[14px] md:text-[16px] text-white/60'>{message}</div>
        </div>
      </div>
      {children &&
        <div className='flex flex-col md:flex-row md:justify-end'>{children}</div>
      }
    </div>
  )
}

export default NotificationMessage;