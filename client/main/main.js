Template.main.events({
	'click #residential-main' () {
		FlowRouter.go('/residential')
	} 
});

Template.main.rendered = ()=> {
	console.log('main page render test');
	addCLient()
};

Meteor.subscribe('showUsers');
Meteor.subscribe('showResidentialClients', Meteor.userId());
function addCLient () {
	if (ResidentialClients.find({owner: Meteor.userId()}).count() === 0) {
		Meteor.call('insertNewResidentialClient', Meteor.userId())
	} else {
		console.log('client exists')
	}
}