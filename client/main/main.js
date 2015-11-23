Template.main.events({
	'click #residential-main' () {
		//FlowRouter.go('/residential')
	} 
});

Template.main.rendered = ()=> {
	console.log('main page render test');
	addCLient()

};

Meteor.subscribe('showUsers');
Meteor.subscribe('showResidentialClients');

function addCLient () {
	if (!ResidentialClients.findOne({owner: Meteor.userId()})) {
		Meteor.call('insertNewResidentialClient', Meteor.userId())
	} else {
		console.log('client exists')
	}
}