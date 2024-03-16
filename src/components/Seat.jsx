import { useDispatch } from "react-redux";
import { selectSeat } from "../app/reducers/roomSlice";

export default function Seat(props) {
    const {
        status,
        row, 
        position,
        price,
        selected
    } = props;

    const dispatch = useDispatch();

    //top-[calc(100%+0.5rem)]
    //z-index: 1
    //svg bottom: 100%     transform: rotate(180deg);

    const onSeatSelect = (seat, dispatch) => {
        if (status !== "predané") {
            dispatch(selectSeat(seat));
        }
    }

    return (
        <div onClick={(e) => onSeatSelect({status: status, row: row, position: position, selected: !selected}, dispatch)} className={`box-border group relative flex border-gray-500 w-8 h-8 border-4 ${status === "predané" ? 'bg-red-700' : ''} ${selected ? 'bg-red-300' : ''}`}>
            <div className="absolute bottom-[calc(100%+0.5rem)] left-[50%] -translate-x-[50%] hidden w-max group-hover:block">
                <div className="bottom-full right-0 rounded bg-black px-4 py-1 text-xs text-white whitespace-nowrap">
                    <div className="grid grid-cols-2 gap-x-2 justify-items-start">
                        <div>Stav:</div>
                        <div>{status}</div>
                        <div>Rad:</div>
                        <div>{row + 1}</div>
                        <div>Miesto:</div>
                        <div>{position + 1}</div>
                        <div>Cena:</div>
                        <div>{price} €</div>
                    </div>
                    <svg className="absolute left-0 top-full h-2 w-full text-black" x="0px" y="0px" viewBox="0 0 255 255" /*xml:space="preserve"*/><polygon className="fill-current" points="0,0 127.5,127.5 255,0" /></svg>
                </div>
            </div>
            <div className="m-auto text-xs">{position + 1}</div>
        </div>
    );
}