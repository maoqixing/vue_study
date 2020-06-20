<template>
	<div id="mine">
		<h2>个人中心</h2>
<!-- 		<p>-------</p>
		<h2>根据路由对象获取的路径参数</h2>
		<p>姓名：{{$route.params.name}}</p>
		<p>性别：{{$route.params.sex}}</p>
		<p>身高：{{$route.query.height}}</p>
		<p>小狗：{{$route.query.dog}}</p> -->
		
<!-- 		<p>-------</p>
		<h2>根据对象获取的路径参数</h2>
		<p>姓名：{{name}}</p>
			<p>性别：{{sex}}</p> -->
			
					<p>-------</p>
			<h2>根据对象获取的路径参数</h2>
			<p>姓名：{{name}}</p>
			<p>性别：{{sex}}</p>
			<p>身高：{{height}}</p>
			<p>狗：{{dog}}</p>
	</div>
</template>

<script>
	export default{
		name:"Mine",
		//props:['name','sex'],
		props:['name','sex','height' ,'dog'],

		created() {
		// 	console.log(this.$route)
		// //		console.log(this.$router)
		// console.log(this.params) //接收路由页面传过来的值
		}
	}
</script>

<style>
</style>
