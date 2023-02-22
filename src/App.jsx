
import Flights from './components/Flights'
import Flights_input from './components/Flights_input'
import { Provider } from 'react-redux'
import store from './redux/store'
function App() {
  return (
    <Provider store={store}>
          <header id="header">
        <div class="container">
          <img src="./img/lws-logo.svg" alt="logo" class="logo" />
          <div class="flex items-center">
            <a class="text-white min-w-[50px] font-medium" href="#">Home</a>
            <button class="log-btn btn">Login</button>
          </div>
        </div>
      </header>
      <Flights_input/>
      <Flights/>
   </Provider>
  )
}

export default App
