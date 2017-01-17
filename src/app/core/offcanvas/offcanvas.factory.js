angular
	.module('flyingBye.core')
	.factory('offcanvas', offcanvas);

//offcanvas.$inject = [''];

function offcanvas() {
	offcanvas = {};
	offcanvas.visible = false;
	offcanvas.toggle = toggleOffcanvas;
	offcanvas.show = showOffcanvas;
	offcanvas.hide = hideOffcanvas;
	
	function toggleOffcanvas() {
		offcanvas.visible = !offcanvas.visible;
	}
	
	function showOffcanvas() {
		offcanvas.visible = true;
	}
	
	function hideOffcanvas() {
		offcanvas.visible = false;
	}
	
	return offcanvas;
}