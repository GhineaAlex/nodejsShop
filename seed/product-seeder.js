var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping', { useNewUrlParser: true, useUnifiedTopology: true });

var Product = require('../models/product');

var products = [
	new Product({
		imagePath: 'https://images-na.ssl-images-amazon.com/images/I/61XR69YH1ML.jpg',
		title: 'Age of Empires',
		description: 'Game',
		price: 10
	}),
	new Product({
		imagePath: 'https://images-na.ssl-images-amazon.com/images/I/81Y0jXopZ6L._SL1000_.jpg',
		title: 'age of empires 3',
		description: 'Gae',
		price: 50
	})
];

var done = 0;

for ( var i = 0; i < products.length; i++){
	products[i].save(function(err, result){
		done++;
		if( done === products.length){
			//ne asiguram ca toate produsele sunt salvate in DB
			exit();
		}
	});
	//save a model to the database
}

function exit(){
	mongoose.disconnect();
}