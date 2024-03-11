import EventName from "./Inputs/EventName";
import Viewpoint from "./Inputs/Viewpoint";
import Address from "./Inputs/Address";
import Start from "./Inputs/Start";
import Price from "./Inputs/Price";
import RowNumber from "./Inputs/RowNumber";
import ColumnNumber from "./Inputs/ColumnNumber";
import CoverImage from "./Inputs/CoverImage";
import {
    useParams
  } from "react-router-dom";

export default function EventEdit() {
    const params = useParams();

    return (
        <div className="max-w-md p-4 mx-auto">
            <form className="full grid sm:grid-cols-2 gap-4 gap-x-10">
                <EventName />
                <Viewpoint />
                <Address />
                <Start />
                <Price />
                <RowNumber />
                <ColumnNumber />
                <CoverImage />
                <div>
                    <div>
                        <button className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                            Uložiť
                        </button>
                    </div>
                </div>
                <div>
                    <div>
                        <button className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                            Vytvoriť
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}