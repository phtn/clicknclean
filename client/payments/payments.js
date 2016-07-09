Meteor.subscribe('showCard')

// EVENTS
Template.payments.events({
	'click #same-as-shipping' () {
		//check('#same-as-shipping')
	},
	'click #submit-order' () {
		/*// INSERT TO ORDERS
		var file = Profiles.findOne({owner: Meteor.userId()})
		if (Profiles.find({owner: Meteor.userId(), address: {$ne: null}}).count() !== 0) {
			Meteor.call('addToOrders',
				Meteor.userId(),
				file.name,
				file.phone,
				file.email,
				Session.get('total'),
				'new order',
				'ion-bag',
			);

		// INSERT BILLING ADDRESS
			Meteor.call('insertBillingAddress', 
				Meteor.userId(),
				$('#billing-address').val(),
				$('#billing-city').val(),
				$('#billing-state').val(),
				$('#billing-zip').val()
			);

		// DELETE CART
			Meteor.call('removeAfterSubmit', Meteor.userId());

		// ROUTE
			FlowRouter.go('/order-submitted')

		} else {
			/*FlowRouter.go('/profile')
			Bert.alert({
			  type: 'must-signin',
			  message: 'Enter Complete Shipping Address.',
			  style: 'growl-top-right',
			  icon: 'ion-ios-location'
			});
		}
	},
	'click #remove-card' () {
		Meteor.call('removeCard', this._id)
	}
*/
	}
});

// HELPERS
Template.payments.helpers({
	/*notSameAsShipping () {
		return Session.get('same-as-shipping')
	},
	shipping () {
		return Profiles.findOne({owner: Meteor.userId()})
	},
	hasCardInfo () {
		return PaymentInfo.find({owner: Meteor.userId()}).count() === 0
	},
	cardNumber () {
		return getLastFour(PaymentInfo.findOne({owner: Meteor.userId()}).creditCard)
	}*/

});

function check (shipping) {
	/*var shipAdd = Profiles.findOne({owner: Meteor.userId()});
	if ($(shipping).hasClass('checked')) {
		$(shipping).removeClass('checked')
		Session.setPersistent('same-as-shipping', true)
	} else {
		$(shipping).addClass('checked');
		console.log('checked');
		Session.setPersistent('same-as-shipping', false);
	}*/
}

function getLastFour (number) {
	return number.substr(15, 19)
}

// RENDERED
Template.payments.rendered = ()=> {
	//$('#same-as-shipping').click()
}
