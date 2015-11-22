Template.checkout.events({
	'click #submit-payment' () {
		let profile = Profile.findOne({id: Meteor.userId()}),
						service = ResidentialClients.findOne({owner: Meteor.userId()});

		Meteor.call('submitOrder',
			Meteor.userId(),
			Meteor.user().profile.name,
			profile.email,
			profile.phone,
			profile.address,
			profile.city,
			profile.state,
			profile.zip,
			Session.get('time'),
			Session.get('date-residential'),
			Session.get('month-residential'),
			Session.get('year-residential'),
			Session.get('duration-residential'),
			service.bedroom,
			service.bathroom,
			service.livingroom,
			service.kitchen,
			service.basement,
			service.garage,
			service.yard,
			Session.get('grandTotal'),
			Session.get('payment-type')
		);
		//FlowRouter.go('/thanks')
	},
	'click #cash' () {
		Session.setPersistent('payment-type', 'cash')
	},
	'click #check' () {
		Session.setPersistent('payment-type', 'check')
	}
});

Template.checkout.helpers({
	total () {
		return Session.get('grandTotal')
	} 
});

Template.checkout.rendered = ()=> {
	Session.setPersistent('payment-type', 'cash')
}