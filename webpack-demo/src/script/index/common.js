import $ from "../../common/js/jquery.js";
function CommonPage(){
	this.init();
}
$.extend(CommonPage.prototype, {
	init(){
		console.log(123);
	}
});
module.exports = CommonPage;