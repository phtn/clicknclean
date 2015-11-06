Meteor.subscribe('showUser');
Template.nav.helpers({
	user () {
		return getFirstName(Meteor.user().profile.name)
	}
});

Template.nav.events({
	'click #name' () {
		Meteor.logout()
		FlowRouter.go('/')
	},
	'click .brand' () {
		FlowRouter.go('/')
	}
});

function getFirstName(name) {
    if (name.indexOf(' ') === -1)
        return name;
    else
        return name.substr(0, name.indexOf(' '));
};