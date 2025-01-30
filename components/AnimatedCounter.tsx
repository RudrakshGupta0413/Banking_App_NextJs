'use client';

import React from 'react'
import CountUp from 'react-countup'

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div>
        <CountUp className='w-full' 
        end={amount} 
        decimal=','
        prefix='₹ '
        duration={2.75}
        decimals={2} />
    </div>
  )
}

export default AnimatedCounter