<template>
	<div>
		<button ref="aaa" @click="test">点击事件</button>
		<div @click="chufashijian">触发上面的事件</div>
		<form action="http://static.rongtuoyunlian.com/transContract/UAT/B2B20200612094620133935420.png" download="123">
			<button type="submit" method ="get">shanhu</button>
		</form>
		<a :href="src" download="123" crossOrigin="Anonymous" id="">下载</a>
		<img id="myimg" src="http://rtyx-boss.oss-cn-shanghai.aliyuncs.com/202006/1591755039801_c67509c85e2c5cd5be8789aa1fb4c3d.jpg" alt="">
	</div>
</template>

<script>
    export default {
        name: "ceshi",
		data(){
         return {
             src:''
			}
		},
		methods:{
            chufashijian(){
				this.$refs.aaa.click();
			},
			test(){
                console.log('我被点了');
                var a=this.getImgBase64();
                this.src = a;
                console.log(a)
			},
            image2Base64(img) {
				let canvas = document.createElement("canvas");
				canvas.width = img.width;
				canvas.height = img.height;
                let ctx = canvas.getContext("2d");
				ctx.drawImage(img, 0, 0, img.width, img.height);
                let dataURL = canvas.toDataURL("image/png");
				return dataURL;
			},
            getImgBase64(){
                let base64="";
                let img = new Image();
                img.setAttribute("crossOrigin",'Anonymous')
				img.src="http://static.rongtuoyunlian.com/transContract/UAT/B2B20200612094620133935420.png";
				img.onload=()=>{
					base64 = this.image2Base64(img);
					alert(base64);
				}
			}
		}
    }
</script>

<style scoped>

</style>