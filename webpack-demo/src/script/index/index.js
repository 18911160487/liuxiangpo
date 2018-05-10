//import Layer from '../../components/layer/layer.js';
import common from '../../css/common.css';
import icon from '../../css/iconfont.css';
import json from '../../static/ajax.json';
//import flex from '../../css/flex.css';
//import index from '../../css/index.css';
//console.log(json)

//import CommonPage from './common.js';

const Index = function() {
	var dom = document.getElementById('app');
	//var layer = new Layer();
	var obj = {
		"name": "刘向坡"
	};
	let str = `我是` + obj.name;
	//dom.innerHTML = layer.tpl;
//	new CommonPage();
	$(".app").css({"background": 'url(img/1.jpg)'})
	$.ajax({
		type: "get",
		url: "./static/ajax.json",
		success: function(res) {
			console.log(res);
		},
		error: function() {
			console.log("error");
		}
	});
	
	$("body").click(function(){
		if(window.hash=="undefined"){
			window.hash="p=2"
		}
		
	})
	
	
}

new Index();