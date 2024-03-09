export default function Event() {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg" src="media.jpg" alt="" />
            </a>
            <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Názov</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Hladisko</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Adresa</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Zaciatok</p>
                <a href="#" class="inline-flex font-medium items-center text-blue-600 hover:underline">
                    Link na editáciu
                    <svg class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
                    </svg>
                </a>
            </div>
        </div>
    );
}