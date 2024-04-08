import React, {useState} from 'react'

function Car_Model(){

  const [model, set_model] = useState('BMW');
  const [year, setyear] = useState(2021);
  const [color, set_color] = useState('red');
  const [mileage, set_mileage] = useState(100000);
  const [price, set_price] = useState('1000000 RS');

  return(
    <>
      <p>
        My Car Model is {model}, Year {year}, Its Color is {color}, Car mileage is {mileage} and I bought this in {price}
      </p>

      <button type='button'
        onClick={() => set_model('Honda Civic')}> Change Model
      </button>

      <button type='button'
        onClick={() => setyear('2020')}> Change Year
      </button>

      <button type='button'
        onClick={() => set_color('Black')}> Change Color
      </button>

      <button type='button'
        onClick={() => set_mileage('202000')}> Change Mileage
      </button>

      <button type='button'
        onClick={() => set_price('20200120 Rs')}> Change Rs
      </button>
    </>
  )
}

export default Car_Model;