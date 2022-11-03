<template>
	<view>
		<!-- <view> -->
				<button @click="get">发送get请求</button>
		<!-- </view> -->
		<button type="primary" @click="setSaveData">存储数据</button>
		<button type="primary" @click="getData">获取数据</button>
		<button type="primary" @click="removeData">移除数据</button>
		<view>这是list列表</view>
		<view class="box-item" v-for="item in list">
			{{item}}
		</view>
		<button @click="pullDown">下拉刷新</button>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				list:['前端','JAVA','UI','测试','大数据','前端','JAVA','UI','测试','大数据']
			}
		},
		onPullDownRefresh() {
			console.log('触发了下拉刷新')
			setTimeout(()=>{
			this.list=['前端','JAVA','UI','测试','大数据','PYTHON']
			uni.stopPullDownRefresh()
		},2000)
		},
		onReachBottom() {
		    console.log('页面触底了')
			this.list=[...this.list,['前端','JAVA','UI','测试','大数据','前端','JAVA','UI','测试','大数据']]
			
		},
		methods:{
			pullDown(){
				uni.startPullDownRefresh()
			},
		    get(){
		       uni.request({
		       	url: "http://localhost:8082/api/getlunbo",
				success(res) {
					console.log(res)
				}
		       })	
		    },
			// 保存
			setSaveData(){
				// uni.setStorage({
				// 	key:'id',
				// 	data:80,
				// 	success() {
				// 		console.log('存储成功')
				// 	}
				// })
				uni.setStorageSync('id',100)
			},
			//获取
			getData(){
				// uni.getStorage({
				// 	key:'id',
				// 	success(res) {
				// 		console.log('获取数据成功',res.data)
				// 	}
				// })
				const res = uni.getStorageSync('id')
				console.log(res)
			},
			//移除
			removeData(){
				// uni.removeStorage({
				// 	key:'id',
				// 	success() {
				// 		console.log('删除成功')
				// 	}
				// })
				uni.removeStorageSync('id')
			}
		}
	}
</script>

<style>
	.box-item{
		height: 100px;
		line-height: 100px;
	}
</style>