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

Template.admin.rendered = ()=> {
	var doc = Prices.findOne({admin: 'phtn458'})
	$('#bedroom-price-input').val(doc.bedroom)
	$('#bathroom-price-input').val(doc.bathroom)
	$('#livingroom-price-input').val(doc.livingroom)
	$('#kitchen-price-input').val(doc.kitchen)
	$('#basement-price-input').val(doc.basement)
	$('#garage-price-input').val(doc.garage)
	$('#yard-price-input').val(doc.yard)
}