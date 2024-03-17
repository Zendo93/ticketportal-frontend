import { createEvent } from "../../app/reducers/eventsSlice";
import { setAddress, setColumnNumber, setCoverImage, setName, setPrice, setRowNumber, setStart, setViewpoint } from "../../app/reducers/editedEventSlice";
import { updateEvent } from "../../app/reducers/eventsSlice";
import { setOpen } from "../../app/reducers/shoppingCartSlice";

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

export function onRowNumberChangeHandler(e, dispatch) {
    dispatch(setRowNumber(e.target.value));
}

export function onColumnNumberChangeHandler(e, dispatch) {
    dispatch(setColumnNumber(e.target.value));
}

export function onSaveHandler(_, dispatch, navigate, event) {
    dispatch(updateEvent(event));
    navigate('/');
}

export function onCreateHandler(_, dispatch, navigate, event) {
    dispatch(createEvent(event));
    navigate('/');
}

export function onShoppingCartOpenHandler(open, dispatch) {
    dispatch(setOpen(open));
}

export function onShoppingCartCloseHandler(close, dispatch) {
    dispatch(setOpen(close));
}

export function getItems(selectedSeats, coverImage) {
    return selectedSeats.map(selectedSeat => {
        return {
            position: selectedSeat.position + 1,
            row: selectedSeat.row + 1, 
            price: selectedSeat.price,
            coverImage: coverImage 
        };
    });
}