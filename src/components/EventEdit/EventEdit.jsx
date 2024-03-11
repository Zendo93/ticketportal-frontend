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
import { onAddressChangeHandler, onCoverImageChangeHandler, onNameChangeHandler, onPriceChangeHandler, onSaveHandler, onStartChangeHandler, onViewpointChangeHandler } from "./utility";

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
    const editedEvent = useSelector(state => state.editedEvent);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setEditedEvent(event));
        return () => {};
    },[])

    return (
        <div className="max-w-md p-4 mx-auto">
            <form className="full grid sm:grid-cols-2 gap-4 gap-x-10">
                <EventName onNameChangeHandler={onNameChangeHandler}  name={name} />
                <Viewpoint onViewpointChangeHandler={onViewpointChangeHandler} viewpoint={viewpoint} />
                <Address onAddressChangeHandler={onAddressChangeHandler} address={address} />
                <Start onStartChangeHandler={onStartChangeHandler} start={start} />
                <Price onPriceChangeHandler={onPriceChangeHandler} price={price} />
                {/*<RowNumber />
                <ColumnNumber />*/}
                <CoverImage onCoverImageChangeHandler={onCoverImageChangeHandler} coverImage={coverImage} />
                <SaveButton event={editedEvent} onSaveHandler={onSaveHandler}/>
                <CreateButton />
            </form>
        </div>
    );
}