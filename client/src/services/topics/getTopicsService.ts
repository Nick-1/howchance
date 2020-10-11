import axios from 'axios'

const getTopicsService = async () => {
    try {
        const response = await axios.get('api/action/topic');
        return response.data
    } catch (error) {
        console.error(error);
    }
}


export default getTopicsService