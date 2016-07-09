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
	minusBedroom (id, coll) {
		if (coll.bedroom !== 0) {
			ResidentialClients.update(
				{owner: id},
				{$inc: {bedroom: -1} }
			)
		}
	},
	plusBedroom (id) {
			ResidentialClients.update(
				{owner: id},
				{$inc : {bedroom: 1} }
			)
	},
	minusBathroom (id, coll) {
		if (coll.bathroom !== 0) {
			ResidentialClients.update(
				{owner: Meteor.userId()},
				{$inc : {bathroom: -1} }
			)
		}
	},
	plusBathroom (id) {
			ResidentialClients.update(
				{owner: Meteor.userId()},
				{$inc : {bathroom: 1} }
			)
	},
	minusLivingroom (id, coll) {
		if (coll.livingroom !== 0) {
			ResidentialClients.update(
				{owner: Meteor.userId()},
				{$inc : {livingroom: -1} }
			)
		}
	},
	plusLivingroom (id) {
			ResidentialClients.update(
				{owner: Meteor.userId()},
				{$inc : {livingroom: 1} }
			)
	},
	checkResidential (id, room) {
		switch(room) {
			case '#kitchen': 
				ResidentialClients.update(
					{owner: id},
					{$set: {kitchen: 1} }
				);
				break;
			case '#basement':
				ResidentialClients.update(
					{owner: id},
					{$set: {basement: 1} }
				);
				break;
			case '#garage':
				ResidentialClients.update(
					{owner: id},
					{$set: {garage: 1} }
				);
				break;
			case '#yard':
				ResidentialClients.update(
					{owner: id},
					{$set: {yard: 1} }
				);
				break;
		}
	},
	uncheckResidential (id, room) {
		switch(room) {
			case '#kitchen':
				ResidentialClients.update(
					{owner: id},
					{$set: {kitchen: 0} }
				);
				break;
			case '#basement':
				ResidentialClients.update(
					{owner: id},
					{$set: {basement: 0} }
				);
				break;
			case '#garage':
				ResidentialClients.update(
					{owner: id},
					{$set: {garage: 0} }
				);
				break;
			case '#yard':
				ResidentialClients.update(
					{owner: id},
					{$set: {yard: 0} }
				);
				break;
		}
	},
	removeAll () {
		ResidentialClients.remove({});
	},
	insertProfileInfo (id, name, street, city, state, zip, phone, email) {
		Profile.insert({
			id: id,
			name: name,
			street: street,
			city: city,
			state: state.toUpperCase(),
			zip: zip,
			phone: phone,
			email: email
		})
	},
	updateProfileInfo (id, name, street, city, state, zip, phone, email) {
		Profile.update({id: id},
			{$set:
				{
					name: name,
					street: street,
					city: city,
					state: state.toUpperCase(),
					zip: zip,
					phone: phone,
					email: email
				}
			}
		)
	},
	setPrice (admin, bedroom, bathroom, livingroom, kitchen, basement, garage, yard) {
		Prices.insert({
			admin: admin,
			bedroom: bedroom,
			bathroom: bathroom,
			livingroom: livingroom,
			kitchen: kitchen,
			basement: basement,
			garage: garage,
			yard: yard
		})
	},
	updatePrice(bedroom, bathroom, livingroom, kitchen, basement, garage, yard) {
		Prices.update({admin: 'phtn458'},
			{$set: 
				{
				bedroom: bedroom,
				bathroom: bathroom,
				livingroom: livingroom,
				kitchen: kitchen,
				basement: basement,
				garage: garage,
				yard: yard
				}
			}
		)
	},
	submitOrder (id, name, email, phone, street, city, state, zip, time, date, month, year, duration, serviceType, bedroom, bathroom, livingroom, kitchen, basement, garage, patio, yard, total, paymentType, status) {
		Orders.insert({
			owner: id,
			name: name,
			email: email,
			phone: phone,
			street: street,
			city: city,
			state: state,
			zip: zip,
			time: time,
			date: date,
			month: month,
			year: year,
			duration: duration,
			serviceType: serviceType,
			service: {
				bedroom: bedroom,
				bathroom: bathroom,
				livingroom: livingroom,
				kitchen: kitchen,
				basement: basement,
				garage: garage,
				patio: patio,
				yard: yard
			},
			total: total,
			paymentType: paymentType,
			status: status,
			deliveryStatus: 'pending',
			createdAt: new Date()
		})
	},
	changeOrderStatus (id, status) {
		Orders.update({_id: id},
			{$set: {
				status: status
			}}
		)
	},
	removeOrder (id) {
		Orders.remove({_id: id})
	},
	removeAllOrders () {
		Orders.remove({})
	}
	

	

});

let doc = (id) => { return ResidentialClients.findOne({owner: id})};
