import React from 'react'
import styles from './Footer.module.css'

export const Footer = ({selectedProducts}) => {

    const footerItems = Object.values(selectedProducts)
    let finalPrice = 0

    function submit(obj) {
        let formData = new FormData()
        Object.entries(obj).forEach((el) => {
            let [id, data] = el
            formData.append(`product[${id}]`, data.quantity)
        })
        fetch('https://datainlife.ru/junior_task/add_basket.php', {
            method: 'POST',
            body: formData
        })
    }

    return (
        <footer>
            <div>
                <div className={styles.product}>
                    <div className={styles.name}>Наименование</div>
                    <div className={styles.quantity}>Количество</div>
                    <div className={styles.price}>Сумма</div>
                </div>
                {footerItems.filter((item) => item.quantity > 0).map((item, index) => {
                    finalPrice += item.totalPrice
                    return (
                        <div key={index} className={styles.product}>
                            <div className={styles.name}>{item.name}</div>
                            <div className={styles.quantity}>{item.quantity}</div>
                            <div className={styles.price}>{item.totalPrice}</div>
                        </div>
                    )
                })}
            </div>
            <div className={styles.final}>
                <div>
                    <span>Общая стоимость заказа: </span>
                    <span> {finalPrice}</span>
                </div>
                <button onClick={() => submit(selectedProducts)}>В корзину</button>
            </div>
        </footer>
    )
}