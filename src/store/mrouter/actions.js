
export default {
    changerouter(store,router){
        store.commit('reducePrice',router)
        // console.log(router);
    },
    chooseview(store,val){
        store.commit('chooseview',val)
    }
}