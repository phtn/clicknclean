Template.dateTime.events({
	'click #arrow-res' () {
		if (Session.get('res-service-type') === 'Total Cleaning Package') {
			FlowRouter.go('/')
		} else {
			FlowRouter.go('/residential-16')	
		}
		
	},
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
	},
	'click #checkout' () {
		
		if ($('#date-input').val() !== "") {
			let resDoc = Profile.findOne({id: Meteor.userId()});

			function getRoomCount (room, count) {
				if (Session.get('res-service-type') === 'Total Cleaning Package') {
					return count
				} else {
					return Session.get(room)
				}
			};

			Meteor.call('submitOrder',

				Meteor.userId(), 
				resDoc.name,
				resDoc.email,
				resDoc.phone,
				resDoc.street,
				resDoc.city,
				resDoc.state,
				resDoc.zip,
				Session.get('hour') + ':' + Session.get('minutes') + Session.get('am-pm'),
				$('#date-input').val(),
				null,
				null,
				null,
				Session.get('res-service-type'),
				getRoomCount('liv-count', 1),
				getRoomCount('bed-count', 2),
				getRoomCount('bath-count', 2),
				getRoomCount('kitchen-count', 1),
				getRoomCount('basement-count', 0),
				getRoomCount('garage-count', 0),
				getRoomCount('patio-count', 0),
				getRoomCount('total-price', 150),
				'cash',
				'new',
				'pending'

			);

			Bert.alert({
				type: 'saved',
				style: 'fixed-bottom',
				message: 'Order Submitted',
				icon: 'fa-check'
			});
			FlowRouter.go('/thanks');
		} else {
			Bert.alert({
				type: 'saved',
				style: 'fixed-bottom',
				message: 'Pick a Date',
				icon: 'fa-calendar-o'
			});
		}
	}
});

Template.dateTime.helpers({
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

Template.dateTime.rendered = ()=> {
	Session.setPersistent('hour', 8)
	Session.setPersistent('minutes', '00')
	Session.setPersistent('am-pm', 'AM')
};

Tracker.autorun(()=> {
	if (Session.get('hour') <= 6) {
		Session.setPersistent('am-pm', 'PM')
	} else if(Session.get('hour') == 12) {
		Session.setPersistent('am-pm', 'PM')
	}else {
		Session.setPersistent('am-pm', 'AM')
	}
	
})