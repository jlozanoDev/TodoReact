import React from 'react';
function UseLocalStorage(itemName, initialValue=[]){
    const localStorageItem = localStorage.getItem(itemName);
    let parsedItem = [];
    if (!localStorageItem){
      localStorage.setItem(itemName, JSON.stringify(initialValue))
    }
    parsedItem = JSON.parse(localStorageItem);
  
    const [item, setItem] = React.useState(parsedItem);
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    };
  
    return [item, saveItem];
}

export { UseLocalStorage };