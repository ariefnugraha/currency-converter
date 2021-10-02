const CurrenciesResult = () => {
    return (
        <div className="bg-white rounded-md p-5 flex flex-flow flex-wrap justify-between space-x-5">
            <div className="flex-grow">
                <div className="flex flex-flow flex-wrap justify-between text-xl font-semibold">
                    <p>IDR</p>
                    <p>10.000.000</p>
                </div>
                <p className="font-semibold my-1">IDR - Indonesia Rupiah</p>
                <p>1 USD = IDR 14.325,12</p>
            </div>
            <button className="bg-red-700 text-white text-lg font-semibold px-10">-</button>
        </div>
    )
}

export default CurrenciesResult;