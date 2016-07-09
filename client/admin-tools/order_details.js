Template.orderDetails.helpers({
	isAdm () {
		if (Meteor.userId() === 'soq7jS7zJ6Pcjjg6L' || Meteor.userId() === 'Ryjj8CkaFnxvovRoy') {
			return true
		} else {
			return false
		}
	},
	noName () {
		return Session.get('no-name')
	},
	noEmail () {
		return Session.get('no-email')
	},
	noPhone () {
		return Session.get('no-phone')
	},
	noStreet () {
		return Session.get('no-street')
	},
	noCity () {
		return Session.get('no-city')
	},
	noState () {
		return Session.get('no-state')
	},
	noZip () {
		return Session.get('no-zip')
	},
	noDate () {
		return Session.get('no-date')
	},
	noServiceType () {
		return Session.get('no-serviceType')
	},
	noServiceBedroom () {
		return Session.get('no-service-bedroom')
	},
	noServiceBathroom () {
		return Session.get('no-service-bathroom')
	},
	noServiceLivingroom () {
		return Session.get('no-service-livingroom')
	},
	noServiceKitchen () {
		return Session.get('no-service-kitchen')
	},
	noServiceBasement () {
		return Session.get('no-service-basement')
	},
	noServiceGarage () {
		return Session.get('no-service-garage')
	},
	noServicePatio () {
		return Session.get('no-service-patio')
	},
	noServiceYard () {
		return Session.get('no-service-yard')
	},
	noTotal () {
		return Session.get('no-total')
	},
	noPaymentType () {
		return Session.get('no-paymentType')
	},
	noCreatedAt () {
		return Session.get('no-createdAt')
	}
});