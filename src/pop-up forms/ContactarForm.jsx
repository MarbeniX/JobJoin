export default function ContactarForm(){
    const isVisible = true;
    const body="¿Deseas contactar a este trabajador?";
    const title="Contactar";

    return(
        <div
            className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${
                isVisible ? "opacity-100" : "opacity-0"
            }`}
        >
            <form
                className={`bg-white max-w-lg w-full rounded-xl overflow-hidden transform transition-transform duration-300 ${
                    isVisible ? "scale-100" : "scale-95"
                }`}
            >
                <div className="bg-levu-cal-green p-4 text-center text-white font-bold border-levu-dun text-2xl ">
                    <h1>{title}</h1>
                </div>

                <div
                    className="p-8 pb-0 text-center text-gray-500 font-semibold"
                    style={{ whiteSpace: "pre-wrap" }}
                >
                    <p>{body}</p>
                </div>
                <div className="flex flex-col items-center py-6">
                    <button
                        type="button"
                        className="bg-levu-cal-green rounded-full text-white font-bold py-2 px-4 mb-4"
                    >
                        Got it
                    </button>
                    <div className="flex items-center justify-center">
                        <input type="checkbox" />
                        <label className="ml-2">Don&apos;t show again</label>
                    </div>
                </div>
            </form>
        </div>
    )
}