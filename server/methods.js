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
		var doc = ResidentialClients.find().fetch();
		if (doc[0].bedroom != 0) {
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
		var doc = ResidentialClients.find().fetch();
			ResidentialClients.update(
				{owner: Meteor.userId()},
				{$inc : {bedroom: 1} }
			)
	},
	minusBathroom (id) {
		var doc = ResidentialClients.find().fetch();
		if (doc[0].bathroom != 0) {
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
		var doc = ResidentialClients.find().fetch();
			ResidentialClients.update(
				{owner: Meteor.userId()},
				{$inc : {bathroom: 1} }
			)
	},
	minusLivingroom (id) {
		var doc = ResidentialClients.find().fetch();
		if (doc[0].livingroom != 0) {
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
		var doc = ResidentialClients.find().fetch();
			ResidentialClients.update(
				{owner: Meteor.userId()},
				{$inc : {livingroom: 1} }
			)
	}
});

