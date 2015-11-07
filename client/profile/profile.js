Template.profile.events({
	'click #logout' () {
		Meteor.logout()
		FlowRouter.go('/')
	} 
});