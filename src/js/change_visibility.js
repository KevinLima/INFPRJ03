function change_visibility(id, visibility) {
	switch(visibility) {
		case 'hidden':
		document.getElementById(id).style.visibility = 'hidden';
		break;

		case 'visible':
		document.getElementById(id).style.visibility = 'visible';
		break;
	}
}

