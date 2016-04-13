$(document).ready(function() {

	// 1. Create an array to hold the names of the planets
	var planets = [
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

	// 2. Create a function that takes a planet name as input and
	// returns HTML String for the carousel
	function createPlanetHTML(planetName) {
		var imageHTML = '<img id="carousel" src="img/' + planetName.toLowerCase() + '.jpg" />';
		var h2HTML = '<h2>' + planetName + '</h2>';

		return imageHTML + h2HTML;
	}

	// 3. Create a new empty array to hold planet HTML Strings
	var planetHTML = [];
	

	// 4. Loop through first array, create HTML for each planet, add
	// the HTML to the new array
	for (var i = 0; i < planets.length; i++) {
		var planet = planets[i];
		var html = createPlanetHTML(planet);

		planetHTML.push(html);
	}
	

	// 5. Create a variable to store what index the carousel is
	// at (start at 0)
	var carouselIndex = 0;

	// 6. Listen for clicks on the next and previous buttons and
	// change the carousel accordingly (using the stored HTML)
	$('#next').click(showNextImage);
	$('#previous').click(showPreviousImage);

	function showNextImage() {
		carouselIndex++;

		if (carouselIndex > planetHTML.length - 1) {
			carouselIndex = 0;
		}

		var nextPlanetHTML = planetHTML[carouselIndex];

		$('#carousel-view').html(nextPlanetHTML);
	}
	
	function showPreviousImage() {
		carouselIndex--;

		if (carouselIndex < 0) {
			carouselIndex = planetHTML.length - 1;
		}

		var nextPlanetHTML = planetHTML[carouselIndex];

		$('#carousel-view').html(nextPlanetHTML);
	}



	// BONUS: Use a Bootstrap carousel instead of creating our own

});