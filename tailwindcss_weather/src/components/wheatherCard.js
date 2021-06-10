import { useState, useEffect } from 'react';
import dayjs from 'dayjs';


function MakeWheatherCard({city_name, color_name}){
    const[data, setData] = useState([]);
    const[loading, setLoading] = useState(true);
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_OW_API_URL}/weather/?q=${city_name}&APPID=${process.env.REACT_APP_OW_API_KEY}&units=metric`)
        .then(res => res.json())
        .then(result => {
            console.log(result);
          setData(result);
          setLoading(false);
        });
      },[city_name]);
      if(loading){
          return <div>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
          </div>;
      }
    return (
        <div className="p-4">
            <div className={`bg-gradient-to-r from-${color_name}-500 to-${color_name}-300
                w-96 h-56 m-auto rounded-xl shadow-2xl 
                transform hover:scale-110 transition-transform
                text-white`}>
                <div className="flex flex-col w-full px-8 py-3">
                    <div className="flex justify-between">
                        <div className="flex flex-col ">
                            <span className="font-light">City Name</span>
                            <span className="text-lg font-medium tracking-widest">{data.name}</span>
                        </div>
                        <div>
                        <img src={`${process.env.REACT_APP_OW_ICON_URL}/${data.weather[0].icon}.png`} 
                             alt={data.weather[0].description}/>
                        </div>
                    </div>
                    <div className="pt-3">
                        <div className="flex flex-col ">
                            <span className="font-light">Wheather Condition</span>
                            <span className="text-lg font-medium tracking-widest"> { data.weather[0].main } </span>
                        </div>
                    </div>
                    <div className="pt-3 flex justify-between">
                        <div className="flex flex-col">
                            <span className="font-light">Date</span>
                            <span className="font-medium tracking-widest text-xm">{ dayjs(data.ts).format('YYYY-MM-DD')}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-light">Temprature</span>
                            <span className="text-xm font-medium tracking-widest">{data.main.temp}℃</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-light">Humidity</span>
                            <span className="text-xm font-medium tracking-widest">{data.main.humidity}%</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MakeWheatherCard