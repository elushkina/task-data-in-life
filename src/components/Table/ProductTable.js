import React from 'react'

export const ProductTable = ({checkValue, updateSelectedProducts, productName, productGoods, selectedProducts}) => {
    return (
        <table>
            <caption><h1>{productName ? productName : 'Прочее'}</h1></caption>
            <thead>
            <tr>
                <th>id</th>
                <th>Наименование товара</th>
                <th>Цена</th>
                <th>Количество</th>
                <th>Сумма</th>
            </tr>
            </thead>
            <tbody>
            {productGoods.map(g => {
                return (
                    <tr key={g.gid}>
                        <td>{g.gid}</td>
                        <td>{g.gname}</td>
                        <td>{g.gprice}</td>
                        <td>
                            <form onSubmit={e => e.preventDefault()}>
                                <input placeholder='Введите количество товара'
                                       value={selectedProducts[g.gid]?.quantity || ''}
                                       name={g.gid}
                                       type='number' min='0'
                                       inputMode='number'
                                       onKeyUp={checkValue}
                                       onChange={(e) => updateSelectedProducts(e, g.gprice, g.gname)}
                                />
                            </form>
                        </td>
                        <td>{selectedProducts[g.gid]?.totalPrice || '0'}</td>

                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}