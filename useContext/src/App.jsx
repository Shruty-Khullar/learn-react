import { BioProvider } from "./hooks";
import { DarkLight, ThemeContextProvider } from "./hooks/DarkLight";
import { Helper } from "./hooks/Helper";
import { Home } from "./hooks/Home";
const App = () => {
  return (
    <>
      {/* <BioProvider>
        <Home/>
        <Helper/>
      </BioProvider> */}
      <ThemeContextProvider>
        <DarkLight/>
      </ThemeContextProvider>
    </>
  )
}
export default App;