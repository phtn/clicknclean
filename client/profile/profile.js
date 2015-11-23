Template.profile.events({
	'click #logout' () {
		Meteor.logout()
		FlowRouter.go('/')
		//Session.set('person-x', 'user')
		
	} 
});

Template.profile.helpers({
	ownerOrdersCount () {
		return Orders.find({owner: Meteor.userId()}).count()
	},
	ownerOrders () {
		return Orders.find({owner: Meteor.userId()})
	} 
});

Template.profile.rendered = ()=> {
	$(Session.get('whichProfileTab')).click()
}