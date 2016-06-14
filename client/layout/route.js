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

FlowRouter.route('/sign', {
	name: "Sign",
	action(params) {
		renderThisTemplate('sign')
	}
});

FlowRouter.route('/residential-16', {
	name: "Residential-16",
	action(params) {
		BlazeLayout.render('res')
	}
});

FlowRouter.route('/select-date-time', {
	name: "DateTime",
	action(params) {
		BlazeLayout.render('dateTime')
	}
});

FlowRouter.route('/monthly-package', {
	name: "Monthly Package",
	action(params) {
		renderThisTemplate('monthlyRes')
	}
});

FlowRouter.route('/install-app', {
	name: "Install App",
	action(params) {
		renderThisTemplate('installApp')
	}
});

FlowRouter.route('/admin-tools', {
	name: "Install App",
	action(params) {
		BlazeLayout.render('adminTools')
	}
});