const AddCurrencies = () => {
    return (
        <div className="mt-5 px-10 text-center">
            <button className="add mx-auto bg-green-600 text-white px-5 py-2.5 rounded-md font-semibold">+ Add More Currencies</button>
            <div className="form-add flex flex-flow flex-wrap justify-center">
                <input type="text" className='flex-grow border border-gray-200 rounded-l-md px-5 py-2.5' placeholder="JPY, IDR" />
                <button className="w-44 bg-green-600 text-white font-semibold rounded-r-md">Add</button>
            </div>
        </div>
    )
}

export default AddCurrencies;