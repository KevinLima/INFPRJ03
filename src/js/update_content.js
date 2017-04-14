function update_content(option) {
	switch(option) {
		case 'Heatmap':
			change_src('content', './src/html/heat.html');
			change_visibility('yearSlider', 'visible');
			break;

		case 'Point Map':
			change_src('content', './src/html/mark.html');
			change_visibility('yearSlider', 'visible');
			break;

		case 'About':
			change_src('content', './src/html/about.html');
			change_visibility('yearSlider', 'hidden');
			break;

		case 'Questions':
			change_src('content', './src/html/questions.html');
			change_visibility('yearSlider', 'hidden');
			break;
	}
}

