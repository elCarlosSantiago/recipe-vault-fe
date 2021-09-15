import axios from 'axios';

const axiosWithAuth = () => {
  const token = JSON.parse(localStorage.getItem('token'));

  return axios.create({
    baseURL: process.env.REACT_APP_API_URI,
    headers: {
      Authorization: token,
    },
  });
};

export default axiosWithAuth;
