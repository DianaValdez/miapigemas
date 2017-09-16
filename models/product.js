'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema

const ProductSchema = Schema({
	name: String,
	picture: String,
	price: {
		type: Number,
		default: 0
	},
	canpurchase: Boolean,
	soldOut: Boolean,	
})
reviews: [
			{
				stars: Number, 
				body: String, 
				author: String
			},
			
		]

module.exports = mongoose.model('Product', ProductSchema)
//holaohoiuhlboihgbiyh