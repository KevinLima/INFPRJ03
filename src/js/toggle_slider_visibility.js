function toggle_slider_visibility(id, toggle) {
	if (toggle == 'show') {
		document.getElementById(id).style.visibility = 'visible';
	} else {
		document.getElementById(id).style.visibility = 'hidden';
	}
}
