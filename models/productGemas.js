'use strict'
//estructura de mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = Schema({

	name: String,
	price: Number,
	img:   String,
	stock: Number,
	discounts: {
		type: Number,
		enum: [10,15,25,35]
	},
	
	reviews : [
		{
			
			stars: Number, 
			comment: String, 
			author: String	
		}	
	]

});

			
		

module.exports = mongoose.model('ProductGemas', ProductSchema)
//holaohoiuhlboihgbiyh