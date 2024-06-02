import React, { useState } from 'react';
import './index.css';
import data from './data';
import List from './List';
function App() {
  const [people,setpeople] = useState(data);
  return (
     <main>
      <section class='container'>
        <h4>{people.length} Birthdays now</h4>
      <List people={people}/>
      <button onClick={()=>setpeople([])}>Clear All</button>
      </section>

     </main>
  )
}

export default App;