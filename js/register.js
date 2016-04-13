/**
 * Registration requirements
 * 
 * 1. User must provide a username
 * 
 * 2. User must provide a password that is at least 8 characters long
 * 
 * 3. User must provide an email address that contains an '@' sign
 *
 * 4. User must love space
 *
 * 5. User must choose two favorite astronauts
 *
 * 6. User must select a favorite planet
 *
 * Display an error message if these conditions are not met.
 * Display a success message if they are met.
 */
$(document).ready(function() {

	var planetNames = [
		'Mercury',
		'Venus',
		'Earth',
		'Mars',
		'Jupiter',
		'Saturn',
		'Uranus',
		'Neptune',
		'Planet9'
	];

	for (var i = 0; i < planetNames.length; i++) {
		var planetName = planetNames[i];
		var optionHTML = '<option value="' + planetName + '">' + planetName + '</option>';

		$('select[name="planet"]').append(optionHTML);
	}

	$('#registrationForm').submit(processForm);

	function processForm(event) {
		event.preventDefault();

		var username = $('input[name="username"]').val();
		var password = $('input[name="password"]').val();
		var emailAddress = $('input[name="emailAddress"]').val();
		var lovesSpace = $('input[name="lovesSpace"]:checked').val();
		var numberOfAstronauts = $('input[name="astronauts"]:checked').length;
		var planet = $('select[name="planet"]').val();

		// 1.
		if (username === '') {
			$('#errorMessage')
				.html('Please enter a username')
				.removeClass('hide');
		// 2. 
		} else if (password.length < 8) {
			$('#errorMessage')
				.html('Password must be at least 8 characters')
				.removeClass('hide');
		// 3. 
		} else if (emailAddress.indexOf('@') === -1) {
			$('#errorMessage')
				.html('Please provide a valid email address')
				.removeClass('hide');
		// 4.
		} else if (lovesSpace !== 'yes') {
			$('#errorMessage')
				.html('Only space lovers need apply')
				.removeClass('hide');
		// 5. 
		} else if (numberOfAstronauts < 2) {
			$('#errorMessage')
				.html('Please choose at least two astronauts')
				.removeClass('hide');
		// 6. 
		} else if (planet === '') {
			$('#errorMessage')
				.html('Please choose a favorite planet')
				.removeClass('hide');
		} else {
			$('#errorMessage').addClass('hide');

			$('#successMessage')
				.html('Yay! You\'re Registered')
				.removeClass('hide');
		}
	}

});



