<template>
	<view>
		<view>数据的绑定</view>
		<view>{{msg}}</view>
		<view>{{'你好'+'世界'}}</view>
		<view>{{1+1}}</view>
		<view>{{flag?'这是反话-我是假的':'这是反话-我是真的'}}</view>
		<!-- 注意路径 -->
		<image :src="imgUrl"></image>
		<!-- for语句 -->
		<view v-for="(item,index) in arr" :key="item">
			序号:{{index}},名字:{{item.name}},年龄:{{item.age}}
		</view>  
		<button type="primary" @click="clickHandle(20,$event)">按钮</button>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				msg:'hellp-uni',
				flag:true,
			    imgUrl:'http://destiny001.gitee.io/image/monkey_02.jpg',
				arr:[
					{
						name:'宋小宝',
						age: 20
					},
					{
						name:'里小宝',
						age: 20
					},
					{
						name:'王小宝',
						age: 20
					},
					{
						name:'刘小宝',
						age: 20
					}
				]
			}
		},
		methods:{
			clickHandle(num,e){
				console.log('点击我了',num,e)
			}
			
		}
	}
</script>

<style>
</style>