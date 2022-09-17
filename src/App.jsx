import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import ListWrapper from './components/ListWrapper';

function App() {
  const [dataFromAPI, setDataFromAPI] = useState([]);
  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    let result = await axios.get('https://jsonplaceholder.typicode.com/todos');
    setDataFromAPI(result.data)
  }
  return (
    <div className='flex flex-col m-4'>
      <div className='flex justify-center my-10'>
        <h3 className='mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl'>List of Todo from JSON-Placeholder API</h3>
      </div>
      <div className='flex justify-center '>
        <ListWrapper dataSet={dataFromAPI} />
      </div>
    </div>
  )
}

export default App;