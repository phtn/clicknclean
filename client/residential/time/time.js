Template.time.rendered = ()=> {
	Session.setPersistent('hour', 8)
	Session.setPersistent('minutes', '00')
	Session.setPersistent('am-pm', 'AM')
};

Template.time.events({
	'click #date' () {
		//FlowRouter.go('/date')
	},
	'click #zero-thirty' () {
		$('#mins-lbl').text() === ('00') ? Session.setPersistent('minutes', '30') : Session.setPersistent('minutes', '00')
	},
	'click #plus-hour' () {
		if (Session.get('hour') === 12) {
			Session.setPersistent('hour', 0)
		}
		Session.setPersistent('hour', Session.get('hour') + 1)
	},

	'click #minus-hour' () {
		if (Session.get('hour') === 1) {
			Session.set('hour', 13)
		}
		Session.setPersistent('hour', Session.get('hour') - 1)
	},
	'click #summary' () {
		//FlowRouter.go('/address	')
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
			Session.setPersistent('am-pm', 'PM')
		} else if(Session.get('hour') == 12) {
			Session.setPersistent('am-pm', 'PM')
		}else {
			Session.setPersistent('am-pm', 'AM')
		}
		
	})