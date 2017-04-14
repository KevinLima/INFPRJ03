function update_content(option) {
	switch(option) {
		case 'Heatmap':
			// change_visibility('loadingBar', 'visible')
			change_src('content', './src/html/heat.html');
			change_visibility('yearSlider', 'visible');
			break;

		case 'Point Map':
			// change_visibility('loadingBar', 'visible');
			change_src('content', './src/html/mark.html');
			change_visibility('yearSlider', 'visible');
			break;

		case 'About':
			change_visibility('loadingBar', 'hidden');
			change_src('content', './src/html/about.html');
			change_visibility('yearSlider', 'hidden');
			break;

		case 'Questions':
			change_visibility('loadingBar', 'hidden');
			change_src('content', './src/html/questions.html');
			change_visibility('yearSlider', 'hidden');
			break;
	}
}

