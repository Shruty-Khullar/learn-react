import { EventAsProp } from "./components/EventAsProps";
import {EventHandling} from "./components/EventHandling";
import NetflixSeriesWithDynamicValues from './components/NetflixSeriesWithDynamicValues'
export const App = () => {
  return (
    <>  
      {/* <NetflixSeriesWithDynamicValues />
      <EventHandling /> */}
      <EventAsProp />
    </>
  )
}