import axios from 'axios'
import secretConfig from '../private/const';

const apiUrl = 'http://localhost:3001';
const config = {
  url: '',
  params: {},
  data: {},
}
axios.defaults.headers = {
  'Content-Type': 'application/json',
  'secret': secretConfig.HeaderKey
}

const loginUser = (body) => {
  config.url = `${apiUrl}/login`;
  config.data = { email: body.email, password: body.password };
  return new Promise((res, rej) => {
    axios.post(config.url, config.data, config).then((_res) => {
      const userList = _res.data;
      console.log(userList);
      res(userList);
    }).catch(err => {
      rej(err);
    })
  })
}
const getUserById = (uid) => {
  
  config.url = `${apiUrl}/user/byid`;
  config.params = { id: uid };
  return new Promise((res, rej) => {
    axios.get(config.url, config).then((_res) => {
      const user = _res.data;
      console.log(user);
      res(user);
    }).catch(err => {
      console.error(err);
      rej(err);
    })
  })
  
}
const getList = (uid) => {
  config.url = `${apiUrl}/items/byid`;
  config.params = { id: uid };
  return new Promise((res, rej) => {
    axios.get(config.url, config).then((_res) => {
      const shopingList = _res.data;
      console.log(shopingList);
      res(shopingList)
    }).catch(err => {
      rej(err);
    })
  })
  

}
const saveItemList = (uid, list) => {
  config.url = `${apiUrl}/items`;
  config.data = { id: uid, list: list };
  axios.post(config.url, config.data, config).then((res) => {
    const userList = res.data;;
    console.log(userList);
  });
}
const logout = () => {
  config.url = `${apiUrl}/login/logout`;
  axios.post(config.url, config.data, config).then((res) => {
    const userList = res.data;;
    console.log(userList);
  });
}
const getUsers = () => {
  config.url = `${apiUrl}/user`;
  axios.get(config.url).then((res) => {
    const users = res.data;
    console.log(users);
  });
}

export {
  saveItemList,
  getUsers,
  getUserById,
  getList,
  loginUser,
  logout
}