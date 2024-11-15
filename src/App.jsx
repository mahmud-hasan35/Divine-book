import { useState } from "react"
import BookLibrary from "./section/BookLibrary"
import { initialTasks } from "./data/data"




function App() {
  const [data,setData] = useState(initialTasks)



  return (
    <>
    <BookLibrary data={data}/>

    
    </>
  )
}

export default App