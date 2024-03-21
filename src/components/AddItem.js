import React, { useRef } from "react";

const AddItem = () => {
  const nameInputRef = useRef();
  const priceInputRef = useRef();
  const quantityInputRef = useRef();

  const [error, setError] = useState();

  const addItemHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;
    const enteredQuantity = quantityInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredPrice.trim().length === 0||enteredQuantity.trim().length===0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name, price and quantity (non-empty values).",
      });
      return;
    }
    if (+enteredQuantity < 1) {
      setError({
        title: "Invalid quantity",
        message: "Please enter a valid quantity (>0).",
      });
      return;
    }
    props.onAddItam(enteredName, enteredPrice,enteredQuantity);
    nameInputRef.current.value="";
    priceInputRef.current.value="";
    quantityInputRef.current.value="";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
        {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        /> //errror is an object so we can use title and message properties
      )}
    <form onSubmit={addItemHandler}>
      <label htmlFor="name">Username</label>
      <input id="name" type="text" />
      <label htmlFor="price">Price</label>
      <input id="price" type="text" />
      <label htmlFor="quantity">Quantity</label>
      <input id="quantity" type="number" />
      <button type="submit">Add To Shop</button>
    </form>
    </div>
  );
};

export default AddItem;
