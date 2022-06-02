import React from 'react';

import { saveItemList, getList, getUserById } from '../service/storage';
import { register, loginUser, logout } from '../service/login';

const AppContext = React.createContext();

function AppProvider(props) {

  const [inputValue, setInputValue] = React.useState('');
  const [loginEmail, setloginEmail] = React.useState('');
  const [loginPass, setloginPass] = React.useState('');
  const [currentUser, setCurrentUser] = React.useState({});
  const [token, setToken] = React.useState(null);
  const [searchValue, setSearchValue] = React.useState('');
  const [list, setList] = React.useState([]);
  const [filterList, setFilterList] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  const [errorText, setErrorText] = React.useState('');
  let showList = [];

  
  if (!searchValue.length > 0) {
    showList = list;
  } else {
    showList = list.filter(elm => {
      const itemText = elm.item.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return itemText.includes(searchText);
    })
  }
  if (filterList) {
    showList = list.filter(element => !element.dispatched);
  }
  if (filterList && searchValue.length > 0) {
    // eslint-disable-next-line
    showList = list.filter(elm => {
      if (!elm.dispatched) {
        const itemText = elm.item.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return itemText.includes(searchText);
      }
    })
  }
  const addItem = event => {
    event.preventDefault();
    if (inputValue) {
      const newList = [...list]
      newList.push({
        item: inputValue,
        dispatched: false,
      })
      saveItemList(currentUser.uid, newList);
      setList(newList);
      setInputValue('');
    }

  }
  const completeItem = text => {
    setTimeout(() => {
      const tempElemet = list.findIndex(elem => elem.item === text);
      const newList = [...list]
      newList[tempElemet].dispatched = !newList[tempElemet].dispatched;
      saveItemList(currentUser.uid, newList);
      setList(newList);
    }, 500);

  }
  const deleteItem = text => {
    const tempElemet = list.findIndex(elem => elem.item === text);
    const newList = [...list]
    newList.splice(tempElemet, 1);
    saveItemList(currentUser.uid, newList);
    setList(newList);


  }
  const switchFilter = () => {
    setFilterList(!filterList);
    if (filterList) {
      // console.log('Limpiar el input de busqueda');
    }
  }
  const loginApp = async () => {
    setLoading(true);
    let body = {
      email: loginEmail,
      password: loginPass
    }

    await loginUser(body).then(data => {
      goHome(data.body);
      setError(false);

    }).catch(err => {
      setErrorText(err.response.data.error);
      console.log('loginApp X', err.response.data);
      setError(true);
      setLoading(false);
      setOpenModal(true);
    })
  }
  const goHome = async (body) => {

    if (body) {
      let dataUser = { ...body };
      setToken(body.accessToken);
      getUserById(body.uid).then(data => {

        dataUser.uid = data.body.uid;
        dataUser.email = data.body.email;
        dataUser.name = data.body.name;
        dataUser.lastname = data.body.lastname;
        dataUser.phone = data.body.phone;
        dataUser.shoppingList = data.body.shoppingList;
        setCurrentUser(dataUser);
        setList(dataUser.shoppingList);
        setError(false);
        setLoading(false);

      }).catch(err => {
        console.error(err);
        setError(true);
        setLoading(false);
      })
    }

  }
  const loginRegister = async body => {
    console.time('register')
    setLoading(true);
    if (body) {

      await register(body).then(async res => {

        let dataUser = { ...body };
        dataUser.accessToken = res.body.accessToken;
        dataUser.uid = res.body.uid;
        setToken(dataUser.accessToken);
        setCurrentUser(dataUser);

        await goHome(dataUser)

      }).catch(err => {
        setError(true);
        console.error(err);
        setErrorText(err.response.data.error);
        setLoading(false);
        setOpenModal(true);
      })
    }
  }
  const kickOfUser = () => {
    setLoading(true);
    setToken(null);
    setCurrentUser({});
    setloginEmail('');
    setloginPass('');
    logout().then(result => {
      setLoading(false);
    }).catch(err => {
      setLoading(false);
    })

  }
  const getItems = () => {
    getList(currentUser.uid).then(data => {
      let firstData = data.body;
      console.log(firstData);
      setList(firstData);
      setError(false);
      setLoading(false);
    }).catch(err => {
      console.error(err);
      setError(err);
      setLoading(false);
    })
  }

  return (
    <AppContext.Provider value={{
      inputValue,
      showList,
      loading,
      error,
      loginEmail,
      loginPass,
      token,
      currentUser,
      openModal,
      errorText,
      filterList,
      setInputValue,
      addItem,
      setList,
      completeItem,
      deleteItem,
      setloginEmail,
      setloginPass,
      loginApp,
      kickOfUser,
      loginRegister,
      setOpenModal,
      getItems,
      switchFilter,
      setSearchValue
    }}>
      {props.children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider };