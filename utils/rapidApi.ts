export async function fetchCar(){
    const headers = {
        'X-Rapidapi-Host': 'cars-by-api-ninjas.p.rapidapi.com' ,
        'X-RapidAPI-Key': 'cc1f0be28bmsh0b16ace8fcb965ep1b2b64jsn40971b8f18fb'
    }

    const response = await fetch("https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",{
        headers
    });
    const result = await response.json();
    return result;
}