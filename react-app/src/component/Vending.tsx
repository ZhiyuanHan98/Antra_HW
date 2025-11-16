import { useState } from "react";
import "./Vending.css";

interface VendingItem {
    id: string;
    name: string;
    price: number;
    stock: number;
}

const initialItems: VendingItem[] = [
    { id: "1", name: "Chocolate", price: 1.5, stock: 3 },
    { id: "2", name: "Soda", price: 1.0, stock: 5 },
    { id: "3", name: "Cookies", price: 0.75, stock: 4 },
    { id: "4", name: "Chips", price: 1.25, stock: 2 },
];

const withMoneyPrecision = (v: number) => Number(v.toFixed(2));

function VendingMachine() {
    const [items, setItems] = useState(initialItems);
    const [balance, setBalance] = useState(0);
    const [message, setMessage] = useState("");

    const addMoney = (amount: number) => {
        setBalance((prev) => withMoneyPrecision(prev + amount));
        setMessage(`Inserted $${amount.toFixed(2)}`);
    };

    const buyItem = (id: string) => {
        const item = items.find((i) => i.id === id);
        if (!item) return;

        if (item.stock <= 0) {
        setMessage(`${item.name} is out of stock`);
        return;
        }
        if (balance < item.price) {
        setMessage(
            `Not enough balance. Need $${(item.price - balance).toFixed(2)} more`
        );
        return;
        }

        setBalance(prev => Number((prev - item.price).toFixed(2)));
        setItems((prev) =>
        prev.map((i) =>
            i.id === id ? { ...i, stock: i.stock - 1 } : i
        )
        );
        setMessage(`Dispensed ${item.name}`);
    };

    const returnMoney = () => {
        if (balance === 0) {
        setMessage("No balance to return.");
        return;
        }
        setMessage(`Returned $${balance.toFixed(2)}`);
        setBalance(0);
    };

    return (
        <div className="vm-container">
        <h1>Vending Machine</h1>

        {/* Balance */}
        <section className="vm-balance-box">
            <div className="vm-balance">
            <strong>Balance:</strong> ${balance.toFixed(2)}
            </div>

            <div className="vm-money-buttons">
            <button onClick={() => addMoney(0.5)}>+ $0.50</button>
            <button onClick={() => addMoney(1)}>+ $1.00</button>
            <button onClick={() => addMoney(2)}>+ $2.00</button>
            <button onClick={returnMoney} disabled={balance === 0}>
                Return Change
            </button>
            </div>
        </section>

        {/* Items */}
        <section>
            <h2>Items</h2>
            <table className="vm-table">
            <thead>
                <tr>
                <th>Name</th>
                <th className="right">Price</th>
                <th className="right">Stock</th>
                <th>Action</th>
                </tr>
            </thead>

            <tbody>
                {items.map((item) => {
                const canBuy = balance >= item.price && item.stock > 0;

                return (
                    <tr key={item.id}>
                    <td>{item.name}</td>
                    <td className="right">${item.price.toFixed(2)}</td>
                    <td className="right">{item.stock}</td>
                    <td className="center">
                        <button
                        onClick={() => buyItem(item.id)}
                        disabled={!canBuy}
                        >
                        {item.stock > 0 ? "Buy" : "Sold Out"}
                        </button>
                    </td>
                    </tr>
                );
                })}
            </tbody>
            </table>
        </section>

        {/* Message */}
        <div className="vm-message">
            {message}
        </div>
        </div>
    );
};

export default VendingMachine;
