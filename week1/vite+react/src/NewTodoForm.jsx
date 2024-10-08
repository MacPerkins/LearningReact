import {useState} from "react"

export function NewTodoForm({ onSubmit }) {
    const [newItem, setNewItem] = useState("");

    function handlerSubmit(e) {
        
        e.preventDefault();
        if (newItem === "") return

        onSubmit(newItem)
    
        setNewItem("")
      }

    return (
        <form onSubmit={handlerSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
        </div>
        <button className="btn">Add Item</button>
      </form>
    )
}