Meteor.subscribe('showUser');
Template.nav.helpers({
	user () {
		
		return Meteor.user().profile.name;
	}
});

Template.nav.events({
	'click #name' () {
		Meteor.logout()
	} 
});