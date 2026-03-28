import React, {  createContext, useState ,useRef} from 'react'
import { food_items } from '../food';


export const dataContext = createContext()
function DataContextProvider({children}) {
  const [input,setInput] = useState("");
   const [filteredItems, setFilteredItems] = useState(food_items);
   const [openCart,setOpenCart] = useState(false)
   const itemsRef = useRef(null);
  const data = {
    input,
    setInput,
    filteredItems,
    setFilteredItems,
    openCart,
    setOpenCart,
    itemsRef
  }
  return (
    <div>
      <dataContext.Provider value={data}>
      {children}
      </dataContext.Provider>
    </div>
  )
}

export default DataContextProvider
