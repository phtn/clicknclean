function renderThisTemplate(template) {
	BlazeLayout.render('layout', {nav: "nav", body: template})
}

FlowRouter.route('/', {
	name: "Home",
	action(params) {
		renderThisTemplate('homepage')
	}
});

FlowRouter.route('/cart', {
	name: "Cart",
	action(params) {
		renderThisTemplate('cart')
	}
});

