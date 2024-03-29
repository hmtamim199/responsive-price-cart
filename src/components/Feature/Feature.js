import React from 'react';
import { CheckBadgeIcon } from '@heroicons/react/24/solid'

const Feature = ({feature}) => {
  return (
    <div className='flex items-center'>
    <CheckBadgeIcon className="h-6 w-6 text-green-500"/>
    <p className='ml-2'>{feature}</p>
    </div>
  );
};

export default Feature;