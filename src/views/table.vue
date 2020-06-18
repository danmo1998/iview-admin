<template>
	<div id="table2">
		<div v-for="(item,index) in table" style="width: 450px;text-align: left;border:1px solid #000000;margin-bottom: 20px">
			<p><el-input v-model="item.name"></el-input></p>
			<div ><p style="display: inline-block" v-for="(list,index) in item.values"><el-input  v-model="item.values[index]" style="width: 100px"></el-input><span @click="remvval(item.values,index)" style="cursor: pointer;padding: 4px; border: 1px solid #000;margin-right: 10px">x</span></p><el-button @click="tianjia(item)">添加值</el-button></div>
			<p><el-button @click="shanchu(index)">我要删自己</el-button></p>
		</div>
		<el-button @click="addgg">添加规格</el-button>
		 <div class="moren">
			 单价：<input type="text" v-model="danjia">
		 </div>
		<table style="width: 450px">
			<tr>
				<th v-for="item in table">{{item.name}}</th>
				<th>单价</th>
			</tr>
			<tr  v-for="(item,index) in shuju">
				<td  v-for="(list,i) in item" >{{list}}</td>
				<td>{{djarr[item.join(',')]}}</td>
			</tr>
		</table>
	</div>
</template>

<script>
    export default {
        name: "table",
		data(){
            return{
            	danjia:10,
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
                shuju:[],
				djarr:[{}],
				remove1: 0
			}

		},
		watch: {
			table:{
				deep:true,
				handler:function(newV,oldV){
					this.xuanrantab();
				}
			}
		},
		methods:{
			remvval(item,val){
				item.splice(val,1)
			},
			shanchu(val){
				this.remove1 = 1;
				this.table.splice(val,1)
			},
            cartesianProductOf() {
				return Array.prototype.reduce.call(arguments,function(a, b) {
					var ret = [];
					a.forEach(function(a) {
						b.forEach(function(b) {
							ret.push(a.concat([b]));
						});
					});
					return ret;
				}, [[]]);
			},
			tianjia(item){
				item.values.push('');
			},
			addgg(){
            	this.table.push({
					name: '',
					values: ['']
				})
			},
			xuanrantab(){
				let arr = [];
				for (let key in this.table){
					arr.push(this.table[key].values)
				}
            	this.shuju = this.cartesianProductOf(...arr);
				for (let list in this.shuju){
					if (this.djarr[this.shuju[list].join(',')]){
						continue;
					}
					if (this.remove1){
						continue
					}
					this.djarr[this.shuju[list].join(',')] = this.danjia;
				}
				this.remove1 = 0;
			}
		},
		created() {
            let arr = [];
            for (let key in this.table){
                arr.push(this.table[key].values)
			}
            this.shuju = this.cartesianProductOf(...arr);
            for (let list in this.shuju){
            	this.djarr[this.shuju[list].join(',')] = 5;
			}
            console.log(this.djarr,this.shuju)
        }
    }
</script>

<style scoped lang="scss">
#table2{
	td{
		height: 50px;
		vertical-align: center;
		border: 1px solid #ff0000;
	}
	th{
		height: 50px;
		vertical-align: center;
		border: 1px solid #ff0000;
	}
	table{

	}
}
</style>