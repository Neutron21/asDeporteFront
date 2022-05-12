import React from 'react';

import { saveItemList, getList, loginUser, getUserById, logout } from '../service/storage';

const AppContext = React.createContext();

function AppProvider(props) {

  const [inputValue, setInputValue] = React.useState('');
  const [loginEmail, setloginEmail] = React.useState('');
  const [loginPass, setloginPass] = React.useState('');
  const [currentUser, setCurrentUser] = React.useState({});
  const [token, setToken] = React.useState(null);
  const [list, setList] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  
  
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
    const tempElemet = list.findIndex(elem => elem.item === text);
    const newList = [...list]
    newList[tempElemet].dispatched = !newList[tempElemet].dispatched;
    saveItemList(currentUser.uid, newList);
    setList(newList);

  }
  const deleteItem = text => {

    const tempElemet = list.findIndex(elem => elem.item === text);
    const newList = [...list]
    newList.splice(tempElemet, 1);
    saveItemList(currentUser.uid, newList);
    setList(newList);

  }
  const loginApp = async () => {
    console.clear();
      
      let body = {
        email: loginEmail,
        password: loginPass
      }
      
      await loginUser(body).then(data => {
        let userValue = data.body;
        setCurrentUser(userValue);
        goHome(userValue);
        setError(false);
        setLoading(false);
        
      }).catch(err => {
        console.error(err);
        setError(err);
        setLoading(false);
      })
  }
  const goHome = (body) => {
    
    if (body){
      let dataUser = {...body};
      setToken(body.accessToken);
      getUserById(body.uid).then(data => {
          // console.log('Aqui',data);
          dataUser.email = data.body.email;
          dataUser.name = data.body.name;
          dataUser.lastname = data.body.lastname;
          dataUser.phone = data.body.phone;
          dataUser.shoppingList = data.body.shoppingList;
          setList(dataUser.shoppingList);
          console.log('DataUser',dataUser);
          
      }).catch(err => {
        console.error(err);
      })
    }
   
  }
  const kickOfUser = () => {
    setToken(null);
    setCurrentUser({});
    setloginEmail('');
    setloginPass('');
    logout();
  }
  React.useEffect(() => {
    
    if (token) {
    setLoading(true);
      console.log('useEffect')
      setTimeout(() => {
        try {
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
  
  
        } catch (error) {
          console.log(error);
        }
      }, 1000)
    }
    
  }, [])

  return (
    <AppContext.Provider value={{
      inputValue,
      setInputValue,
      addItem,
      list,
      setList,
      completeItem,
      deleteItem,
      loading,
      error,
      loginEmail,
      setloginEmail,
      loginPass,
      setloginPass,
      loginApp,
      token,
      currentUser,
      kickOfUser

    }}>
      {props.children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider };