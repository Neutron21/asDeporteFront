import React from 'react';

import { AppContext } from "../../context";
import { MainInput } from "../../components/MainInput/mainInput";
import { List } from "../../components/list/list";
import { Item } from "../../components/item/item";
import { Loading } from '../../components/loading/loading';
import { SearchInput } from '../../components/searchInput/searchInput';
import { PendButton } from '../../components/pendButton/pendButton';
import './home.css';

function Home() {

    const { showList, completeItem, deleteItem, loading } = React.useContext(AppContext);

    return (  
        <section>
            {loading && <Loading/>}
            {!loading && <MainInput />}
            
            {!loading && 
                <div id='botonera' className='d-flex justify-content-evenly'>
                    <SearchInput />
                    <PendButton />
                </div>
            }
          
            
                {(!loading && showList && showList.length > 0) &&
                <List>
                    {showList.map((elment, index) => (
                        <Item
                        key={elment.item}
                        text={elment.item}
                        completed={elment.dispatched}
                        onDelete={() => deleteItem(elment.item)}
                        onComplete={() => completeItem(elment.item)} 
                    />
                    ))}
                    
                </List>
                }
        </section>
    );
}

export default Home;