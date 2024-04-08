
export const fetchWeather = async (city) => {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=cf6cae627141447e9e6113102230410&q=${city}`);
        
        if (!response.ok) {
            throw new Error(`Failed to fetch weather data: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
       
   
        return data; 
    } catch (error) {
        console.error('Error fetching data:', error);
        alert('Failed to fetch weather data');
        return null; 
    } finally {

    }
};
fetchWeather("pune");