let minus = (room) => {
	let doc = ResidentialClients.find().fetch({owner: Meteor.userId()});
	if (doc[0].room !== 0) {
		ResidentialClients.update(
			{owner: Meteor.userId()},
			{$inc : {room: -1} }
		)
	} 
};

let test = () => {
	console.log('global test success')
}
