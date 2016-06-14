
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
	}
});

Template.adminTools.helpers({
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
	}
});

Template.adminTools.rendered = ()=> {
	if (Meteor.user().profile.name === 'Jun Lecena') {
		Meteor.subscribe('showPrices')
	}
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