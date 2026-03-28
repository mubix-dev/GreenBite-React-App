import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";


function Card({ id, image, name, price }) {
  let dispatch = useDispatch()
  return (
    <div className="w-2/5 md:w-1/4 lg:w-1/5  p-3 bg-GSand flex flex-col gap-2.5 rounded-xl justify-between shadow-lg hover:shadow-GOlive hover:scale-105 duration-200">
      <div>
        <img
          className="w-full h-30 md:h-52 lg:h-60 object-cover rounded-xl"
          src={image}
          alt={name}
        />
      </div>
      <div >
        <div className=" text-[20px] font-semibold md:text-lg lg:text-xl ">{name}</div>
        <div className="text-[15px]  lg:text-lg font-bold mt-1.5 text-GMdGreen">Rs {price}/-</div>
      </div>

      <button className="bg-GMdGreen px-2.5 py-1.5 shadow-lg rounded-lg text-lg font-semibold cursor-pointer hover:bg-green-950 duration-200 text-white"
      onClick={()=>dispatch(addItem({id:id,image:image,name:name,price:price,quantity:1}))}
      >
        Add to cart
      </button>
    </div>
  );
}

export default Card;