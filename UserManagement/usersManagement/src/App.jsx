
import { BrowserRouter } from "react-router-dom"
import { RoutesApp } from "./routers/RoutesApp"




function App() {
  

  return (
    <>
      <div>
        <BrowserRouter>
          <RoutesApp />
        </BrowserRouter>
       </div>
    </>
  )
}

export default App
