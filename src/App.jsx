
import { useState } from "react";
import BookLibrary from "./section/BookLibrary";
import { initialTasks } from "./data/data";

function App() {
  const [data, setData] = useState(initialTasks);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (!existingItem) {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  return (
    <>
      <BookLibrary 
        data={data} 
        onAdd={handleAddToCart} 
        cartItems={cartItems} 
        setCartItems={setCartItems}
      />
    </>
  );
}

export default App;









// import { useState } from "react"
// import BookLibrary from "./section/BookLibrary"
// import { initialTasks } from "./data/data"




// function App() {
//   const [data,setData] = useState(initialTasks)

//   const [cartItems,setCartItems] = useState([])

//   const handleAddToCart = (item) => {
 
//     const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
//     if (!existingItem) {
//       setCartItems([...cartItems, { ...item, quantity: 1 }]);
//     }
//   };




//   return (
//     <>
//     <BookLibrary data={data}
//      onAdd= {handleAddToCart}
//      cartItems={cartItems}

    

//     />

    
//     </>
//   )
// }

// export default App