Meteor.subscribe('showProfile')

Template.profile.events({
	'click #logout' () {
		Meteor.logout()
		FlowRouter.go('/')
		//Session.set('person-x', 'user')
		Bert.alert({
			type: 'logged-out',
			style: 'fixed-bottom',
			message: 'Logged Out.',
			icon: 'fa-sign-out'
		});
	},
	'click #save-info' () {
		if (Profile.find({id: Meteor.userId()}).count() === 0) {
			//console.log('no profile')

			Meteor.call('insertProfileInfo',
				Meteor.userId(),
				$('#name').val(),
				$('#street').val(),
				$('#city').val(),
				$('#state').val().toUpperCase(),
				$('#zip').val(),
				$('#phone').val(),
				$('#email').val(),
			);
			Bert.alert({
				type: 'saved',
				style: 'fixed-bottom',
				message: 'Save Successful',
				icon: 'fa-check'
			});
		} else {
			console.log('profile updated')
			Meteor.call('updateProfileInfo',
				Meteor.userId(),
				$('#name').val(),
				$('#street').val(),
				$('#city').val(),
				$('#state').val().toUpperCase(),
				$('#zip').val(),
				$('#phone').val(),
				$('#email').val(),
			);
			Bert.alert({
				type: 'saved',
				style: 'fixed-bottom',
				message: 'Update Successful',
				icon: 'fa-check'
			});
		}	
	}

});

Template.profile.helpers({
	ownerName () {
		return Profile.findOne({id: Meteor.userId()}).name
	},
	ownerOrdersCount () {
		return Orders.find({owner: Meteor.userId()}).count()
	},
	ownerOrders () {
		return Orders.find({owner: Meteor.userId()})
	}
});

Template.profile.rendered = ()=> {
	Session.setDefault('profile-tab', '#account-tab')
	$(Session.get('profile-tab')).click();
	
	$('#name').focus();

	let doc = Profile.findOne({id: Meteor.userId()});

	if (Profile.find({id: Meteor.userId()}).count() !== 0) {
		//console.log('has profile')
		$('#name').val(doc.name).trigger("change");
		$('#street').val(doc.street).trigger("change");
		$('#city').val(doc.city).trigger("change");
		$('#state').val(doc.state).trigger("change");
		$('#zip').val(doc.zip).trigger("change");
		$('#phone').val(doc.phone).trigger("change");
		$('#email').val(doc.email).trigger("change");


	} else {
		//console.log('no profile on render')
		$('#name').val(Meteor.user().profile.name).trigger("change");

		let user = Meteor.user();

		if (user.services) {
			if (user.services.google) {
				$('#email').val(user.services.google.email).trigger("change");		
			}
			if (user.services.facebook) {
				$('#email').val(user.services.facebook.email).trigger("change");		
			}
		}

		
	}

}