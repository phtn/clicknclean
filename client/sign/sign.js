Template.sign.events({
	'click .google' () {
		Meteor.loginWithGoogle({
			requestPermission: ['email','profile']
		}, function(err) {
			if (err) {
				// ERROR
			}
		});
	},
	'click .facebook' () {
		Meteor.loginWithFacebook({
			requestPermission: ['email','public_profile', 'user-friends']
		}, function(err) {
			if (err) {
				// ERROR
			}
		});
	}
});