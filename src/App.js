import React from "react";
import AddItem from "./components/AddItem";

const App = () => {
  const [itemList, setItemList] = useState([]);

  const addItemHandler = (name, price, quantity) => {
    setUsersList((prevItemList) => {
      return [
        ...prevItemList,
        {
          name: name,
          price: price,
          quantity: quantity,
          id: Math.random().toString(),
        },
      ]; //creating a new object for every user and adding that to usersList array
    });
  };

  return (
    <div>
      <AddItem onAddItem={addItemHandler} />
    </div>
  );
};

export default App;
