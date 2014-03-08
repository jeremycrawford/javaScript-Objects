var students = [
	{

	  name: 'Austin',
	  age: 73,
	  superPower: 'Eating Soup'
	},
	{
	  name: 'Matt',
	  age: 90000000,
	  superPower: 'Sleeping'
	},
	{
	  name: 'ALF',
	  age: 1,
	  superPower: 'Eating Cats'
	}
]

students.forEach(function(student, index){
	var newDiv = $('<div class="student-container">' + student.name +'</div>')
	$('body').append(newDiv);

	var newDiv = $('<div class="student-age">' + student.name +'</div>')
	$('body').append(ageDiv);
})