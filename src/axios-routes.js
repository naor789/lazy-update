import { axios } from 'axios';

export const baseURL = 'http://localhost:5000';

const newTrip = newtrip => {
	axios.post(`${baseURL}/api/newtrip`, newtrip);
};

export default newTrip;
