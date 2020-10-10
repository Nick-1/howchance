import axios from 'axios'

const getItemsService = async (id:string) => {
    try {
        const response = await axios.get(`api/action/item/topic_id/${id}`);
        return response.data
    } catch (error) {
        console.error(error);
    }
}

export default getItemsService