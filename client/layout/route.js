function renderThisTemplate(template) {
	BlazeLayout.render('layout', {nav: "nav", body: template})
}

FlowRouter.route('/', {
	name: "Home",
	action(params) {
		renderThisTemplate('homepage')
	}
});

FlowRouter.route('/profile', {
	name: "Profile",
	action(params) {
		renderThisTemplate('profile')
	}
});

FlowRouter.route('/residential', {
	name: "Residential",
	action(params) {
		renderThisTemplate('residential')
	}
});

FlowRouter.route('/date', {
	name: "Date",
	action(params) {
		renderThisTemplate('date')
	}
});

FlowRouter.route('/time', {
	name: "Time",
	action(params) {
		renderThisTemplate('time')
	}
});

