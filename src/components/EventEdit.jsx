import EventName from "./Inputs/EventName";
import Viewpoint from "./Inputs/Viewpoint";
import Address from "./Inputs/Address";
import Start from "./Inputs/Start";
import Price from "./Inputs/Price";
import RowNumber from "./Inputs/RowNumber";
import ColumnNumber from "./Inputs/ColumnNumber";
import CoverImage from "./Inputs/CoverImage";

export default function EventEdit() {
    return (
        <form className="w-full max-w-sm">
            <EventName />
            <Viewpoint />
            <Address />
            <Start />
            <Price />
            <RowNumber />
            <ColumnNumber />
            <CoverImage />
            <div className="md:flex md:items-center">
                <div className="md:w-1/4"></div>
                <div className="md:w-1/4 mt-1">
                    <button className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                        Uložiť
                    </button>
                </div>
                <div className="md:w-1/4 mt-1">
                    <button className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                        Vytvoriť
                    </button>
                </div>
            </div>
        </form>
    );
}