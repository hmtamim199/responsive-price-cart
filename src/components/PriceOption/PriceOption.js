import React from 'react';
import Feature from '../Feature/Feature';


const PriceOption = ({option}) => {
  const {features} = option
  return (
    <div className='bg-indigo-300 m-4 p-8 rounded-lg '>
      <div>
        <h2>
          <span className='text-6xl font-bold text-white '>{option.price}</span>
          <span className='text-2xl text-gray-200'>/Mon</span>
          </h2>
        <p className='text-2xl'>{option.name}</p>
      </div>
      {
        features.map((feature, idx) => <Feature
        feature={feature}
        key={idx}
        ></Feature>)
      }
      <button className='bg-green-500 w-full py-2 text-2xl font-semibold rounded-2xl text-white'>Buy now</button>
    </div>
  );
};

export default PriceOption;