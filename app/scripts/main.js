var car = {
	make: 'toyota',
	color: 'red',
	age: 11,
	maintenance: ['oil', 'tires', 'gas'],
	explode: false,

//This function is considered a method because it belongs to an object

	crash: function(lifetime){
		lifetime.explode = true
		return 'BOOM'
	}
};

var engine = {
	size: 8,
	speed: 1000,
	hp: 320,
	explode: false,
};


var body = {
	size: 8,
	speed: 1000,
	hp: 320,
	explode: false,
};

//here you deine the function
//here you deine the function
//here you deine the function

//This function is considered a function because it's not part of an object.

function fullName(first, middle, last) {
	return first + ' ' + middle[0] + '. ' + last
}

//here you use the function
//here you use the function
//here you use the function

var jeremy = {
	firstName: 'Jeremy',
	middleName: 'Paul',
	lastName: 'Crawford'
}

fullName(jeremy.firstName, jeremy.middleName, jeremy.lastName)

fullName('Steve', 'John', 'Billford')
fullName('Guy', 'On', 'Buffalo')



//create a 
// New Function

var prices = {
  pepperoni: 5.50,
  squid: 1,
  tomatoes: 0,
  cheese: 100.00,
  anchovies: -5
}

function calculatePrice (toppingOne, toppingTwo, toppingThree){
  var price = prices[toppingOne] + prices[toppingTwo] + prices[toppingThree];
  return price
}


calculatePrice('squid', 'anchovies', 'cheese')

var me {
	firstName: 'Jeremy',
	middleInitial: 'P',
	lastName: 'Crawford'
}

me.firstName















