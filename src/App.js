import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [listCountries, setlistCountries] = useState([]);
  const [inputValue, setInputValue] = useState(1000)
  const [inputCurrency, setInputCurrency] = useState({symbol: 'AED', name: 'United Arab Emirates Dirham'})
  const [convertList, setconvertList] = useState([])

  useEffect(() => {
    axios.get('http://api.exchangeratesapi.io/v1/symbols?access_key=b503a519d4052bba81e33daf261f24d8')
      .then(response => setlistCountries(response.data.symbols))
      .catch(error => console.log(error))
  }, [])

  const handleInput = e => {
    let value = e.target.value;
    let regex = /\D/g;
    
    if(!regex.test(value)) {
      setInputValue(value)
    }
  }

  const handleInputCurrency = e => {
    let value = e.target.value;
    let selectedText = e.target.selectedOptions[0].text.split(' ').slice(2).join(' ');

    setInputCurrency({symbol: value, name: selectedText})
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

  const handleAddCurrency = event => {
    let value = event.target.value;
  }

  return (
    <>
      <div className="bg-blue-900 text-white p-10 flex flex-row flex-wrap">
        <div>
          <p>{inputCurrency.name}</p>
          <select onChange={handleInputCurrency} className="bg-transparent border-b border-white outline-none mt-2.5 pb-2.5 text-lg font-semibold">
            {Object.entries(listCountries).map(([key, value]) => <option className="text-blue-900" key={key} value={key}>{key} - {value}</option>)}
          </select>
        </div>

        <div className="flex flex-grow items-end justify-end">
          <input type="text" className='bg-transparent text-lg outline-none border-b border-white pb-2.5 focus:border-b-2 font-semibold' value={inputValue} onChange={handleInput} />
        </div>
      </div>

      <div className="mt-10 px-10">
      </div>

      <div className="mt-5 px-10 text-center">
        <button onClick={showSelect} className="add mx-auto bg-green-600 text-white px-5 py-2.5 rounded-md font-semibold hover:bg-blue-900 transition duration-300">+ Add New Currencies</button>

        <form onSubmit={handleAddCurrency} className="form-add hidden flex-flow flex-wrap justify-center mt-7">
          <select className='flex-grow border border-gray-200 rounded-l-md px-5 py-2.5 outline-none'>
            {Object.entries(listCountries).map(([key, value]) => <option key={key} value={key}>{value}</option>)}
          </select>
          <button type="submit" className="w-44 bg-green-600 text-white font-semibold rounded-r-md hover:bg-blue-900 transition duration-300">Add</button>
        </form>
      </div>
    </>

  );
}

export default App;
