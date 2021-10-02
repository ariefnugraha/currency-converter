import React from 'react';

const InputCurrencies = () => {
    return (
        <div className="bg-blue-900 text-white p-10 flex flex-row flex-wrap">
            <div>
                <p>USD United States Dollars</p>
                <p className="text-lg font-semibold">USD</p>
            </div>

            <div className="flex flex-grow items-end justify-end">
                <input type="text" className='bg-transparent text-lg outline-none border-b border-gray-400 pb-2 focus:border-b-2' value="10.000" />
            </div>
        </div>
    )
}

export default InputCurrencies