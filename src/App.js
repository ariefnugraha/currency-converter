import { useEffect, useState } from "react";
import axios from "axios";

import InputCurrencies from "./components/InputCurrencies";
import CurrenciesResult from "./components/CurrenciesResult";

function App() {
  const [listCountries, setlistCountries] = useState([]);
  const [inputValue, setInputValue] = useState(10000)

  useEffect(() => {
    axios.get('http://api.exchangeratesapi.io/v1/symbols?access_key=b503a519d4052bba81e33daf261f24d8')
      .then(response => setlistCountries(response.data.symbols))
      .catch(error => console.log(error))
  }, [])

  const handleInput = e => {
    setInputValue(e.target.value)
  }

  const showSelect = () => {
    let form = document.querySelector('.form-add');
    if (form.classList.contains('hidden')) {
      form.classList.remove('hidden');
      form.classList.add('flex');
    } else {
      form.classList.remove('flex');
      form.classList.add('hidden');
    }
  }
  
  return (
    <>
      <div className="bg-blue-900 text-white p-10 flex flex-row flex-wrap">
        <div>
          <p>USD United States Dollars</p>
          <p className="text-lg font-semibold">USD</p>
        </div>

        <div className="flex flex-grow items-end justify-end">
          <input type="text" className='bg-transparent text-lg outline-none border-b border-gray-400 pb-2 focus:border-b-2' value={inputValue} onChange={handleInput} />
        </div>
      </div>

      <div className="mt-10 px-10">
      </div>
      <div className="mt-5 px-10 text-center">
        <button onClick={showSelect} className="add mx-auto bg-green-600 text-white px-5 py-2.5 rounded-md font-semibold">+ Add More Currencies</button>

        <div className="form-add hidden flex-flow flex-wrap justify-center mt-7">
          <select className='flex-grow border border-gray-200 rounded-l-md px-5 py-2.5'>
            {Object.entries(listCountries).map(([key, value]) => <option key={key} value={key}>{key} - {value}</option>)}
          </select>
          <button className="w-44 bg-green-600 text-white font-semibold rounded-r-md">Add</button>
        </div>
      </div>
    </>

  );
}

export default App;
