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
import { onAddressChangeHandler, onColumnNumberChangeHandler, onCoverImageChangeHandler, onCreateHandler, onNameChangeHandler, onPriceChangeHandler, onRowNumberChangeHandler, onSaveHandler, onStartChangeHandler, onViewpointChangeHandler } from "./utility";

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
                <RowNumber onRowNumberChangeHandler={onRowNumberChangeHandler} rowNumber={rowNumber}/>
                <ColumnNumber onColumnNumberChangeHandler={onColumnNumberChangeHandler} columnNumber={columnNumber}/>
                <CoverImage onCoverImageChangeHandler={onCoverImageChangeHandler} coverImage={coverImage} />
                <SaveButton event={editedEvent} onSaveHandler={onSaveHandler} />
                <CreateButton event={editedEvent} onCreateHandler={onCreateHandler} />
            </form>
            <div>
                <hr class="w-100 h-1 mx-auto my-4 bg-gray-500 border-0 rounded md:my-10 dark:bg-gray-700" />
                <div className="inline-flex flex-wrap justify-between">
                    <div class="box-border group relative flex border-gray-500 h-16 w-16 p-4 border-4 my-2">
                        <div class="absolute bottom-[calc(100%+0.5rem)] left-[50%] -translate-x-[50%] hidden group-hover:block w-auto">
                            <div class="bottom-full right-0 rounded bg-black px-4 py-1 text-xs text-white whitespace-nowrap">
                                Tooltip center
                                <svg class="absolute left-0 top-full h-2 w-full text-black" x="0px" y="0px" viewBox="0 0 255 255" /*xml:space="preserve"*/><polygon class="fill-current" points="0,0 127.5,127.5 255,0" /></svg>
                            </div>
                        </div>
                        <div class="m-auto">5</div>
                    </div>
                    <div class="box-border group relative flex border-gray-500 h-16 w-16 p-4 border-4 my-2">
                        <div class="absolute bottom-[calc(100%+0.5rem)] left-[50%] -translate-x-[50%] hidden group-hover:block w-auto">
                            <div class="bottom-full right-0 rounded bg-black px-4 py-1 text-xs text-white whitespace-nowrap">
                                Tooltip center
                                <svg class="absolute left-0 top-full h-2 w-full text-black" x="0px" y="0px" viewBox="0 0 255 255" /*xml:space="preserve"*/><polygon class="fill-current" points="0,0 127.5,127.5 255,0" /></svg>
                            </div>
                        </div>
                        <div class="m-auto">5</div>
                    </div>
                    <div class="box-border group relative flex border-gray-500 h-16 w-16 p-4 border-4 my-2">
                        <div class="absolute bottom-[calc(100%+0.5rem)] left-[50%] -translate-x-[50%] hidden group-hover:block w-auto">
                            <div class="bottom-full right-0 rounded bg-black px-4 py-1 text-xs text-white whitespace-nowrap">
                                Tooltip center
                                <svg class="absolute left-0 top-full h-2 w-full text-black" x="0px" y="0px" viewBox="0 0 255 255" /*xml:space="preserve"*/><polygon class="fill-current" points="0,0 127.5,127.5 255,0" /></svg>
                            </div>
                        </div>
                        <div class="m-auto">5</div>
                    </div>
                    <div class="box-border group relative flex border-gray-500 h-16 w-16 p-4 border-4 my-2">
                        <div class="absolute bottom-[calc(100%+0.5rem)] left-[50%] -translate-x-[50%] hidden group-hover:block w-auto">
                            <div class="bottom-full right-0 rounded bg-black px-4 py-1 text-xs text-white whitespace-nowrap">
                                Tooltip center
                                <svg class="absolute left-0 top-full h-2 w-full text-black" x="0px" y="0px" viewBox="0 0 255 255" /*xml:space="preserve"*/><polygon class="fill-current" points="0,0 127.5,127.5 255,0" /></svg>
                            </div>
                        </div>
                        <div class="m-auto">5</div>
                    </div>
                    <div class="box-border group relative flex border-gray-500 h-16 w-16 p-4 border-4 my-2">
                        <div class="absolute bottom-[calc(100%+0.5rem)] left-[50%] -translate-x-[50%] hidden group-hover:block w-auto">
                            <div class="bottom-full right-0 rounded bg-black px-4 py-1 text-xs text-white whitespace-nowrap">
                                Tooltip center
                                <svg class="absolute left-0 top-full h-2 w-full text-black" x="0px" y="0px" viewBox="0 0 255 255" /*xml:space="preserve"*/><polygon class="fill-current" points="0,0 127.5,127.5 255,0" /></svg>
                            </div>
                        </div>
                        <div class="m-auto">5</div>
                    </div>
                    <div class="box-border group relative flex border-gray-500 h-16 w-16 p-4 border-4 my-2">
                        <div class="absolute bottom-[calc(100%+0.5rem)] left-[50%] -translate-x-[50%] hidden group-hover:block w-auto">
                            <div class="bottom-full right-0 rounded bg-black px-4 py-1 text-xs text-white whitespace-nowrap">
                                Tooltip center
                                <svg class="absolute left-0 top-full h-2 w-full text-black" x="0px" y="0px" viewBox="0 0 255 255" /*xml:space="preserve"*/><polygon class="fill-current" points="0,0 127.5,127.5 255,0" /></svg>
                            </div>
                        </div>
                        <div class="m-auto">5</div>
                    </div>
                    <div class="box-border group relative flex border-gray-500 h-16 w-16 p-4 border-4 my-2">
                        <div class="absolute bottom-[calc(100%+0.5rem)] left-[50%] -translate-x-[50%] hidden group-hover:block w-auto">
                            <div class="bottom-full right-0 rounded bg-black px-4 py-1 text-xs text-white whitespace-nowrap">
                                Tooltip center
                                <svg class="absolute left-0 top-full h-2 w-full text-black" x="0px" y="0px" viewBox="0 0 255 255" /*xml:space="preserve"*/><polygon class="fill-current" points="0,0 127.5,127.5 255,0" /></svg>
                            </div>
                        </div>
                        <div class="m-auto">5</div>
                    </div>
                </div>
            </div>
        </div>
    );
}