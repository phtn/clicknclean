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

FlowRouter.route('/learnmore', {
	name: "Learn",
	action(params) {
		renderThisTemplate('learn')
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

FlowRouter.route('/summary', {
	name: "Summary",
	action(params) {
		renderThisTemplate('summary')
	}
});

FlowRouter.route('/address', {
	name: "Address",
	action(params) {
		renderThisTemplate('address')
	}
});

FlowRouter.route('/admin', {
	name: "Admin",
	action(params) {
		renderThisTemplate('admin')
	}
});

FlowRouter.route('/checkout', {
	name: "Checkout",
	action(params) {
		renderThisTemplate('checkout')
	}
});

FlowRouter.route('/thanks', {
	name: "Thanks",
	action(params) {
		renderThisTemplate('thanks')
	}
});

