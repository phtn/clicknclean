Meteor.subscribe('showResidentialClients', Meteor.userId());

Template.residential.rendered = ()=> {
  $.material.init();
	$.material.options = {
		"withRipples": 'a, a:not(.withoutripples)' 
	};
	if (ResidentialClients.findOne({owner: Meteor.userId()}).kitchen == 1) {
		clickRoom('#kitchen');
	}
	if (ResidentialClients.findOne({owner: Meteor.userId()}).basement == 1) {
		clickRoom('#basement');
	}
	if (ResidentialClients.findOne({owner: Meteor.userId()}).garage == 1) {
		clickRoom('#garage');
	}
	if (ResidentialClients.findOne({owner: Meteor.userId()}).yard == 1) {
		clickRoom('#yard');
	}

	Tracker.autorun(() => {
		Session.set('subtotal-residential', priceSubtotal())
		Session.set('duration-residential', duration())
	});
};

Template.residential.events({
	'click #back-to-main' () {
		FlowRouter.go('/')
	},
	'click #minus-bedroom' () {
		console.log('minus test')
		Meteor.call('minusBedroom', Meteor.userId(), ResidentialClients.findOne({owner:Meteor.userId()}))
	},
	'click #plus-bedroom' () {
		console.log('plus test')
		Meteor.call('plusBedroom', Meteor.userId(), ResidentialClients.findOne({owner:Meteor.userId()}))	
	},
	'click #minus-bathroom' () {
		Meteor.call('minusBathroom', Meteor.userId(), ResidentialClients.findOne({owner:Meteor.userId()}))
	},
	'click #plus-bathroom' () {
		Meteor.call('plusBathroom', Meteor.userId(), ResidentialClients.findOne({owner:Meteor.userId()}))
	},
	'click #minus-livingroom' () {
		Meteor.call('minusLivingroom', Meteor.userId(), ResidentialClients.findOne({owner:Meteor.userId()}))
	},
	'click #plus-livingroom' () {
		Meteor.call('plusLivingroom', Meteor.userId(), ResidentialClients.findOne({owner:Meteor.userId()}))
	},
	'click #kitchen' () {
		check('#kitchen', Meteor.userId())
	},
	'click #basement' () {
		check('#basement', Meteor.userId())
	},
	'click #garage' () {
		check('#garage', Meteor.userId())
	},
	'click #yard' () {
		check('#yard', Meteor.userId())
	},
	'click #date-residential' () {
		FlowRouter.go('/date')
	}
});

Template.residential.helpers({
	roomCount () {
		return ResidentialClients.find({owner: Meteor.userId()})
	},
	priceSubtotalResidential () {
		return Session.get('subtotal-residential')
	},
	durationResidential () {
		return Session.get('duration-residential')
	}
});

function check (room, id) {
	if ($(room).hasClass('checked')) {
		$(room).removeClass('checked')
		console.log('not checked')
		Meteor.call('uncheckResidential', id, room)
	} else {
		$(room).addClass('checked')
		console.log('checked')
		Meteor.call('checkResidential', id, room)
	}
}

let clickRoom = (room) => {
	$(room).click();
}

let priceSubtotal = () => {
	let doc = ResidentialClients.findOne({owner: Meteor.userId()});
	let subtotal =
		(
			(doc.bedroom * 20) +
			(doc.bathroom * 25) +
			(doc.livingroom * 25) +
			(doc.kitchen * 45) +
			(doc.basement * 50) +
			(doc.garage * 60) +
			(doc.yard * 50)
		);
	return subtotal;
}

let duration = () => {
	let doc = ResidentialClients.findOne({owner: Meteor.userId()});
	let duration =
		(
			(doc.bedroom * .5) +
			(doc.bathroom * .5) +
			(doc.livingroom * .5) +
			(doc.kitchen * .7) +
			(doc.basement * .7) +
			(doc.garage * .7) +
			(doc.yard * .7)
		);
	return Math.round(duration);	
}