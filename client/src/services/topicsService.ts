import axios from 'axios'

export default {
    create: async (title: string) => {
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
    },
    topicList: async () => {
        try {
            const response = await axios.get('api/action/topic');
            return response.data
        } catch (error) {
            console.error(error);
        }
    },
    remove: async (id: string) => {
        try {
            const response = await axios.delete(`api/action/topic/${id}`);
            return response.data
        } catch (error) {
            console.error(error);
        }
    }
}
