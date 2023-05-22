import styled from 'styled-components';

import { Banner } from '@myorg/common-ui';
import { Header, Sidebar } from '@myorg/shared-ui';
import { Footer } from '@myorg/shared-ui';
import { exampleProducts } from '@myorg/products';
import { Route, Routes } from 'react-router-dom';

const Layout = styled.div`
  background:#ddd;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  .content-wrapper{
    background:#a18383;
    width:100%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
  }
 `;

export function App() {
  return (<Layout className='main'> 
      <Sidebar text='STORE'/>
      <div className='content-wrapper'>
        <Header text='STORE'/>
        <Banner text="Welcome to the store!" />
        <Routes>
          {/* <Route path="/" element={<Shop />}></Route> */}
          {/* <Route path="/cart" element={<Cart />}></Route> */}
        </Routes>
        <ul>
          {exampleProducts.map((product) => (
            <li key={product.id}>
              <strong>{product.name}</strong> Price: {product.price}
            </li>
          ))}
        </ul>
    <Footer text='STORE'/>
      </div>
  </Layout>);
}

export default App;
