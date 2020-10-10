import axios from 'axios'

const createItemService = async (title:string, description: string, topic: string | null) => {
    try {
        const response = await axios.post(
            'api/action/item',
            {
                title, description, topic
            });
        return response.data
    } catch (error) {
        console.error(error);
    }
}

export default createItemService