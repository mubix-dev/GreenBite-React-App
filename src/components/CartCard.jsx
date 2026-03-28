
import { Trash2 } from 'lucide-react'
import { removeItem,incrementQty,decrementQty } from '../redux/cartSlice'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
function CartCard({id,name,price,quantity,image}) {
  let dispatch = useDispatch(); 
  return (
    <div className='w-full md:h-[150px] bg-GSand p-2 rounded-lg shadow-lg mt-2.5 flex justify-between'>
      <div className='w-[70%]  h-full flex gap-2.5'>
        <div className='w-[60%] h-full '>
            <img className='w-full h-full object-cover rounded-lg shadow-lg' src={image} alt="" />
        </div>
        <div className=' w-[30%] flex flex-col justify-between '>
            <div className='font-semibold md:text-lg text-green-900'>{name}</div>
            <div className='bg-GlightCream flex justify-center items-center rounded-lg shadow-lg   h-[30%]'>
                <button className='w-[30%]  h-full flex justify-center items-center cursor-pointer  ' onClick={()=>dispatch(decrementQty(id))}>-</button>
                <span className='w-[40%] h-full bg-GOlive flex justify-center items-center text-green-900'>{quantity}</span>
                <button className='w-[30%]  h-full flex justify-center items-center cursor-pointer 'onClick={()=>dispatch(incrementQty(id))}>+</button>
            </div>
        </div>
      </div>
      <div className='flex flex-col justify-between items-center'>
        <span className='text-green-900 font-semibold'>Rs {price}/-</span>
        <Trash2 className="text-red-500 cursor-pointer hover:text-red-800" onClick={()=>(dispatch(removeItem(id)))}/>
      </div>
    </div>
  )
}

export default CartCard
