Template.residential.rendered( ()=> {
    $.material.init()
	$.material.options = {
		"withRipples": 'a, a:not(.withoutripples)' 
	}
});

Template.residential.events({
	'click #back-to-main' () {
		FlowRouter.go('/')
	} 
});