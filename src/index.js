/**
 * Historically Black Colleges & Universities (HBCUs)
 * 
 * @see  https://en.wikipedia.org/wiki/List_of_historically_black_colleges_and_universities
 * @type {Object}
 */
var HBCU = module.exports = {

	/**
	* List of Schools
	* @type {Array}
	*/
	all: [
		'Alabama A&M', 
		'Alabama State', 
		'Albany State',
		'Alcorn State', 
		'Arkansas–Pine Bluff',
		'Bishop State CC', 
		'Bluefield State', 
		'Bowie State', 
		'Central State', 
		'Cheyney', 
		'Coahoma CC', 
		'Coppin State', 
		'Delaware State', 
		'Elizabeth City State', 
		'Fayetteville State', 
		'Florida A&M', 
		'Fort Valley State', 
		'Gadsden State CC', 
		'Grambling State', 
		'Harris–Stowe', 
		'Hinds CC', 
		'Jackson State', 
		'Kentucky State', 
		'Langston', 
		'Lincoln (Missouri),', 
		'Lincoln (Pennsylvania)', 
		'Maryland Eastern Shore', 
		'Mississippi Valley State', 
		'Morgan State', 
		'Norfolk State', 
		'North Carolina A&T', 
		'North Carolina Central', 
		'Prairie View A&M', 
		'Savannah State', 
		'Shelton State CC', 
		'South Carolina State', 
		'Southern', 
		'Southern–New Orleans', 
		'Southern–Shreveport', 
		'Tennessee State', 
		'Texas Southern', 
		'UDC', 
		'UVI', 
		'Virginia State', 
		'West Virginia State', 
		'Winston-Salem State',
		'Allen Arkansas Baptist', 
		'Barber–Scotia', 
		'Benedict', 
		'Bennett', 
		'Bethune-Cookman', 
		'Claflin', 
		'Clark Atlanta', 
		'Concordia Alabama', 
		'Dillard', 
		'Edward Waters', 
		'Fisk', 
		'Florida Memorial University', 
		'Hampton', 
		'Howard', 
		'Huston–Tillotson', 
		'Interdenominational Theological Center', 
		'Jarvis Christian', 
		'Johnson C. Smith', 
		'Knoxville', 
		'Lane', 
		'LeMoyne–Owen', 
		'Livingstone', 
		'Meharry', 
		'Miles', 
		'Morehouse', 
		'Morehouse School of Medicine', 
		'Morris Brown', 
		'Morris', 
		'Oakwood', 
		'Paine', 
		'Paul Quinn', 
		'Philander', 
		'Smith', 
		'Rust', 
		'Selma', 
		'Shaw Simmons College', 
		'Southwestern Christian', 
		'Spelman', 
		'Stillman', 
		'St. Augustine\'s', 
		'Talladega', 
		'Texas College', 
		'Tougaloo', 
		'Tuskegee', 
		'Virginia Union', 
		'Virginia University', 
		'Voorhees', 
		'Wilberforce', 
		'Wiley', 
		'Xavier'
	],

	/**
	* Get a random school from the list
	* @return {string} The name of a HBCU
	*/
	get: function(){
		var l = this.all.length-1;
		return this.all[ Math.floor( Math.random() * l ) ];
	},

	/**
	* Get a specified number of random schools from the list
	* @return {array} Array of random HBCU names
	*/
	random: function random(number){
		if (number === undefined) {
			return this.get();
		} else {
			var randomItems = [];
			for (var i = 0; number > i;  i++) {
				randomItems.push(this.get());
			};
			return randomItems;
		}
	}

};