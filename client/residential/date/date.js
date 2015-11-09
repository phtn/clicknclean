Template.date.events({
	'click #rooms' () {
		FlowRouter.go('/residential')
	},
	'click .fc-day' () {
		let fc = $('#residential-calendar').fullCalendar('select')
	}
});

Template.date.helpers({
	priceSubtotalResidential () {
		return Session.get('subtotal-residential')
	},
	durationResidential () {
		return Session.get('duration-residential')
	},
	day () {
		return Session.get('day-residential')
	},
	date () {
		return Session.get('date-residential')
	}
});

Template.date.rendered = () => {
	let cal = $('#residential-calendar').fullCalendar('getDate')
	Session.set('day-residential', moment(cal).format('dddd').toUpperCase())
	Session.set('date-residential', moment(cal).format('MM / DD / YYYY'))

	//console.log(moment(cal).format('dddd MM-DD-YYYY'))
};

	let date = new Date();
	let d = date.getDate();
	let m = date.getMonth();
	let y = date.getFullYear();
