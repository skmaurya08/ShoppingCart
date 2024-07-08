import { useState } from "react";
import "./ShoppingCart.css";

export default function ShoppingCart() {
    let [quantity, setQuantity] = useState(1);
    let [items, setItems] = useState([]);
    let [inItem, setInItem] = useState("");
    let [inPrice, setInPrice] = useState({});

    let increase = () => {
        quantity < 5 && setQuantity(quantity + 1);
    };

    let reduce = () => {
        quantity > 1 && setQuantity(quantity - 1);
    };

    let addItem = (event) => {
        setInItem(event.target.value);
    };

    let addPrice = (event) => {
        setInPrice(Number(event.target.value));
    };

    let Add = () => {
        setItems([...items, { itemName: inItem, quan: quantity, price: inPrice }]);
        setInItem("");
        setInPrice({});
        setQuantity(1);
    };

    return (
        <div>
            <form>
                <label htmlFor="item">Item: </label>
                <input type="text" id="item" placeholder="Enter your item" onChange={addItem} value={inItem} />
                <br />
                <label htmlFor="price">Price: </label>
                <input type="number" id="price" placeholder="Enter item price" onChange={addPrice} value={inPrice} />
                <div className="buttonDiv">
                    <p>Quantity</p>
                    <button type="button" onClick={increase}>&#43;</button>&nbsp;&nbsp;
                    <p>{quantity}</p>&nbsp;&nbsp;
                    <button type="button" onClick={reduce}>&#8722;</button>
                </div>
                <button type="button" onClick={Add}>Add</button>
            </form>
            <ul>
                {items.map((el, idx) => (
                    <li key={idx}>
                        <span>Item Name: {el.itemName}</span>&nbsp;<span>&#8377;{el.price * el.quan} </span><span>Quantity: {el.quan}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
