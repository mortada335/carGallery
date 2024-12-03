import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000' // your backend URL

export default axios

const fetchCars = async () => {
        try {
            const response = await axios.get('/cars')
            storeToRefs.SET_CARS(response.data)
        } catch (error) {
            console.error('Error fetching cars:', error)
           
        }
}