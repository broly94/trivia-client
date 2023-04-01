import axios from '../../base.axios'

export const getCategories = async () => {
    try {
        return await axios.get('/api/categories')
    } catch (error) {
        console.log(error)
    }
}