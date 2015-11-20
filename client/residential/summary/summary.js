

Template.summary.events({
	'click #to-checkout' () {
		FlowRouter.go('/checkout')
	} 
});

Template.summary.helpers({
	room () {
		return ResidentialClients.find({owner: Meteor.userId()})
	},
	price () {
		return Prices.find({admin: 'phtn458'})
	},
	getTotalBedroom () {
		return gtEach ('getTotalBeds', ResidentialClients.findOne({owner: Meteor.userId()}).bedroom, parseInt(Prices.findOne({admin: 'phtn458'}).bedroom))
	},
	getTotalBathroom () {
		return gtEach ('getTotalBaths', ResidentialClients.findOne({owner: Meteor.userId()}).bathroom, parseInt(Prices.findOne({admin: 'phtn458'}).bathroom))	
	},
	getTotalLivingroom() {
		return gtEach ('getTotalLiving', ResidentialClients.findOne({owner: Meteor.userId()}).livingroom, parseInt(Prices.findOne({admin: 'phtn458'}).livingroom))	
	},
	getTotalKitchen () {
		return gtEach ('getTotalKitchen', ResidentialClients.findOne({owner: Meteor.userId()}).kitchen, parseInt(Prices.findOne({admin: 'phtn458'}).kitchen))	
	},
	getTotalBasement () {
		return gtEach ('getTotalBasement', ResidentialClients.findOne({owner: Meteor.userId()}).basement, parseInt(Prices.findOne({admin: 'phtn458'}).basement))	
	},
	getTotalGarage () {
		return gtEach ('getTotalGarage', ResidentialClients.findOne({owner: Meteor.userId()}).garage, parseInt(Prices.findOne({admin: 'phtn458'}).garage))	
	},
	getTotalYard () {
		return gtEach ('getTotalYard', ResidentialClients.findOne({owner: Meteor.userId()}).yard, parseInt(Prices.findOne({admin: 'phtn458'}).yard))	
	},
	getSubTotal () {
		let subtotal = Session.get('getTotalBeds') + Session.get('getTotalBaths') + Session.get('getTotalLiving') + Session.get('getTotalKitchen') + Session.get('getTotalBasement') + Session.get('getTotalGarage') + Session.get('getTotalYard');
		Session.set('getSubTotal', subtotal)
		return subtotal.toFixed(2)
	},
	getTax () {
		let tax = 0.06
		let vat = Session.get('getSubTotal') * tax;
		Session.set('vat', vat)
		return vat.toFixed(2)
	},
	getTotal () {
		let grandTotal = Session.get('getSubTotal') + Session.get('vat')
		Session.set('grandTotal', grandTotal)
		return grandTotal.toFixed(2)
	},
	location () {
		return Profile.find({id: Meteor.userId()})
	}

});

Template.summary.rendered = ()=> {
	Meteor.subscribe('showResidentialClients')
	Meteor.subscribe('showPrices');
	Meteor.subscribe('showProfile');
	let room = ResidentialClients.findOne({owner: Meteor.userId()});
	let price = Prices.findOne({admin: 'phtn458'});
}

function gtEach (session, counter, price) {
	let total = counter * price
	Session.set(session, total)
	return total
}