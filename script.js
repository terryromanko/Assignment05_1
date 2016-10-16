function cars()
{
	return {
		"name" : "Porsche",
		"model" : [{
				"carName" : "718 Cayman S",
				"horsepower" : 350,
				"price" : 66300
			},
			{
				"carName" : "911 GT3 RS",
				"horsepower" : 500,
				"price" : 175900
			},
			{
				"carName" : "Panamera Turbo S Executive",
				"horsepower" : 570,
				"price" : 200500
			}]	
	};
}

function showCar(name)
{
	for (var i = 0; i < name.model.length; i++)
	{
		var type = name.model[i];
		alert("Model: " +type.carName+ " | Horsepower: " +type.horsepower+ " | Price: " +name.price);
	}
}


$(document).ready(function()
{
	$(".button").click(function()
	{
		var car = cars();
		showCar(car);
	});
});