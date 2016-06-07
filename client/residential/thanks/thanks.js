Meteor.subscribe('showOrders')

Template.thanks.events({
	'click #view-orders' () {
		Session.setPersistent('whichProfileTab', '#orders-tab')
		FlowRouter.go('/profile')
		Session.setPersistent('profile-tab', '#orders-tab')
	} 
});