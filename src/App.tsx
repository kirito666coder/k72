import { BrowserRouter } from "react-router-dom"
import Allroutes from "./routes/Allroutes"
import Stairs from "./components/common/Stairs"

const App = () => {
  return (
      <BrowserRouter>
      <Stairs>
      <Allroutes/>
      </Stairs>
      </BrowserRouter>
  )
}

export default App
