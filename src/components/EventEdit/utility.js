import { setAddress, setCoverImage, setName, setPrice, setStart, setViewpoint } from "../../app/reducers/editedEventSlice";
import { updateEvent } from "../../app/reducers/eventsSlice";

export function onNameChangeHandler(e, dispatch) {
    dispatch(setName(e.target.value));
}

export function onViewpointChangeHandler(e, dispatch) {
    dispatch(setViewpoint(e.target.value));
}

export function onAddressChangeHandler(e, dispatch) {
    dispatch(setAddress(e.target.value));
}

export function onStartChangeHandler(e, dispatch) {
    dispatch(setStart(e.target.value));
}

export function onPriceChangeHandler(e, dispatch) {
    dispatch(setPrice(e.target.value));
}

export function onCoverImageChangeHandler(e, dispatch) {
    if (e.target.files?.[0]?.type?.split('/')?.[0] === 'image') {
        dispatch(setCoverImage(URL.createObjectURL(e.target.files[0])));
    }
}

export function onSaveHandler(_, dispatch, navigate, event) {
    dispatch(updateEvent(event));
    navigate('/');
}