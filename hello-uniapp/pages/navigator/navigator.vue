<template>
	<view>
		<view>导航跳转的学习</view>
		<navigator url="/pages/datail/detail?id=80&age=90">跳转至详情页</navigator>
		<navigator url="/pages/message/message" open-type="switchTab">跳转至信息页</navigator>
		<navigator url="/pages/datail/detail" open-type="redirect">跳转至详情页</navigator>
	    <button @click="goDetail">跳转之详情页</button>
		<button @click="goMessage">跳转之信息页</button>
		<button type="primary"   @click="go">跳转之信息页</button>
	</view>
</template>

<script>
	export default{
		onUnload() {
			console.log('导航页面卸载了')
		},
		
		methods: {
			goDetail(){
				uni.navigateTo({
					url:'/pages/datail/detail'
				})
			},
			goMessage(){
				uni.switchTab({
					url:'/pages/message/message'
				})
			},
			go(){
				uni.redirectTo({
					url:'/pages/message/message'
				})
			}
		}
	}
</script>

<style>
</style>