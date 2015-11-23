Template.profile.events({
	'click #logout' () {
		Meteor.logout()
		FlowRouter.go('/')
		//Session.set('person-x', 'user')
		
	} 
});

Template.profile.helpers({
	ownerOrders () {
		return Orders.find({owner: Meteor.userId()})
	} 
});