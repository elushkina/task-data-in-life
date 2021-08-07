import React from 'react'
import styles from './Table.module.css'
import {ProductTable} from "./ProductTable";
import {useParams} from "react-router-dom";

export const Table = ({products, selectedProducts, setSelectedProducts}) => {
    let {id} = useParams();
    const updateSelectedProducts = (e, price, name) => {
        if (e.target.value < 0) return
        setSelectedProducts({
            ...selectedProducts,
            [e.target.name]:
                {
                    quantity: e.target.value,
                    totalPrice: Number(e.target.value) * Number(price),
                    name: name
                }
        })
    }

    const checkValue = (e) => {
        if (e.target.value < 0) return e.target.value = 0
    }

    if (products.length === 0) return <div>Загрузка</div>

    return (
        <div className={styles.content}>
            {products.filter((product) => id ? (product.rid || 'rest') === id : product).map(product => {
                return (
                    <ProductTable checkValue={checkValue}
                                  productName={product.rname}
                                  productGoods={product.goods}
                                  key={product.rid || 'rest'}
                                  updateSelectedProducts={updateSelectedProducts}
                                  selectedProducts={selectedProducts}
                    />
                )
            })}
        </div>
    )
}