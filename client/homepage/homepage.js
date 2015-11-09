Template.homepage.onCreated(()=> {
	Blaze._allowJavascriptUrls();
});

Template.homepage.events({
	
	'click #residential' () {
		console.log('residential');
	},
	'click #office' () {
		console.log('office')
	},
	'click #enterprise' () {
		console.log('enterprise')
	},
	'click #minus-bedroom-estimate' () {
		minusEstimate('bedroom-count')
	},
	'click #plus-bedroom-estimate' () {
		plusEstimate('bedroom-count')
	},
	'click #minus-bathroom-estimate' () {
		minusEstimate('bathroom-count')
	},
	'click #plus-bathroom-estimate' () {
		plusEstimate('bathroom-count')
	},
	'click #minus-livingroom-estimate' () {
		minusEstimate('livingroom-count')
	},
	'click #plus-livingroom-estimate' () {
		plusEstimate('livingroom-count')
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
	$.material.init();
	$.material.options = {
		"withRipples": 'a, a:not(.withoutripple), input:not(.withoutripple)' 
	};
	Session.set('bedroom-count', 1 )
	Session.set('bathroom-count', 1 )
	Session.set('livingroom-count', 1 )
	Tracker.autorun(() => {
		Session.set('price-estimate', (Session.get('other-room-estimate') || 0) + (Session.get('bedroom-count')*20 + Session.get('bathroom-count')*25 + Session.get('livingroom-count')*25 ))
		Session.set('duration-estimate', Math.round((Session.get('bedroom-count')*.5 + Session.get('bathroom-count')*.5 + Session.get('livingroom-count')*.5 ) + (Session.get('duration-estimate-b') || 0 ) ))

	});
	
};

Template.homepage.onRendered( ()=> {
		$.material.init();
	}
);

function minusEstimate (room) {
	if (Session.get(room) != 0) {
			Session.set(room, Session.get(room) - 1 )
		} else {
			Session.set(room, 0 )
		}
}

function plusEstimate (room) {
	Session.set(room, Session.get(room) + 1 )
}

function totalEstimate (roomA, roomB, roomC) {
	return Session.set('price-estimate', ((20 * roomA) + (25 * roomB) + (25 * roomC)) )
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