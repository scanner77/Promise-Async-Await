//Promise is a traditional way to make a fetch request -- lot's of .then and code get's messy
//Async Await is modern and easy way to make fetch request, and it's ultimate goal is to return promise -- easy and clean
import React, {useState, useEffect} from 'react'
import axios from 'axios'

const App = () => {
  const[items, setItems] = useState([])

  useEffect(() => {
    // fetchWithPromise()
    fetchWithAsync()
  }, [])

  const fetchWithPromise = () => {
    axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(result => {
      setItems(result.data)
    })
    .catch(e => console.log(e));
  }

  console.log(items);

  const fetchWithAsync = async () => {
    try{
      const result = await axios.get("https://jsonplaceholder.typicode.com/users") /* Here await means, it waits until the data has been fetched */
      // const anotherResult = await axios.get("") #Here you can fetch different data
      console.log(result.data)
    }catch(e){
      console.log(e) //You can implement you own error handling method depending on situation
    }
  

  }
  return ( 
    <div>
      <h1>{items.name}</h1>
    </div>
  )
}

export default App
