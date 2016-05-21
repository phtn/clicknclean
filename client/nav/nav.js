Meteor.subscribe('showUser');
Template.nav.helpers({
	username () {
		return getFirstName(Meteor.user().profile.name)
	},
	person () {
		return Session.get('person-x')
	}
});

Template.nav.events({
	'click #name' () {
		Session.setPersistent('whichProfileTab', '#profile-tab')
		FlowRouter.go('/profile')
	},
	'click .brand' () {
		FlowRouter.go('/')
	},
	'click .sub-brand' () {
		FlowRouter.go('/')
	},
	'click .user'() {
		FlowRouter.go('/sign')
	},

	'click #person-x' () {
		Feedback.provide('tap')

		if (Session.get('person-x') === 'user') {
			Session.set('person-x', 'remove')
			$('#f').fadeIn('fast')
			$('#g').fadeIn('slow')	
		} else {
			Session.set('person-x', 'user')
			$('#f').fadeOut('slow')
			$('#g').fadeOut('fast')
		}
	},
	'click #g' () {
		console.log('google');
		Meteor.loginWithGoogle({
			requestPermission: ['email','profile']
		}, function(err) {
			if (err) {
				// ERROR
			}
		});

	},
	'click #f' () {
		console.log('facebook')
		Meteor.loginWithFacebook({
			requestPermission: ['email','public_profile', 'user-friends']
		}, function(err) {
			if (err) {
				// ERROR
			}
		});

	},
});

Template.nav.rendered = () => {
		Session.set('person-x', 'user');
		$('.accounts').hide()
		
};

function getFirstName(name) {
    if (name.indexOf(' ') === -1)
        return name;
    else
        return name.substr(0, name.indexOf(' '));
};

Feedback.profiles = {
	'tap': {
		sound: '/assets/sound/tap.aif',
		vibrate: [25]
	}
}