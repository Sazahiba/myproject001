import React, {useContext, useState} from 'react';
import {TransactionContext} from './transContext';


function Child() {
    let {transactions, addTransaction } = useContext(TransactionContext);
    let [newDesc, setDesc] = useState("");
    let [newAmount, setAmount] = useState(0);

    const handleAddition = (event) => {
        event.preventDefault();
        if (Number(newAmount) === 0) {
            alert("Please enter correct value");
            return false;
        }
        addTransaction({
            amount: Number(newAmount),
            desc: newDesc
        });

        setDesc('');
        setAmount(0)
    }
    
    return (
    <div className="container">
        <h1 className="text-center">Expense Tracker</h1>

        <h3>Your Balance <br /> $260</h3>

        <div className="expense-container">
        <h3>INCOME<br /> $500</h3>
        <h3>EXPENSE <br /> $240</h3>
      </div>

      <h3>History</h3>
      <hr />

      <ul className="transaction-list">
          {transactions.map((transObj, ind) => {
              return(<li key={ind}>
             <span>{transObj.desc}</span>
             <span>${transObj.amount}</span> 
          </li>
              )
          })}

          
      </ul>

      <h3>Add new transaction</h3>
      <hr />

<form className="transaction-form" onSubmit={handleAddition}>
    <label>
        Enter Description <br />
        <input type="text" 
        value={newDesc}
        placeholder="Description"
        onChange={(ev) => setDesc(ev.target.value)}
        required/>
    </label>

    <br />
    <label>
        Enter Amount <br />
        <input type="number" 
        value={newAmount}
        placeholder="Amount"
        onChange={(ev) => setAmount(ev.target.value)}
        required/>
    </label>

    <br />

    <input type="Submit" value="Add Transaction" />
</form>
    </div>
  );
}


export default Child;
