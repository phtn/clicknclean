Template.date.events({
	'click #rooms' () {
		FlowRouter.go('/residential')
	} 
});

Template.date.helpers({
	priceSubtotalResidential () {
		return Session.get('subtotal-residential')
	},
	durationResidential () {
		return Session.get('duration-residential')
	}
});