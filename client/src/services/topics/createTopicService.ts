import axios from 'axios'

const createTopicService = async (title:string) => {
    try {
        const response = await axios.post(
            'api/action/topic',
            {
                title
            });
        return response.data
    } catch (error) {
        console.error(error);
    }
}

export default createTopicService