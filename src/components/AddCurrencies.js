import React, {useEffect, useState} from 'react';
import axios from 'axios';

const AddCurrencies = () => {
    const [listCountries, setlistCountries] = useState([]);

    useEffect(() => {
        axios.get('http://api.exchangeratesapi.io/v1/symbols?access_key=b503a519d4052bba81e33daf261f24d8')
        .then(response => setlistCountries(response.data.symbols))
        .catch(error => console.log(error))
    }, [])

    return (
        <div className="mt-5 px-10 text-center">
            <button className="add mx-auto bg-green-600 text-white px-5 py-2.5 rounded-md font-semibold">+ Add More Currencies</button>
            <div className="form-add flex flex-flow flex-wrap justify-center">
                <select className='flex-grow border border-gray-200 rounded-l-md px-5 py-2.5'>
                    {Object.entries(listCountries).map(([key, value]) => <option key={key} value={key}>{key} - {value}</option>)}
                </select>
                <button className="w-44 bg-green-600 text-white font-semibold rounded-r-md">Add</button>
            </div>
        </div>
    )
}

export default AddCurrencies;