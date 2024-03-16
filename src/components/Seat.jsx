export default function Seat(props) {
    const { seatNumber} = props;

    //top-[calc(100%+0.5rem)]
    //z-index: 1
    //svg bottom: 100%     transform: rotate(180deg);

    return (
        <div class="box-border group relative flex border-gray-500 w-8 h-8 border-4">
            <div class="absolute bottom-[calc(100%+0.5rem)] left-[50%] -translate-x-[50%] hidden w-max group-hover:block">
                <div class="bottom-full right-0 rounded bg-black px-4 py-1 text-xs text-white whitespace-nowrap">
                    <div class="grid grid-cols-2 gap-x-2 justify-items-start">
                        <div>Stav:</div>
                        <div>predané</div>
                        <div>Rad:</div>
                        <div>1</div>
                        <div>Miesto:</div>
                        <div>3</div>
                        <div>Cena:</div>
                        <div>5 €</div>
                    </div>
                    <svg class="absolute left-0 top-full h-2 w-full text-black" x="0px" y="0px" viewBox="0 0 255 255" /*xml:space="preserve"*/><polygon class="fill-current" points="0,0 127.5,127.5 255,0" /></svg>
                </div>
            </div>
            <div class="m-auto text-xs">{seatNumber}</div>
        </div>
    );
}