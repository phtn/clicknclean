Template.res.events({
	'click #arrow-left' () {
		FlowRouter.go('/');
		console.log('arrow')
	},
	'click #liv-plus' () {
		addOne('liv-count');
	},
	'click #liv-minus' () {
		if (Session.get('liv-count') !== 0)
			minusOne('liv-count')
	},
	'click #bed-plus' () {
		addOne('bed-count');
	},
	'click #bed-minus' () {
		if (Session.get('bed-count') !== 0)
			minusOne('bed-count')
	},
	'click #bath-plus' () {
		addOne('bath-count');
	},
	'click #bath-minus' () {
		if (Session.get('bath-count') !== 0)
			minusOne('bath-count')
	},
	'click #kitchen-plus' () {
		addOne('kitchen-count');
	},
	'click #kitchen-minus' () {
		if (Session.get('kitchen-count') !== 0)
			minusOne('kitchen-count')
	},
	'click #basement-plus' () {
		addOne('basement-count');
	},
	'click #basement-minus' () {
		if (Session.get('basement-count') !== 0)
			minusOne('basement-count')
	},
	'click #garage-plus' () {
		addOne('garage-count');
	},
	'click #garage-minus' () {
		if (Session.get('garage-count') !== 0)
			minusOne('garage-count')
	},
	'click #patio-plus' () {
		addOne('patio-count');
	},
	'click #patio-minus' () {
		if (Session.get('patio-count') !== 0)
			minusOne('patio-count')
	}
});

Template.res.helpers({
	livCount () {
		return Session.get('liv-count')
	},
	bedCount () {
		return Session.get('bed-count')
	},
	bathCount () {
		return Session.get('bath-count')
	},
	kitchenCount () {
		return Session.get('kitchen-count')
	},
	basementCount () {
		return Session.get('basement-count')
	},
	garageCount () {
		return Session.get('garage-count')
	},
	patioCount () {
		return Session.get('patio-count')
	},
	totalPrice () {
		return Session.get('total-price')
	}
});

Template.res.rendered = () => {
	Session.setDefault('liv-count', 1)
	Session.setDefault('bed-count', 1)
	Session.setDefault('bath-count', 1)
	Session.setDefault('kitchen-count', 1)
	Session.setDefault('basement-count', 0)
	Session.setDefault('garage-count', 0)
	Session.setDefault('patio-count', 0)
	//Session.setPersistent('liv-count', 0)
	
}

function addOne (name) {
	Session.setPersistent(name, Session.get(name) + 1);
	//console.log(Session.get(name, Session.get(name) + 1));
}

function minusOne (name) {
	Session.setPersistent(name, Session.get(name) - 1);
	//console.log(Session.get(name, Session.get(name) - 1));
}

function addAllRooms (rm1,rm2,rm3,rm4,rm5,rm6,rm7) {
	Session.setPersistent('total-price', Session.get(rm1)*50 + Session.get(rm2)*50 + Session.get(rm3)*50 + Session.get(rm4)*50 + Session.get(rm5)*50 + Session.get(rm6)*50)
}

Tracker.autorun(function() {
		addAllRooms('liv-count','bed-count','bath-count','kitchen-count','basement-count','garage-count','patio-count',)
		
		if (Session.get('total-price') < 0) {
			$('.order-service').show()
		}
	});