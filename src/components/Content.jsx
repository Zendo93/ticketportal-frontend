import Event from "./Event";
import EventEdit from "./EventEdit";
import Events from "./Events";

export default function Content() {
    return (
        <main className="h-full">
            {/*<Events />*/}
            <div className="max-w-sm p-4 mx-auto">
                <EventEdit />
            </div>
        </main>
    );
}