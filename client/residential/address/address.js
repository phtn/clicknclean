Meteor.subscribe('showProfile')

Template.address.events({
	'click #summary' () {
		if ($('#address').val() === '' || $('#phone').val() === '') {
			Bert.alert({
				type: 'empty',
				style: 'fixed-bottom',
				message: 'All fields required.',
				icon: 'fa-warning'
			})
		} else {
			FlowRouter.go('/summary')
		}
	},
	'click #save-address' () {
		if (Profile.find({id: Meteor.userId()}).count() === 0) {
			//console.log('no profile')

			Meteor.call('insertProfileInfo',
				Meteor.userId(),
				$('#address-one').val(),
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
			})
		} else {
			console.log('profile updated')
			Meteor.call('updateProfileInfo',
				Meteor.userId(),
				$('#address-one').val(),
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
			})
		}
	}
});

Template.address.rendered = ()=> {
	let doc = Profile.findOne({id: Meteor.userId()})
	if (Profile.find({id: Meteor.userId()}).count() !== 0) {
		console.log('has profile')
		$('#address-one').val(doc.address)
		$('#city').val(doc.city)
		$('#state').val(doc.state)
		$('#zip').val(doc.zip)
		$('#phone').val(doc.phone)
		$('#email').val(doc.email)
	} else {
		console.log('no profile on render')
	}
} 

Template.address.helpers({
	hasProfile () {
		return Profile.find({id: Meteor.userId()}).count()
	},
	showProfile () {
		Profile.findOne({id: Meteor.userId()})
	} 
});