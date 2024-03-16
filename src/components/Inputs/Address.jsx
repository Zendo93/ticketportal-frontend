import { useDispatch } from "react-redux";

export default function Address(props) {
    const {address,
            onAddressChangeHandler} = props;
    const dispatch = useDispatch();

    return (
        <>
            <div>
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-event-address">
                    Adresa
                </label>
            </div>
            <div>
                <input onChange={(e) => onAddressChangeHandler(e, dispatch)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="inline-event-address" type="text" value={address} />
            </div>
        </>
    );
}