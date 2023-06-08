import styled from 'styled-components';
import react, { useState, useMemo, useEffect } from 'react'
import { Banner } from '@myorg/common-ui';
import { Header, Sidebar, GlobalStyle } from '@myorg/shared-ui';
import { Footer } from '@myorg/shared-ui';
import { exampleProducts } from '@myorg/products';
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';

//REDUX
import { bindActionCreators } from "redux";
import * as actionCreators from "../state/action-creators/index";
import * as InstituteActionCreators from "../state/inst/instituteAc";
import { RootState } from "../state";

// PAGES
import Home from '../screen/home/home';
import SignIn from '../screen/home/SignIn';
import SignUp from '../screen/home/SignUp';

//DATA TABLE
import DataTable, { TableColumn } from 'react-data-table-component';
import FilterComponent from './FilterComponent';
//AWS COGNITO
import { Amplify } from 'aws-amplify';
import awsExports from '../config/aws-exports';
import InstituteDetails from '../screen/home/instituteDetails';
import Institutes from '../screen/home/Institutes';
import FlowbiteHeader from '../component/FlowbiteHeader';
// import ProtectedRoute, { ProtectedRouteProps } from '../component/PrivateRoute';
import ProtectedRoute from '../component/PrivateRoute';
import Dashboard from '../screen/home/dashboard';
// import PrivateRoute from '../component/PrivateRoute';
interface DataRow {
  _id: number;
  isActive: boolean;
  isInhouse: boolean;
  instituteName: string;
  instituteDomain: string;
}

const Layout = styled.div`
display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  .content-wrapper{
    width:100%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
  }
  .edit-inst-popup{
    width:400px;
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0px;
    background: beige;
    z-index: 99;
    padding: 1rem;
  }
 `;
 
export function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { depositeMoney, withdrawMoney, bankrupt, enLangChange, } = bindActionCreators(actionCreators, dispatch);
  const { getInstitute, addInstitute } = bindActionCreators(InstituteActionCreators, dispatch);

  const [showSignIn, setShowSignIn] = useState(true);
  const [showSignUp, setShowSignUp] = useState(false);

  //GET STATE FROM STORE
  const state = useSelector((state: RootState) => state.bank);
  const instState = useSelector((state: RootState) => state.institute.data);
  console.log(instState);
  //EDIT ROW POPUP
  const [editRowPopUp, setEditRowPopUp] = useState(false);
  const [viewInstitute, setViewInstitute] = useState({});

  useEffect(() => {
    Amplify.configure({
      Auth: {
        region: awsExports.REGION,
        userPoolId: awsExports.USER_POOL_ID,
        userPoolWebClientId: awsExports.USER_POOL_APP_CLIENT_ID,
      },
    });
  },[]);


  return (<>
    <GlobalStyle />
    <FlowbiteHeader />
    {/* <Header text='STORE' /> */}
    <Routes>
      {/* <Route path='/' element={<Home />} /> */}
      {/* <Route path='dashboard' element={ <ProtectedRoute {...defaultProtectedRouteProps} outlet={<Dashboard />} />} /> */}
      <Route
            path="/"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

      <Route path="/login" element={< SignIn />} />
      <Route path="*" element={<Navigate to="/" />} />

      {/* <PrivateRoute isAuth={false} redirectPath="/login" path="/t1">
      <Dashboard />
      </PrivateRoute> */}

      {/* OTHER */}
      <Route path="/institutes" element={<Institutes />} />
      <Route path="/institute/:id" element={<InstituteDetails institute={viewInstitute} />} />
    </Routes>
    <Footer text='STORE' />

    {/* <Layout className='main'>
      <Sidebar text='STORE' />
      <div className='content-wrapper'>
        <Header text='STORE' />
        <Banner text="Welcome to the store!" />
        <div>
          <SignUp />
        </div>
        <SignIn />
        <Home />
        <ul>
          {exampleProducts.map((product) => (<li key={product.id}><strong>{product.name}</strong> Price: {product.price}</li>))}
          <hr />
          {instState ?
            <DataTable
              columns={columns}
              data={instState}
              pagination
              fixedHeader={true}
              fixedHeaderScrollHeight='500px'
              selectableRows
              selectableRowSelected={rowSelectCritera}
              subHeader
              subHeaderComponent={subHeaderComponentMemo}
            />
            : <p>No data found</p>
          }
          <hr />
        </ul>
        <h1>{state}</h1>
        <button onClick={() => depositeMoney(100)}>Add</button>
        <button onClick={() => withdrawMoney(50)}>Remove</button>
        <button onClick={() => bankrupt(0)}>Null</button>
        <button onClick={() => getInstitute(0)}>GET INSTITUTE DATA</button>
        {editRowPopUp ?
          <div className='edit-inst-popup'>
            <div><h1>Edit Popup</h1></div>
            <button onClick={() => setEditRowPopUp(false)} >Close</button>
            <div>Body</div>
          </div>
          : ""}
        <Footer text='STORE' />
      </div>
    </Layout> */}

  </>);
}

export default App;
