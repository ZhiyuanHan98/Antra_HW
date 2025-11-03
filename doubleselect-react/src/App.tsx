import { useState } from 'react'
import './App.css'
import { ComboSelector } from './components/ComboSelector'

const items = [
  {
    name: "apple",
    category: "fruit"
  },
  {
    name: "Cucumber",
    category: "vegetable"
  },
  {
    name: "Banana",
    category: "fruit"
  },
  {
    name: "Celery",
    category: "vegetable"
  },
  {
    name: "orange",
    category: "fruit"
  },
  {
    name: "sausage",
    category: "meat"
  },
  {
    name: "bacon",
    category: "meat"
  }
];

function App() {
    const [category, categorySetter] = useState(items[0].category);
    const [name, nameSetter] = useState(items[0].name);
    return (
        <>
            <h1>{name}</h1>
            <ComboSelector data={items} field="category" setter={categorySetter}></ComboSelector>
            <ComboSelector data={items.filter(elem => elem.category === category)} field="name" setter={nameSetter}></ComboSelector>
        </>
    )
}

export default App
