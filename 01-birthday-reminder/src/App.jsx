import React, { useState } from 'react';
import './index.css';
import data from './data';
import List from './List';
import BirthdayFilter from './BirthdayFilter';
function App() {
  const [people,setpeople] = useState([]);
  
  return (
     <main>
      {/* <section className='container'>
        <h4>{people.length} Birthdays now</h4>
      
      <button onClick={()=>setpeople()}>Clear All</button>
      </section> */}
        {/* <List/> */}
        <BirthdayFilter/>
     </main>
  )
}

export default App;