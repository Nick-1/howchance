import axios from 'axios'

const removeItemService = async (id:string) => {
    try {
        const response = await axios.delete(`api/action/item/${id}`);
        return response.data
    } catch (error) {
        console.error(error);
    }
}

export default removeItemService