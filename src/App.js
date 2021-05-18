import { MDBContainer } from 'mdbreact';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header';
import Loader from './components/Loader';
import AllStatus from './pages/AllStatus';

function App() {
  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.loading)

  useEffect(() => {
    dispatch({ type: 'getData' })
  }, [dispatch])
  
  return (
    <MDBContainer fluid className="px-0">
      <Header />
      {
        isLoading ? <Loader /> : <AllStatus />
      }
    </MDBContainer>
  );
}

export default App;
