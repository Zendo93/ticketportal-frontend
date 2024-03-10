import Event from "./Event";

export default function Events() {
    return (
        <div className="m-20 
            grid sm:grid-cols-2 
            min-[950px]:grid-cols-3 
            xl:grid-cols-4 2xl:grid-cols-5 
            gap-4 place-content-center">
            <Event />
            <Event />
            <Event />
            <Event />
            <Event />
            <Event />
        </div>
    ); 
}