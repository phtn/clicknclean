

Template.homepage.events({
	'click #google' () {
		console.log('google');
		Meteor.loginWithGoogle({
			requestPermission: ['email','profile']
		}, function(err) {
			if (err) {
				// ERROR
			}
		});
	},
	'click #facebook' () {
		console.log('facebook')
	},
	'click #residential' () {
		console.log('residential')	
	},
	'click #office' () {
		console.log('office')
	},
	'click #enterprise' () {
		console.log('enterprise')
	},
	'click #minus-bedroom' () {
		minus('bedroom-count')
	},
	'click #plus-bedroom' () {
		plus('bedroom-count')
	},
	'click #minus-bathroom' () {
		minus('bathroom-count')
	},
	'click #plus-bathroom' () {
		plus('bathroom-count')
	},
	'click #minus-livingroom' () {
		minus('livingroom-count')
	},
	'click #plus-livingroom' () {
		plus('livingroom-count')
	},
	'click #kitchen-estimate' () {
		
		if ($('#kitchen-estimate').hasClass('checked')) {
			$('#kitchen-estimate').addClass('checked')
			console.log('checked')
		} else {
			$('#kitchen-estimate').removeClass('checked')
			console.log('not checked')
		}
	}
});

Template.homepage.helpers({
	bedroomCount () {
		return Session.get('bedroom-count')
	},
	bathroomCount () {
		return Session.get('bathroom-count')
	},
	livingroomCount () {
		return Session.get('livingroom-count')
	},
	priceEstimate () {
		return Session.get('price-estimate')
	},
	durationEstimate () {
		return Session.get('duration-estimate')
	}
	

});

Template.homepage.rendered = () => {
	$.material.init()
	Session.set('bedroom-count', 1 )
	Session.set('bathroom-count', 1 )
	Session.set('livingroom-count', 1 )
	Tracker.autorun(() => {
		Session.set('price-estimate', (Session.get('bedroom-count')*15 + Session.get('bathroom-count')*15 + Session.get('livingroom-count')*15 ))
		Session.set('duration-estimate', Math.round((Session.get('bedroom-count')*.6 + Session.get('bathroom-count')*.6 + Session.get('livingroom-count')*.6 )))
	});
	
}

function minus (room) {
	if (Session.get(room) != 0) {
			Session.set(room, Session.get(room) - 1 )
		} else {
			Session.set(room, 0 )
		}
}

function plus (room) {
	Session.set(room, Session.get(room) + 1 )
}

function totalEstimate (roomA, roomB, roomC) {
	return Session.set('price-estimate', ((15 * roomA) + (15 * roomB) + (15 * roomC)) )
}

