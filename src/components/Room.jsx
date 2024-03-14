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
        <div>
            <hr class="w-100 h-1 mx-auto my-4 bg-gray-500 border-0 rounded md:my-10 dark:bg-gray-700" />
            <div style={{ gridTemplateColumns: `repeat(${columnNumber}, minmax(0, 1fr))`}} className={`grid m-auto w-max gap-4`}>
                {getSeats(rowNumber*columnNumber)}
            </div>
        </div>
    );
}