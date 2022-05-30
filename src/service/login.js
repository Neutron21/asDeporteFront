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
const register = (body) => {
    config.url = `${apiUrl}/login/register`;
    config.data = { 
        email: body.email,
        password: body.password,
        name: body.name,
        lastname: body.lastname,
        phone: body.phone
    };
    return new Promise((res, rej) => {
      axios.post(config.url, config.data, config).then((_res) => {
        const newUser = _res.data;
        
        res(newUser);
      }).catch(err => {
        rej(err);
      })
    })
  }
const loginUser = (body) => {
    config.url = `${apiUrl}/login`;
    config.data = { email: body.email, password: body.password };
    return new Promise((res, rej) => {
      axios.post(config.url, config.data, config).then((_res) => {
        const userList = _res.data;
        res(userList);
      }).catch(err => {
        rej(err);
      })
    })
  }
const logout = () => {
    config.url = `${apiUrl}/login/logout`;
    return new Promise((res, rej) => {
      axios.post(config.url, config.data, config).then((res) => {
        const userList = res.data;;
        
        res(userList);
      }).catch(err => {
        console.error(err);
        rej(err)
      })
      })
  }
  export {
    register,
    loginUser,
    logout
  }