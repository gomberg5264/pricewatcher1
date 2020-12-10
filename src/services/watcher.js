import axios from 'axios';
const baseUrl = 'http://localhost:5000/api/user';
const watcherbaseUrl = 'http://localhost:5000/api/watcher';

let token = null;

let config = {
  headers: { Authorization: token },
};

const setToken = (newToken) => {
  token = `bearer ${newToken}`;
  // console.log(token)
  config = {
    headers: { Authorization: token },
  };
};

const getWatchers = async () => {
  // console.log(token,config)
  const res = await axios.get(baseUrl, config);
  console.log(res.data);
  return res.data;
};

const addWatcher = async (newWatcher) => {
  const res = await axios.post(watcherbaseUrl, newWatcher, config);

  return res.data;
};

const deleteWatcher = async (id) => {
  const res = await axios.delete(`${watcherbaseUrl}/${id}`, config);

  return res.data;
};

export default { setToken, getWatchers, addWatcher, deleteWatcher };
