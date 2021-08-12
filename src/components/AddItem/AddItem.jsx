import {useState} from 'react';

function AddItem ({postItem}) {

    let [newItemName, setNewItemName] = useState('');
    let [newItemQuantity, setItemQuantity] = useState(0);
    let [newItemUnit, setItemUnit] = useState('');

    const onFormSubmit = (event) => {
        event.preventDefault();

        let newItem = {
            name: newItemName,
            quantity: newItemQuantity,
            unit: newItemUnit
        };

        postItem(newItem);

    }

    return (
        <>
            <h1>Add Item</h1>
            <form onSubmit={onFormSubmit}>
                <h6>item:</h6>
                <input 
                    type="text"
                    value={newItemName}
                    onChange={event => setNewItemName(event.target.value) }
                >          
                </input>
                <h6>Quantity:</h6>
                <input 
                    type="number"
                    value={newItemQuantity}
                    onChange={event => setItemQuantity(event.target.value) }
                >

                </input>
                <h6>Unit:</h6>
                <input 
                    type="text"
                    value={newItemUnit}
                    onChange={evt => setItemUnit(evt.target.value) }
                    // onChange={evt => setNewCreatureOrigin(evt.target.value)}
                >

                </input>
                <button>Save</button>
            </form>
        </>
    );
}

export default AddItem;