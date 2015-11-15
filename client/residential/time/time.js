Template.time.rendered = ()=> {
	Session.set('hour', 8)
	Session.set('minutes', '00')
	Session.set('am-pm', 'AM')
};

Template.time.events({
	'click #date' () {
		FlowRouter.go('/date')
	},
	'click #zero-thirty' () {
		$('#mins-lbl').text() === ('00') ? Session.set('minutes', '30') : Session.set('minutes', '00')
	},
	'click #plus-hour' () {
		if (Session.get('hour') === 12) {
			Session.set('hour', 0)
		}
		Session.set('hour', Session.get('hour') + 1)
	},

	'click #minus-hour' () {
		if (Session.get('hour') === 1) {
			Session.set('hour', 13)
		}
		Session.set('hour', Session.get('hour') - 1)
	}
});

Template.time.helpers({
	mins () {
		return Session.get('minutes')
	},
	ampm () {
		return Session.get('am-pm')
	},
	hour () {
		return Session.get('hour')
	}

});

Tracker.autorun(()=> {
		if (Session.get('hour') <= 6) {
			Session.set('am-pm', 'PM')
		} else if(Session.get('hour') == 12) {
			Session.set('am-pm', 'PM')
		}else {
			Session.set('am-pm', 'AM')
		}
		
	})