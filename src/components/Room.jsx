import Seat from "./Seat";
import { useSelector } from "react-redux";

export default function Room() {
    const rowNumber = useSelector(state => state.editedEvent.rowNumber);
    const columnNumber = useSelector(state => state.editedEvent.columnNumber);

    const getSeats = (count) => {
        const seats = [];

        for (let i=1; i <= count; i++) {
            seats.push(<Seat seatNumber={i} />)
        }

        return seats;
    }

    return (
        <div className="m-2.5 overflow-auto">
            <hr class="mx-[60px] h-1 sm:mx-auto my-4 bg-gray-500 border-0 rounded md:my-10 dark:bg-gray-700"
                style={{width: `${Math.round(((50 - 10) / 12) * columnNumber + 10)}rem`}}/>
            <div className="ml-[44%] w-max sm:ml-auto sm:w-auto"> 
                <div style={{ gridTemplateColumns: `repeat(${columnNumber}, minmax(0, 1fr))`}} className={`grid m-auto w-max gap-4`}>
                    {getSeats(rowNumber*columnNumber)}
                </div>
            </div>
        </div>
    );
}