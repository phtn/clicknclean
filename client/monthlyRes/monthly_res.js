Template.monthlyRes.helpers({
	modalButton () {
		if (Meteor.user()) {
			return 'Get this Service';
			
			

			Session.setPersistent('userStatus', 'signed')
		} else {
			return 'Sign Up'
		}
	},
	modalRoute () {
		if (Session.get('userStatus') == 'no-file') {
			return '/sign'
		} else if (Session.get('userStatus') == 'with-file') {
			return '/select-date-time'
		} else {
			return '/sign'
		}
	}
})