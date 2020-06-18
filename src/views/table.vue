<template>
	<div>

		<table>
			<tr>
				<th v-for="item in table">{{item.name}}</th>
			</tr>
			<tr  v-for="(item,index) in shuju">
				<td  v-for="(list,i) in item" >{{list}}</td>
			</tr>
		</table>
	</div>
</template>

<script>
    export default {
        name: "table",
		data(){
            return{
                table:[
                    {
                        id: 1,
                        name: "颜色",
                        values: [
                            "白色",
                            "红色",
                            "绿色",
                            "紫色",
                            "蓝色"
                        ]
                    },
                    {
                        id: 2,
                        name: "尺码",
                        values: [
                            "180-190",
                            "170-160"
                        ]
                    }
                ],
                shuju:[]
			}

		},
		methods:{
            cartesianProductOf() {
				return Array.prototype.reduce.call(arguments,       function(a, b) {
					var ret = [];
					a.forEach(function(a) {
						b.forEach(function(b) {
							ret.push(a.concat([b]));
						});
					});
					return ret;
				}, [[]]);
			}
		},
		created() {
            let arr = [];
            for (let key in this.table){
                arr.push(this.table[key].values)
			}
            this.shuju = this.cartesianProductOf(...arr);
            console.log(arr,this.shuju)
        }
    }
</script>

<style scoped>

</style>