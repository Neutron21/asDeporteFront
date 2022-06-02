import axios from 'axios'
import secretConfig from '../private/const';

const apiUrl = secretConfig.ApiUrl;
const config = {
  url: '',
  params: {},
  data: {},
}
axios.defaults.headers = {
  'Content-Type': 'application/json',
  'secret': secretConfig.HeaderKey
}


const getUserById = (uid) => {
  
  config.url = `${apiUrl}/user/byid`;
  config.params = { id: uid };
  return new Promise((res, rej) => {
    axios.get(config.url, config).then((_res) => {
      const user = _res.data;
      
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



export {
  saveItemList,
  getUserById,
  getList,
}