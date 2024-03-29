import EventName from "../Inputs/EventName";
import Viewpoint from "../Inputs/Viewpoint";
import Address from "../Inputs/Address";
import Start from "../Inputs/Start";
import Price from "../Inputs/Price";
import RowNumber from "../Inputs/RowNumber";
import ColumnNumber from "../Inputs/ColumnNumber";
import CoverImage from "../Inputs/CoverImage";
import {
    useParams
  } from "react-router-dom";
import SaveButton from "../Buttons/SaveButton";
import CreateButton from "../Buttons/CreateButton";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setEditedEvent } from "../../app/reducers/editedEventSlice";
import { getItems, onAddressChangeHandler, onColumnNumberChangeHandler, onCoverImageChangeHandler, onCreateHandler, onNameChangeHandler, onPriceChangeHandler, onRowNumberChangeHandler, onSaveHandler, onShoppingCartCloseHandler, onShoppingCartOpenHandler, onStartChangeHandler, onViewpointChangeHandler } from "./utility";
import Room from "../Room/Room";
import { ShoppingCartIcon } from "../ShoppingCart/ShoppingCartIcon";
import { getSelectedSeats } from "../../app/reducers/roomSlice";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

export default function EventEdit() {
    const {id} = useParams();
    const events = useSelector(state => state.events.value);
    const event = events.find(event => event.id == id);
    const name = useSelector(state => state.editedEvent.name);
    const address = useSelector(state => state.editedEvent.address)
    const viewpoint = useSelector(state => state.editedEvent.viewpoint);
    const start = useSelector(state => state.editedEvent.start);
    const price = useSelector(state => state.editedEvent.price);
    const coverImage = useSelector(state => state.editedEvent.coverImage);
    const rowNumber = useSelector(state => state.editedEvent.rowNumber);
    const columnNumber = useSelector(state => state.editedEvent.columnNumber);
    const editedEvent = useSelector(state => state.editedEvent);
    const isShoppingCardOpen = useSelector(state => state.shoppingCart.open);
    const selectedSeats = useSelector(getSelectedSeats);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setEditedEvent(event));
        return () => {};
    },[])

    return (
        <>
        <div className="max-w-md p-4 mx-auto">
            <form className="full grid sm:grid-cols-2 gap-4 gap-x-10">
                <EventName onNameChangeHandler={onNameChangeHandler}  name={name} />
                <Viewpoint onViewpointChangeHandler={onViewpointChangeHandler} viewpoint={viewpoint} />
                <Address onAddressChangeHandler={onAddressChangeHandler} address={address} />
                <Start onStartChangeHandler={onStartChangeHandler} start={start} />
                <Price onPriceChangeHandler={onPriceChangeHandler} price={price} />
                <RowNumber onRowNumberChangeHandler={onRowNumberChangeHandler} rowNumber={rowNumber}/>
                <ColumnNumber onColumnNumberChangeHandler={onColumnNumberChangeHandler} columnNumber={columnNumber}/>
                <CoverImage onCoverImageChangeHandler={onCoverImageChangeHandler} coverImage={coverImage} />
                <SaveButton event={editedEvent} onSaveHandler={onSaveHandler} />
                <CreateButton event={editedEvent} onCreateHandler={onCreateHandler} />
            </form>
        </div>
        <div className="m-2.5 mx-auto w-fit">
            <ShoppingCartIcon onShoppingCartOpenHandler={onShoppingCartOpenHandler} count={selectedSeats.length} />
            {isShoppingCardOpen && <ShoppingCart onShoppingCartCloseHandler={onShoppingCartCloseHandler} items={getItems(selectedSeats, coverImage)} />}
        </div>
        <Room />
        </>
    );
}