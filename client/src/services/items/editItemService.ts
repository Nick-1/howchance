import axios from 'axios'

const editItemService = async (data: any, id: string) => {
    try {
        const response = await axios.put(
            `api/action/item/${id}`, data);
        return response.data
    } catch (error) {
        console.error(error);
    }
}

export default editItemService