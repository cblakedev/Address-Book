import apiHelper from '../../utils/helper';

export default {
    getAllPeople(url) {
        return apiHelper.http(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
    },
    getContactByID(url) {
        return apiHelper.http(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}