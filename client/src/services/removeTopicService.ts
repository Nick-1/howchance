import axios from 'axios'

const removeTopicService = async (id:string) => {
    try {
        const response = await axios.delete(`api/action/topic/${id}`);
        return response.data
    } catch (error) {
        console.error(error);
    }
}

export default removeTopicService