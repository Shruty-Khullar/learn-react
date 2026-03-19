import { BioProvider } from "./hooks";
import { Helper } from "./hooks/Helper";
import { Home } from "./hooks/Home";
const App = () => {
  return (
    <>
    <BioProvider>
      <Home/>
      <Helper/>
    </BioProvider>
    {/* <Helper/> */}
    </>
  )
}
export default App;