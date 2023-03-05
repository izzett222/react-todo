import plus from "./assets/plus.svg";
import Todo from "./components/Todo";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

class Item {
  constructor(text) {
    this.text = text
    this.id = nanoid()
    this.done = false
  }

}

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || [])
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (text.trim()) {
      setTodos([new Item(text), ...todos])
      setText("")
    }
    
  }
  function createCompleteHandler(id) {
    return () => {
      const newTodos = [...todos]
      const updated = newTodos.find(el => el.id === id)
      updated.done = !updated.done
      setTodos(newTodos)
    }
  }
  function createDeleteHandler(id) {
    return () => {
      const newTodos = todos.filter(el => el.id !== id)
      setTodos(newTodos)
    }
  }
  console.log(todos)
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-full flex flex-col items-center">
        <h1 className="text-[56px] leading-[1.21] text-gray-400 text-center">
          Todos
        </h1>
        <div className="w-[40%] flex flex-col items-center justify-center">
          <form className="w-full mt-10 relative" onSubmit={handleSubmit}>
            <input
              type="text"
              name="text"
              value={text}
              onChange={handleChange}
              placeholder="new todo"
              className="block w-full indent-4 h-14 rounded-2xl shadow-small"
            />
            <button className="bg-[#00897E] block p-1 rounded-full w-fit absolute top-3.5 right-3">
              <img src={plus} alt="" className="w-5 h-5" />
            </button>
            
          </form>
          <div className="w-full mt-5">
          {todos.map(el => <Todo key={el.id} remove={createDeleteHandler(el.id)} check={createCompleteHandler(el.id)} {...el} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
