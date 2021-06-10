function MakeWheatherCard(){
    return (
        <div className="p-4">
            <div className ="w-96 h-56 m-auto bg-blue-500 rounded-xl shadow-2xl
            transform hover:scale-110 transition-transform
            text-white">
                <div className="flex flex-col w-full px-8 py-3">
                    <div className="flex justify-between">
                        <div className="flex flex-col ">
                            <span className="font-light">City Name</span>
                            <span className="text-lg font-medium tracking-widest">Tokyo</span>
                        </div>
                        <div>
                            Image
                        </div>
                    </div>
                    <div className="pt-3">
                        <div className="flex flex-col ">
                            <span className="font-light">Wheather Condition</span>
                            <span className="text-lg font-medium tracking-widest">Cloudy</span>
                        </div>
                    </div>
                    <div className="pt-3 flex justify-between">
                        <div className="flex flex-col">
                            <span className="font-light">Date</span>
                            <span className="font-medium tracking-widest text-xm">2021-06-10</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-light">Temprature</span>
                            <span className="text-xm font-medium tracking-widest">20℃</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-light">Humidity</span>
                            <span className="text-xm font-medium tracking-widest">20%</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MakeWheatherCard