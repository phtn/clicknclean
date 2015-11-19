Meteor.subscribe('showProfile')
Template.address.events({
	'click #back-to-time' () {
		
	},
	'click #save-address' () {
		if (Profile.find({id: Meteor.userId()}).count() === 0) {
			//console.log('no profile')
			Meteor.call('insertProfileInfo',
				Meteor.userId(),
				$('#address-one').val(),
				$('#state').val().toUpperCase(),
				$('#zip').val(),
				$('#phone').val(),
				$('#email').val(),
			)
		} else {
			console.log('profile updated')
			Meteor.call('updateProfileInfo',
				Meteor.userId(),
				$('#address-one').val(),
				$('#state').val().toUpperCase(),
				$('#zip').val(),
				$('#phone').val(),
				$('#email').val(),
			)
		}
	}
});

Template.address.rendered = ()=> {
	let doc = Profile.findOne({id: Meteor.userId()})
	if (Profile.find({id: Meteor.userId()}).count() !== 0) {
		console.log('has profile')
		$('#address-one').val(doc.address)
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