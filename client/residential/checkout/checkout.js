Template.checkout.events({
	'click #submit-payment' () {
		FlowRouter.go('/thanks')
	} 
});

Template.checkout.helpers({
	total () {
		return Session.get('grandTotal')
	} 
});