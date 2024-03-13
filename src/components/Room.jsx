import Seat from "./Seat";

export default function Room() {
    return (
        <div>
            <hr class="w-100 h-1 mx-auto my-4 bg-gray-500 border-0 rounded md:my-10 dark:bg-gray-700" />
            <div className="inline-flex flex-wrap justify-between">
                <Seat />
                <Seat />
                <Seat />
                <Seat />
                <Seat />
                <Seat />
                <Seat />
                <Seat />
                <Seat />
                <Seat />
                <Seat />
            </div>
        </div>
    );
}