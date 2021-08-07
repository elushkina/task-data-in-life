import React, {useEffect, useState} from 'react'
import './App.css';
import {Footer} from './components/Footer/Footer';
import {Navbar} from './components/Navbar/Navbar';
import {Table} from './components/Table/Table';
import {fetchGetProducts} from "./components/api/api";
import {Route, Switch} from "react-router-dom";

function App() {
    const [products, setProducts] = useState([])
    const [selectedProducts, setSelectedProducts] = useState({})

    useEffect(() => {
        fetchGetProducts()
            .then(
                (data) => setProducts(data)
            )

    }, [])

    return (
        <>
            <div className='wrapper'>
                <Navbar products={products}/>
                <Switch>
                    <Route exact path='/'>
                        <Table selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts}
                               products={products}
                        />
                    </Route>
                    <Route exact path='/:id'>
                        <Table selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts}
                               products={products}
                        />
                    </Route>
                </Switch>
                <Footer selectedProducts={selectedProducts}/>
            </div>

        </>
    )
        ;
}

export default App;
