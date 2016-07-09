
Template.adminTools.events({
	'click #save-price' () {
		if (Prices.find({}).count() === 0) {
			Meteor.call('setPrice',
			'phtn458',
			$('#bedroom-price-input').val(),
			$('#bathroom-price-input').val(),
			$('#livingroom-price-input').val(),
			$('#kitchen-price-input').val(),
			$('#basement-price-input').val(),
			$('#garage-price-input').val(),
			$('#yard-price-input').val()
			)
		} else {
			Meteor.call('updatePrice', 
			$('#bedroom-price-input').val(),
			$('#bathroom-price-input').val(),
			$('#livingroom-price-input').val(),
			$('#kitchen-price-input').val(),
			$('#basement-price-input').val(),
			$('#garage-price-input').val(),
			$('#yard-price-input').val()
			)
		}
	},
	'click #add-to-working' () {
		Meteor.call('changeOrderStatus', this._id, 'working')
		Bert.alert({
			type: 'added-to-working',
			style: 'fixed-bottom',
			message: 'Added to Working List!',
			icon: 'fa-check'
		})
	},
	'click #add-to-completed' () {
		Meteor.call('changeOrderStatus', this._id, 'completed')
		Bert.alert({
			type: 'added-to-completed',
			style: 'fixed-bottom',
			message: 'Added to Completed List!',
			icon: 'fa-check'
		})
	},
	'click #remove-completed' () {
		Meteor.call('removeOrder', this._id)
		Bert.alert({
			type: 'added-to-completed',
			style: 'fixed-bottom',
			message: 'Order Removed.',
			icon: 'fa-check'
		});
	},
	'click #remove-all-orders' () {
		/*Meteor.call('removeAllOrders')
		Bert.alert({
			type: 'added-to-completed',
			style: 'fixed-bottom',
			message: 'All Orders Removed.',
			icon: 'fa-minus-circle'
		});*/
	},
	'click #no-name' () {
		//console.log(this.service.bedroom)
		Session.setPersistent('no-name', this.name);
		Session.setPersistent('no-email', this.email);
		Session.setPersistent('no-phone', this.phone);
		Session.setPersistent('no-street', this.street);
		Session.setPersistent('no-city', this.city);
		Session.setPersistent('no-state', this.state);
		Session.setPersistent('no-zip', this.zip);
		Session.setPersistent('no-date', this.date);
		Session.setPersistent('no-serviceType', this.serviceType);
		Session.setPersistent('no-service-bedroom', this.service.bedroom);
		Session.setPersistent('no-service-bathroom', this.service.bathroom);
		Session.setPersistent('no-service-livingroom', this.service.livingroom);
		Session.setPersistent('no-service-kitchen', this.service.kitchen);
		Session.setPersistent('no-service-basement', this.service.basement);
		Session.setPersistent('no-service-garage', this.service.garage);
		Session.setPersistent('no-service-patio', this.service.patio);
		Session.setPersistent('no-service-yard', this.service.yard);
		Session.setPersistent('no-total', this.total);
		Session.setPersistent('no-paymentType', this.paymentType);
		Session.setPersistent('no-createdAt', this.createdAt);

		FlowRouter.go('/order-details')
	},
	'click #wo-name' () {
		//console.log(this.service.bedroom)
		Session.setPersistent('no-name', this.name);
		Session.setPersistent('no-email', this.email);
		Session.setPersistent('no-phone', this.phone);
		Session.setPersistent('no-street', this.street);
		Session.setPersistent('no-city', this.city);
		Session.setPersistent('no-state', this.state);
		Session.setPersistent('no-zip', this.zip);
		Session.setPersistent('no-date', this.date);
		Session.setPersistent('no-serviceType', this.serviceType);
		Session.setPersistent('no-service-bedroom', this.service.bedroom);
		Session.setPersistent('no-service-bathroom', this.service.bathroom);
		Session.setPersistent('no-service-livingroom', this.service.livingroom);
		Session.setPersistent('no-service-kitchen', this.service.kitchen);
		Session.setPersistent('no-service-basement', this.service.basement);
		Session.setPersistent('no-service-garage', this.service.garage);
		Session.setPersistent('no-service-patio', this.service.patio);
		Session.setPersistent('no-service-yard', this.service.yard);
		Session.setPersistent('no-total', this.total);
		Session.setPersistent('no-paymentType', this.paymentType);
		Session.setPersistent('no-createdAt', this.createdAt);

		FlowRouter.go('/order-details')
	},
	'click #co-name' () {
		//console.log(this.service.bedroom)
		Session.setPersistent('no-name', this.name);
		Session.setPersistent('no-email', this.email);
		Session.setPersistent('no-phone', this.phone);
		Session.setPersistent('no-street', this.street);
		Session.setPersistent('no-city', this.city);
		Session.setPersistent('no-state', this.state);
		Session.setPersistent('no-zip', this.zip);
		Session.setPersistent('no-date', this.date);
		Session.setPersistent('no-serviceType', this.serviceType);
		Session.setPersistent('no-service-bedroom', this.service.bedroom);
		Session.setPersistent('no-service-bathroom', this.service.bathroom);
		Session.setPersistent('no-service-livingroom', this.service.livingroom);
		Session.setPersistent('no-service-kitchen', this.service.kitchen);
		Session.setPersistent('no-service-basement', this.service.basement);
		Session.setPersistent('no-service-garage', this.service.garage);
		Session.setPersistent('no-service-patio', this.service.patio);
		Session.setPersistent('no-service-yard', this.service.yard);
		Session.setPersistent('no-total', this.total);
		Session.setPersistent('no-paymentType', this.paymentType);
		Session.setPersistent('no-createdAt', this.createdAt);

		FlowRouter.go('/order-details')
	}

});

Template.adminTools.helpers({
	signedUsers () {
		return Profile.find({})
	},
	signedUsersCount () {
		return Profile.find().count()
	},
	newOrdersCount () {
		return Orders.find({status: 'new'}).count()
	},
	newOrders () {
		return Orders.find({status: 'new'})
	},
	workingOrdersCount () {
		return Orders.find({status: 'working'}).count()
	},
	workingOrders () {
		return Orders.find({status: 'working'})
	},
	completedOrdersCount () {
		return Orders.find({status: 'completed'}).count()
	},
	completedOrders () {
		return Orders.find({status: 'completed'})
	},
	isAdm () {
		if (Meteor.userId() === 'soq7jS7zJ6Pcjjg6L' || Meteor.userId() === 'Ryjj8CkaFnxvovRoy') {
			return true
		} else {
			return false
		}
	}
});

Template.adminTools.rendered = ()=> {
	Meteor.subscribe('showPrices')
	let price = Prices.findOne({admin: 'phtn458'})
	if (Prices.find({admin: 'phtn458'}).count() !== 0) {
		$('#bedroom-price-input').val(price.bedroom)
		$('#bathroom-price-input').val(price.bathroom)
		$('#livingroom-price-input').val(price.livingroom)
		$('#kitchen-price-input').val(price.kitchen)
		$('#basement-price-input').val(price.basement)
		$('#garage-price-input').val(price.garage)
		$('#yard-price-input').val(price.yard)
	}
	$('#prices-li').click()
	
}