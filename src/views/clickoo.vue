<template>
	<div id="aaa">
		<div v-for="item in nums" :class="{active:arr[item-1]}" @click="clicm(item-1)">点击{{item}}</div>
	</div>
</template>

<script>
    export default {
        name: "clickoo",
		data(){
            return{
                nums :200,
				arr:[]
			}
		},
		methods:{
            clicm(item){
                // this.arr[item]=!this.arr[item];
                this.$set(this.arr,item,!this.arr[item])
                // console.log(this.arr)
			}
		}
    }
</script>

<style scoped>
	 #aaa div{
		cursor: pointer;
	}
	.active{
		color: #ff0000;
		border: 1px solid #ff0000;
	}
</style>