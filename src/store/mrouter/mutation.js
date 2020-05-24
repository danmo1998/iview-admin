var mutations= {
    reducePrice: (state, payload) => {
        // return state.productList.forEach((product) => {
        //     product.price -= payload;
        // })
        // console.log(state)
        state.rmroute = payload;
        localStorage.setItem('myroute',JSON.stringify(state.rmroute))
    },
    chooseview:(state,val)=>{
        state.nowView = val;
        localStorage.setItem('nowView',state.nowView)
    }
}

export default mutations;