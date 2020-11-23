import './App.css'
import CountryList from './CountryList'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const initialState = {
  countryList: []
}

function reducer(state, action) {
  console.log(action)
  switch (action.type) {
    case 'SET_COUNTRY_LIST': {
      console.log("Voy a actualizar la lista de paises")

      return { ...state, countryList: action.payload }
    }
    default: {
      return state
    }
  }
}

const store = createStore(reducer, initialState)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CountryList />
      </div>
    </Provider>
  );
}

export default App;
