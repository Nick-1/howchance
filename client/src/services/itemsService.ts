import axios from 'axios'


export default {
    create: async (data: any) => {
        try {
            const response = await axios.post(
                'api/action/item', data);
            return response.data
        } catch (error) {
            console.error(error);
        }
    },
    edit: async (data: any, id: string) => {
        try {
            const response = await axios.put(
                `api/action/item/${id}`, data);
            return response.data
        } catch (error) {
            console.error(error);
        }
    },
    itemList: async (id: string) => {
        try {
            const response = await axios.get(`api/action/item/topic_id/${id}`);
            return response.data
        } catch (error) {
            console.error(error);
        }
    },
    item: async (id: string) => {
        try {
            const response = await axios.get(`api/action/item/topic_id/${id}`);
            return response.data
        } catch (error) {
            console.error(error);
        }
    },
    remove: async (id: string) => {
        try {
            const response = await axios.delete(`api/action/item/${id}`);
            return response.data
        } catch (error) {
            console.error(error);
        }
    }
}