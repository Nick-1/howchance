import axios from 'axios'

const getOneItemService = async (id:string) => {
    try {
        const response = await axios.get(`api/action/topic/${id}`);
        return response.data
    } catch (error) {
        console.error(error);
    }
}

export default getOneItemService