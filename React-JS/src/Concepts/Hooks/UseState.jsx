/* Here we are learning about Basic Hooks Methods, one of them is UseState */
/* when ever we need to make changes in the UI the react will handle the control from us */
/* we will learn UseState Hook by making changes in the UI */
/* Here we see how to manipulate variables and show the result in the UI using hooks: useState */

import {useState} from 'react'

const Hooks = () => {

    const iphone14 = 160000 ;
    const iphone15 = 260000 ;

    
    const[subBill , setsubBill] = useState(0) ;

    const orderIphone14 = ()=>{
        
        setsubBill(subBill+iphone14) ;

    };

    const orderIphone15 = ()=>{
       
        setsubBill(subBill+iphone15) ;
    };

  return (
    <>
    
    <p>YOUR TOTAL BILL : {subBill} </p>
    <button onClick={orderIphone14} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3'>Order Iphone 14</button>
    <br/>
    <button onClick={orderIphone15} className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-3'>Order Iphone 15</button>
    
    </>
  )
}

export default Hooks
