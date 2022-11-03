<template>
	<view>
	<!-- 	详情页面
		<view>
			<text selectable="true">唱歌跳舞</text>
		</view>
		<view>
			<text user-select>唱歌跳舞111</text>
		</view>
		<view>
			<text decode="true">&AMP;</text>
		</view>
		<view>
			<text selectable="true" space="emsp">唱歌 跳舞111</text>
		</view>
		<view>
			<text selectable="true" space="ensp">唱歌  跳舞111</text>
		</view>
		<view>
			<text selectable="true" space="nbsp" style="font-size: 100px;">唱歌  跳舞111</text>
		</view> -->
		<view class="box2" hover-class="box2-active">
		<view class="box" hover-class="box-active" :hover-start-time="2000" :hover-stay-time="2000" hover-stop-propagation>我是一个盒子</view>
	    </view>
		<button>按钮</button>
		<button size="mini">按钮</button>
		<button type="primary">按钮</button>
		<button type="primary" plain>按钮</button>
		<button type="primary" disabled>按钮</button>
		<button loading></button>
		<image src="https://destiny001.gitee.io/image/cxk.gif"></image>
		<image src="https://destiny001.gitee.io/image/cxk.gif" mode="aspectFill"></image>
		<image src="https://destiny001.gitee.io/image/cxk.gif" mode="aspectFit"></image>
	</view>
</template>

<script>
	export default {
		onLoad(options) {
			console.log(options)
		},
		methods: {
			
		}
	}
</script>

<style>
	.box{
		width: 100px;
		height: 100px;
		background: green;
	}
	.box-active{
		background: red;
	}
	.box2{
		width: 200px;
		height: 200px;
		background: blue;
	}
	.box2-active{
		background: palevioletred;
	}
</style>