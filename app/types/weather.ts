


export type OpenWeatherMapResponse = {
  
  weather: [
    {
      main: string;
      description: string;
    },
  ];
  main: {
    temp: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
  };
  
  wind: {
    speed: number;
    deg: number;
  };
  sys: {
    sunrise: number;
    sunset: number;
  };
 
};




