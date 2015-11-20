Meteor.publish('showUser', ()=> {
	return Meteor.users.find({})
});
Meteor.publish('showResidentialClients', ()=> {
	return ResidentialClients.find()
});

Meteor.publish('showProfile', ()=> {
	return Profile.find({})
});

Meteor.publish('showPrices', ()=> {
	return Prices.find({})
});