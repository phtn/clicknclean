Template.profile.events({
	'click #logout' () {
		Meteor.logout()
		FlowRouter.go('/')
		//Session.set('person-x', 'user')
		
	} 
});