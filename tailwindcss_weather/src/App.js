import logo from './logo.svg';
import './App.css';
import MakeWheatherCard from "./components/wheatherCard"
import Input from './components/input';

function App() {
  const cities = [
    {
      city_name: 'Tokyo',
      color_name: 'blue'
    },
    {
      city_name: 'London',
      color_name: 'yellow'
    },
    {
      city_name: 'Paris',
      color_name: 'green'
    }, 
    {
      city_name: 'Los Angeles',
      color_name: 'red'
    },
  ];
  return (

    <div className="flex flex-col items-center">
      <div className="my-3">
      <Input></Input>
      </div>
      <div className="min-h-screen flex justify-center items-center flex-wrap">
      {
        cities.map((city,index) =>
          <MakeWheatherCard
          key={index}
          city_name = {city.city_name}
          color_name = {city.color_name}  />
        )
      }
      </div>
      </div>
  );
}

export default App;
