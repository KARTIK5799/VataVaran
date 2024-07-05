import { useState, useEffect, useCallback } from 'react';
import { useWeatherContext } from '../../WeatherDataContext';
import { TextField, IconButton, InputAdornment, Box, Autocomplete } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import debounce from 'lodash/debounce'; 

const SearchForm = () => {
  const { setCity, addSearchedCity } = useWeatherContext();
  const [cityInput, setCityInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);

  const fetchSuggestions = useCallback(
    debounce(async (query) => {
      if (query.length > 2) {
        try {
          const response = await fetch(`https://api.api-ninjas.com/v1/city?name=${query}`, {
            headers: {
              'X-Api-Key': 'dkBHqH/6kP0llrSMWpX7bg==D4e3ntWX1KDKte8o'
            }
          });
          const data = await response.json();
          setSuggestions(data.slice(0, 3)); 
        } catch (error) {
          console.error('Error fetching suggestions:', error);
        }
      } else {
        setSuggestions([]);
      }
    }, 300), 
    []
  );

  useEffect(() => {
    fetchSuggestions(cityInput);
  }, [cityInput, fetchSuggestions]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedCity) {
      setCity(selectedCity.name);
      addSearchedCity(selectedCity.name); 
    }
  };

  const handleChange = (e) => {
    setCityInput(e.target.value);
  };

  const handleSelect = (event, newValue) => {
    const city = suggestions.find(option => option.name === newValue);
    setSelectedCity(city || null);
  };

  return (
    <Box
      sx={{
        width: '100vw',
        height: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mt: 4,
      }}
    >
      <form onSubmit={handleSubmit} style={{ width: '60%', height: 'auto' }}>
        <Autocomplete
          freeSolo
          options={suggestions.map(option => option.name)}
          value={selectedCity ? selectedCity.name : cityInput}
          onChange={handleSelect}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              placeholder="Search wanted city"
              fullWidth
              value={cityInput}
              onChange={handleChange}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton type="submit">
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
                sx: {
                  backgroundColor: 'rgba(255, 255, 255, 0.25)',
                  borderRadius: '100px',
                  boxShadow: '0 8px 32px 0 rgba(24, 27, 71, 0.37)',
                  backdropFilter: 'blur(5.5px)',
                  WebkitBackdropFilter: 'blur(5.5px)',
                  border: '1px solid rgba(255, 255, 255, 0.18)',
                },
              }}
              sx={{
                '& .MuiInputBase-input': {
                  fontSize: '22px',
                  color: 'rgb(222, 216, 216)',
                  padding: '20px 20px',
                },
                '& .MuiInputBase-input::placeholder': {
                  color: 'rgb(139, 135, 135)',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    border: 'none',
                  },
                },
              }}
            />
          )}
        />
      </form>
    </Box>
  );
};

export default SearchForm;
