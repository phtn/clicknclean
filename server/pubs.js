Meteor.publish('showUser', ()=> {
	return Meteor.users.find({})
});
Meteor.publish('showResidentialClients', (id)=> {
	return ResidentialClients.find({owner:id})
});