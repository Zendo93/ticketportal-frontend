import { setSeats } from "../../app/reducers/roomSlice";
import Seat from "../Seat";
import { useDispatch, useSelector } from "react-redux";
import { createSeats } from "./utility";
import { useEffect } from "react";

export default function Room() {
    const rowNumber = useSelector(state => state.editedEvent.rowNumber);
    const columnNumber = useSelector(state => state.editedEvent.columnNumber);
    const seats = useSelector(state => state.room.seats);
    const dispatch = useDispatch();
    
    
    const getSeats = (seatsData) => {
        const seats = [];
        for (let i=0; i < seatsData.length; i++) {
            for (let j=0; j < seatsData[i].length; j++) {
                seats.push(<Seat {...seatsData[i][j]} />)
            }
        }

        return seats;
    }


    useEffect(() => {
        dispatch(setSeats(createSeats(rowNumber, columnNumber)));
        return () => {};
    },[rowNumber, columnNumber])

    return (
        <div className="m-2.5 overflow-auto">
            <hr class="mx-[60px] h-1 sm:mx-auto my-4 bg-gray-500 border-0 rounded md:my-10 dark:bg-gray-700"
                style={{width: `${Math.round(((50 - 10) / 12) * columnNumber + 10)}rem`}}/>
            <div className="ml-[40%] w-max sm:ml-auto sm:w-auto"> 
                <div style={{ gridTemplateColumns: `repeat(${columnNumber}, minmax(0, 1fr))`}} className={`grid m-auto w-max gap-4`}>
                    {getSeats(seats)}
                </div>
            </div>
        </div>
    );
}