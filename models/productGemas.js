'use strict'
//estructura de mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = Schema({

	name: String,
	price: Number,
	img: {
		type: String,
		enum: ['diam.png','zafir.png','rubi.png']
	},
	stock: Number,
	discounts: {
		type: Number,
		enum: ['10','15','25','35']
	},
	
	reviews:{
				
				stars: ['1','2','3','4','5'], 
				coment: String, 
				author: String,
				
	},
});

			
		

module.exports = mongoose.model('ProductGemas', ProductSchema)
//holaohoiuhlboihgbiyh