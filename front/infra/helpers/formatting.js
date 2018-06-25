export default priceFormatter = {
    format: (price) => {
        return `R$ ${Number(price).toFixed(2).replace('.', ',')}`;
    }
};
