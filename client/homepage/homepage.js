Template.homepage.onCreated(()=> {
	Blaze._allowJavascriptUrls();
});

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
		Meteor.loginWithFacebook({
			requestPermission: ['email','public_profile', 'user-friends']
		}, function(err) {
			if (err) {
				// ERROR
			}
		});
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
		check ('#kitchen-estimate')
		addPriceEstimate ('#kitchen-estimate', 45)
	},
	'click #basement-estimate' () {
		check ('#basement-estimate')
		addPriceEstimate ('#basement-estimate', 50)
	},
	'click #garage-estimate' () {
		check ('#garage-estimate')
		addPriceEstimate ('#garage-estimate', 60)
	},
	'click #yard-estimate' () {
		check ('#yard-estimate')
		addPriceEstimate ('#yard-estimate', 50)
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
		Session.set('price-estimate', (Session.get('other-room-estimate') || 0) + (Session.get('bedroom-count')*20 + Session.get('bathroom-count')*20 + Session.get('livingroom-count')*20 ))
		Session.set('duration-estimate', Math.round((Session.get('bedroom-count')*.5 + Session.get('bathroom-count')*.5 + Session.get('livingroom-count')*.5 ) + (Session.get('duration-estimate-b') || 0 ) ))

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
	return Session.set('price-estimate', ((20 * roomA) + (20 * roomB) + (20 * roomC)) )
}

function check (room) {
	if ($(room).hasClass('checked')) {
			$(room).removeClass('checked')
			console.log('not checked')
			Session.set('duration-estimate-b', Session.get('duration-estimate-b') - .7)
		} else {
			$(room).addClass('checked')
			console.log('checked')
			Session.set('duration-estimate-b', (Session.get('duration-estimate-b') || 0) + .7)
		}
}

function addPriceEstimate (room, price) {
	if ($(room).hasClass('checked')) {
			Session.set('other-room-estimate', (Session.get('other-room-estimate') || 0) + price)
		} else {
			Session.set('other-room-estimate', Session.get('other-room-estimate') - price)
		}
}