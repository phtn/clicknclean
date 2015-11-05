Meteor.publish('showUser', ()=> {
	return Meteor.users.find({})
});