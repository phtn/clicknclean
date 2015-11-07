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
	},
	'click #kitchen' () {
		check('#kitchen')
	}
});

Template.residential.helpers({
	roomCount () {
		return ResidentialClients.find({owner: Meteor.userId()})
	} 
});

function check (room) {
	if ($(room).hasClass('checked')) {
		$(room).removeClass('checked')
		console.log('not checked')
		// 
	} else {
		$(room).addClass('checked')
		console.log('checked')
		// 
	}
}