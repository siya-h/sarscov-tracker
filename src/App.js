import { MDBContainer } from 'mdbreact';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header';
import Loader from './components/Loader';
import AllStatus from './pages/AllStatus';
import { getData } from './store/actions/actions';

function App() {
  const dispatch = useDispatch()
  const { isLoading, error } = useSelector(state => state.data)
  useEffect(() => {
    dispatch(getData())
  }, [dispatch])
  
  return (
    <MDBContainer fluid className="px-0">
      <Header />
      {
        isLoading ? <Loader /> : error ? <h1>Error Loading Data</h1> : <AllStatus />
      }
    </MDBContainer>
  );
}

export default App;
