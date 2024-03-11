import Event from "./Event";
import { useSelector} from 'react-redux'

export default function Events() {
    const events = useSelector(state => state.events.value);

    return (
        <div className="m-20 
            grid sm:grid-cols-2 
            min-[950px]:grid-cols-3 
            xl:grid-cols-4 2xl:grid-cols-5 
            gap-4 place-content-center">
            {events.map(event => <Event key={event.id} {...event} />)}
        </div>
    ); 
}