import React from 'react';
import './App.scss';
import {Routes, Route} from 'react-router-dom'
import { Layoute } from './Components/Layoute/Layoute';
import { Tickets } from './Pages/Tickets';
import { Hotels } from './Pages/Hotels';
import { useDispatch } from 'react-redux';
import { closePopupAction } from './Store/PopupReducer/reduser';


function App() {
  const dispatch = useDispatch()
  const closeModal = (e: any) => {
    if (!e.target.closest('DIV').className.includes('modal')) {
      dispatch(closePopupAction())
    }
  }

  return (
    <div className="App" onClick={closeModal}>
      <Routes>
        <Route path='/' element={<Layoute />}>
          <Route path='/tickets' element={<Tickets />}/>
          <Route path='/hotels' element={<Hotels/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
