import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {
  const pricingOption = [
    {id:1 , name:'Free', price:0 ,features:[
      'awesome feature',
      'nice feature',
      'hudai feature',
      'andaji feature',
      'wow feature'
    ]
  },
    {id:2 , name:'Medium', price:9.99 ,features:[
      'awesome feature',
      'nice feature',
      'hudai feature',
      'andaji feature',
      'wow feature'
    ]},
    {id:3 , name:'Premium', price:19.99 ,features:[
      'awesome feature',
      'nice feature',
      'hudai feature',
      'andaji feature',
      'wow feature'
    ]}
  ]
  return (
    <div>
      <h1 className='text-5xl font-bold bg-indigo-300 p-12 text-white'>best deal of the town</h1>
    <div className='grid md:grid-cols-3 gap-3'>
    {
        pricingOption.map(option => <PriceOption
        key={option.id}
        option={option}
        ></PriceOption>)
      }
    </div>
    </div>
  );
};

export default Pricing;