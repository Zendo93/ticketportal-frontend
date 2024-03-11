export default function RowNumber() {
    return (
        <>
            <div>
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-event-row-number">
                    Počet radov
                </label>
            </div>
            <div>
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="inline-event-row-number" type="number" value="5" />
            </div>
        </>
    );
}