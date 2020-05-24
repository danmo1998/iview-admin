var getters= {
    getSaledPrice: (state) => {
        let saleProduct = state.productList.map((item) => {
            return {
                name: '**' + item.name + '**',
                price: item.price / 2
            }
        })
        return saleProduct;
    }
}

export default getters;