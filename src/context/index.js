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
        goHome(data.body);
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
          
          dataUser.uid = data.body.uid;
          dataUser.email = data.body.email;
          dataUser.name = data.body.name;
          dataUser.lastname = data.body.lastname;
          dataUser.phone = data.body.phone;
          dataUser.shoppingList = data.body.shoppingList;
          setCurrentUser(dataUser);
          setList(dataUser.shoppingList);
          
      }).catch(err => {
        console.error(err);
      })
    }
   
  }
  const loginRegister = body => {
    if (body) {
      console.log('Body Register',body);
      register(body).then(res => {
        console.log(res);
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
    
  }, [currentUser.uid, token])

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
      kickOfUser,
      loginRegister

    }}>
      {props.children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider };