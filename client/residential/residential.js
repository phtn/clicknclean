Meteor.subscribe('showResidentialClients', Meteor.userId());

Template.residential.rendered = ()=> {
    $.material.init();
	$.material.options = {
		"withRipples": 'a, a:not(.withoutripples)' 
	};
};

Template.residential.events({
	'click #back-to-main' () {
		FlowRouter.go('/')
	},
	'click #minus-bedroom' () {
		console.log('minus test')
		Meteor.call('minusBedroom', Meteor.userId())
	},
	'click #plus-bedroom' () {
		console.log('plus test')
		Meteor.call('plusBedroom', Meteor.userId())	
	},
	'click #minus-bathroom' () {
		Meteor.call('minusBathroom', Meteor.userId())
	},
	'click #plus-bathroom' () {
		Meteor.call('plusBathroom', Meteor.userId())
	},
	'click #minus-livingroom' () {
		Meteor.call('minusLivingroom', Meteor.userId())
	},
	'click #plus-livingroom' () {
		Meteor.call('plusLivingroom', Meteor.userId())
	}
});

Template.residential.helpers({
	roomCount () {
		return ResidentialClients.find({})
	} 
});

