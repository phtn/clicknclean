Meteor.subscribe('showPrices')
Template.admin.events({
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
	}
});

Template.admin.helpers({
	orderCount () {
		return Orders.find({}).count()
	},
	order () {
		return Orders.find({})
	} 
});

Template.admin.rendered = ()=> {
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
}