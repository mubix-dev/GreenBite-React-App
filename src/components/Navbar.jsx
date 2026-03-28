import { Search, Store, ShoppingCart } from "lucide-react";
import { useContext, useEffect } from "react";
import { dataContext } from "../context/DataContextProvider";
import { food_items } from "../food";
import { useSelector } from "react-redux";

function Navbar() {
  let {
    input,
    setInput,
    filteredItems,
    setFilteredItems,
    openCart,
    setOpenCart,
    itemsRef,
  } = useContext(dataContext);
  useEffect(() => {
    if (input.trim() === "") {
    // reset to all items if input is empty
    setFilteredItems(food_items);
    return;
  }
    let newList = food_items.filter(
      (item) =>
        item.food_name.includes(input) ||
        item.food_name.toLowerCase().includes(input),
    );
    setFilteredItems(newList);
    setTimeout(() => {
      itemsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }, [input]);
  let items = useSelector((state) => state.cart);
  return (
    <div className="w-full h-20 bg-GDark flex justify-between items-center p-8 top-0 sticky shadow-lg  z-50">
      {/* <div className=" bg-white w-12 h-12 flex justify-center items-center rounded-lg shadow-lg">
        <Store />
      </div> */}
      <h1 className="text-GOlive font-bold text-xl md:text-2xl">
        GreenBite
      </h1>
      <form
        className="w-1/2 relative"
        onSubmit={(e) => e.preventDefault()}
        action=""
      >
        <Search
          className=" absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
          size={20}
        />
        <input
          className="bg-GCream w-full pl-11 py-2.5 md:text-xl rounded-lg shadow-lg outline-none"
          type="text"
          placeholder="Search Items..."
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </form>
      <div
        className=" bg-GOlive w-12 h-12 flex justify-center items-center rounded-lg shadow-lg cursor-pointer relative"
        onClick={() => setOpenCart(true)}
      >
        <ShoppingCart className="text-GDark" />
        <span className="absolute -right-2 -top-3 bg-amber-600 px-1.5 rounded-full text-white font-semiBold text-[15px]">
          {items.length}
        </span>
      </div>
    </div>
  );
}
export default Navbar;
