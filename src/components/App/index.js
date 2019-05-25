import React, {useState } from 'react';

import Shelf from '../Shelf';
import Filter from '../Shelf/Filter';
import FloatCart from '../FloatCart';
import Header from '../Header/Header';

function App() {

  const title = "Levi's";
  const [search, setSearch] = useState('');


  return (
    <>
      <Header title={title} searchFn={setSearch} />
      <main>
        <Filter/>
        <Shelf search={search}/>
      </main>
      <FloatCart/>
    </>
  );

}

export default App;
