Meteor.subscribe('showOrders')

Template.thanks.events({
	'click #view-orders' () {
		FlowRouter.go('/profile')
	} 
});