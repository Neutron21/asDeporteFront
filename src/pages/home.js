import React from 'react';

import { AppContext } from "../context";
import { MainInput } from "../components/MainInput/mainInput";
import { List } from "../components/list/list";
import { Item } from "../components/item/item";


function Home() {

    const { list, completeItem, deleteItem } = React.useContext(AppContext);

    return (  
        <section>
            <MainInput />
                {(list && list.length > 0) &&
                <List>
                    {list.map((elment, index) => (
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