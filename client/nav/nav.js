Meteor.subscribe('showUser');
Template.nav.helpers({
	user () {
		return getFirstName(Meteor.user().profile.name)
	}
});

Template.nav.events({
	'click #name' () {
		FlowRouter.go('/profile')
	},
	'click .brand' () {
		Meteor.call('removeAll')
		FlowRouter.go('/')
	}
});

function getFirstName(name) {
    if (name.indexOf(' ') === -1)
        return name;
    else
        return name.substr(0, name.indexOf(' '));
};