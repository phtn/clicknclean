Template.admin.helpers({
	tryLink () {
		// return a link
		if ($('#admin-pw').val() === 'phtn458@gmail.com' )
			return '/admin-tools'
	}
});

Template.admin.events({
	'click #try' () {
		/*var c = Meteor.settings.private.c,
				l = Meteorl.settings.private.l;
		if ($('#admin-pw').val() === c) {
			Session.setPersistent('v799', l)
			FlowRouter.route(Session.get('v799'))
		}*/
		if ($('#admin-pw') === '299792458') {
			Session.setPersistent('cde', Math.floor(Math.random()*999999999))
			FlowRouter.route('/admin-tools')
			//console.log('test')
		}

		console.log('test')

	}

});

Template.admin.rendered = ()=> {
	// set a default link
	var e = Profile.findOne({email: 'phtn458@gmail.com'}).email;
	Session.setPersistent('email', e)

	Tracker.autorun = function () { 
		Session.setPersistent('cde', Session.get('cde'))
	};

};