Meteor.methods({
	insertNewResidentialClient (id) {
		ResidentialClients.insert({
			owner: id,
			bedroom: 1,
			bathroom: 1,
			livingroom: 1,
			kitchen: 0,
			basement: 0,
			garage: 0,
			yard: 0,
			category: 'residential'
		})
	},
	minusBedroom (id) {
		var doc = ResidentialClients.findOne({owner: id});
		if (doc.bedroom != 0) {
			ResidentialClients.update(
				{owner: Meteor.userId()},
				{$inc : {bedroom: -1} }
			)
		} else {
			ResidentialClients.update(
				{owner: Meteor.userId()},
				{$set: {bedroom: 0} }
			)
		}
	},
	plusBedroom (id) {
		var doc = ResidentialClients.findOne({owner: id});
			ResidentialClients.update(
				{owner: Meteor.userId()},
				{$inc : {bedroom: 1} }
			)
	},
	minusBathroom (id) {
		var doc = ResidentialClients.findOne({owner: id});
		if (doc.bathroom != 0) {
			ResidentialClients.update(
				{owner: Meteor.userId()},
				{$inc : {bathroom: -1} }
			)
		} else {
			ResidentialClients.update(
				{owner: Meteor.userId()},
				{$set: {bathroom: 0} }
			)
		}
	},
	plusBathroom (id) {
		var doc = ResidentialClients.findOne({owner: id});
			ResidentialClients.update(
				{owner: Meteor.userId()},
				{$inc : {bathroom: 1} }
			)
	},
	minusLivingroom (id) {
		var doc = ResidentialClients.findOne({owner: id});
		if (doc.livingroom != 0) {
			ResidentialClients.update(
				{owner: Meteor.userId()},
				{$inc : {livingroom: -1} }
			)
		} else {
			ResidentialClients.update(
				{owner: Meteor.userId()},
				{$set: {livingroom: 0} }
			)
		}
	},
	plusLivingroom (id) {
		var doc = ResidentialClients.findOne({owner: id});
			ResidentialClients.update(
				{owner: Meteor.userId()},
				{$inc : {livingroom: 1} }
			)
	}

	

});

let minus = (room) => {
	let doc = ResidentialClients.findOne({owner: Meteor.userId()});
	if (doc.room !== 0) {
		ResidentialClients.update(
			{owner: Meteor.userId()},
			{$inc : {room: -1} }
		)
	} 
};

let test = () => {
	console.log('global test success')
}
