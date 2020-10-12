import axios from 'axios'

const createItemService = async (data: any) => {
    try {
        const response = await axios.post(
            'api/action/item', data);
        return response.data
    } catch (error) {
        console.error(error);
    }
}

export default createItemService