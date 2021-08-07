export const fetchGetProducts = () => {
    return fetch('https://datainlife.ru/junior_task/get_products.php')
        .then(response => response.json())
        .catch(() => console.log('get products error'))
}

