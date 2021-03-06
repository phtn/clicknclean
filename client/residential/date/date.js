Template.date.events({
	'click #rooms' () {
		//FlowRouter.go('/residential')
	},
	'click #time' () {
		//FlowRouter.go('/time')	
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
	Tracker.autorun(() => {
		Session.setPersistent('day-residential', moment(cal).format('dddd').toUpperCase())
		Session.setPersistent('date-residential', moment(cal).format('MM / DD'))	
	})
	

	$('#residential-calendar').fullCalendar({ 
	    header: false, 
	    aspectRatio: 1.5, 
	    weekMode: 'liquid'
	 });
	$('td.fc-day').click( function () {
	  	var strDate = $(this).data('date');
	    Session.setPersistent('day-residential', moment(strDate).format('dddd').toUpperCase());
	    Session.setPersistent('month-residential', moment(strDate).format('MM'))
	    Session.setPersistent('date-residential', moment(strDate).format('DD'))
	    Session.setPersistent('year-residential', moment(strDate).format('YYYY'))
	    $('td.fc-day').removeClass('fc-pick');
	    $(this).addClass('fc-pick');
	});
};

	let date = new Date();
	let d = date.getDate();
	let m = date.getMonth();
	let y = date.getFullYear();

