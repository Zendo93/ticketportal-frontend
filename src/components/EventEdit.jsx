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
import SaveButton from "./Buttons/SaveButton";
import CreateButton from "./Buttons/CreateButton";
import { useSelector } from "react-redux";

export default function EventEdit() {
    const {id} = useParams();
    const events = useSelector(state => state.events.value);
    const event = events.find(event => event.id == id);

    return (
        <div className="max-w-md p-4 mx-auto">
            <form className="full grid sm:grid-cols-2 gap-4 gap-x-10">
                <EventName  name={event.name} />
                <Viewpoint viewpoint={event.viewpoint} />
                <Address address={event.address} />
                <Start start={event.start} />
                <Price price={event.price} />
                <RowNumber />
                <ColumnNumber />
                <CoverImage coverImage={event.coverImage} />
                <SaveButton />
                <CreateButton />
            </form>
        </div>
    );
}