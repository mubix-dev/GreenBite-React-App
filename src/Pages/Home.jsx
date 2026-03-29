import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../Categories";
import Card from "../components/Card";
import { food_items } from "../food";
import { useContext } from "react";
import { dataContext } from "../context/DataContextProvider";
import { X } from "lucide-react";
import CartCard from "../components/CartCard";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Footer from "../components/Footer";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";

export default function Home() {
  let { filteredItems, setFilteredItems, input, openCart, setOpenCart,itemsRef } =
    useContext(dataContext);
  function filterCategory(category) {
    if (category === "All") {
      setFilteredItems(food_items);
      return;
    }
    const filteredList = food_items.filter(
      (item) => item.food_category === category,
    );
    setFilteredItems(filteredList);
    setTimeout(() => {
    itemsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 100);
  }

  let items = useSelector((state) => state.cart);
  //console.log(items)

  let subTotal = items.reduce(
    (total, item) => (total += item.price * item.quantity),
    0,
  );
  let deliveryFee = 150;
  let tax = parseFloat((subTotal * (0.5 / 100)).toFixed(2));
  let grandTotal = Math.floor(subTotal + deliveryFee + tax);

  let dispatch = useDispatch()

  return (
    <div className="min-h-screen w-full ">
      <Navbar />
      <Hero />
      {!input ? (
        <div className="w-full flex bg-GlightCream py-10 gap-6 flex-wrap justify-center"  >
          {Categories.map((item) => (
            <div
              key={item.id}
              className="w-30 md:w-35 bg-GSand flex flex-col items-center gap-3 rounded-xl font-semibold shadow-md py-5 hover:scale-105  hover:bg-GOlive transition cursor-pointer"
              onClick={() => filterCategory(item.name)}
            >
              <div className="text-GDark text-2xl">{item.icon}</div>

              <span className="text-sm text-gray-700">{item.name}</span>
            </div>
          ))}
        </div>
      ) : null}

      <div className="w-full flex bg-GlightCream py-10 gap-6 flex-wrap justify-center" ref={itemsRef}>
        {filteredItems.length > 0 ? filteredItems.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            image={item.food_image}
            name={item.food_name}
            price={item.price}
          />
        )):<div className="text-xl text-amber-800 min-h-screen flex flex-col justify-center items-center">No food item found</div>}
      </div>

      <div
        className={`w-full md:w-[40vw] h-full fixed bg-GlightCream top-0 right-0 z-50 duration-300 transition-transform flex flex-col items-center  p-2.5 shadow-lg overflow-auto ${openCart ? "translate-x-0" : "translate-x-full "}`}
      >
        <header className=" w-full flex justify-between border-b-2 pb-2 border-GMdGreen ">
          <span className="font-semibold text-GMdGreen md:text-lg">
            Shopping Cart
          </span>
          <X
            className="text-lg text-GMdGreen cursor-pointer hover:text-gray-500 md:text-2xl "
            onClick={() => setOpenCart(false)}
          />
        </header>
        {items.length > 0 ?<><div className="w-full flex flex-col gap-1">
          {items.map((item) => (
            <CartCard
              key={item.id}
              id={item.id}
              price={item.price}
              image={item.image}
              quantity={item.quantity}
              name={item.name}
            />
          ))}
        </div>
        <div className="w-full border-t-2 border-b-2 py-2.5 border-GMdGreen mt-5 flex flex-col gap-1 px-8 ">
          <div className="w-full flex justify-between items-center">
            <span className="text-lg  text-green-900" >Sub-Total</span>
            <span className=" ">Rs {subTotal}/-</span>
          </div>
          <div className="w-full flex justify-between items-center">
            <span className="text-lg  text-green-900">Tax</span>
            <span className=" ">Rs {tax}/-</span>
          </div>
          <div className="w-full flex justify-between items-center">
            <span className="text-lg  text-green-900">Delivery Charges</span>
            <span className=" ">Rs {deliveryFee}/-</span>
          </div>
        </div>
        <div className="w-full mt-5   px-8">
          <div className="w-full flex justify-between items-center">
            <span className="text-lg text-GDark font-bold">Grand Total</span>
            <span className="text-lg text-amber-700 font-semibold">
              Rs {grandTotal}/-
            </span>
          </div>
        </div>
        <button className="w-[80%] bg-GMdGreen px-2.5 mt-6 py-1.5 shadow-lg rounded-lg text-lg font-semibold cursor-pointer hover:bg-green-950 duration-200 text-white" onClick={()=>(toast.success("Order Placed!"),dispatch(clearCart()))}>
          Checkout
        </button></> :<div className="text-xl text-amber-800 h-full flex flex-col justify-center">Your cart is empty</div> }
      </div>
      <Footer/>
    </div>
  );
}
