

var car = {
	make: 'toyota',
	color: 'red',
	age: 11,
	maintenance: ['oil', 'tires', 'gas'],
	explode: false,

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

