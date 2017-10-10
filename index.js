'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const ProductGemas = require('./models/productGemas');


const app = express();

const port = process.env.PORT || 3002

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//app.get(`/api/product/:productId`, productCtrl.getProducts)
//app.post(`/api/product`,productCtrl.saveProduct)






//******************PUT***************************

app.put('/api/productGemas/:productGemasId',(req,  res) =>{
	let productGemasId = req.params.productGemasId
	let update = req.body
	
	ProductGemas.findByIdAndUpdate(productGemasId, update, (err, productGemasUpdated)=>{
		//productGemas.push(update);
			if (err) res.status(500).send({message: `Error al actualizar la gema ${err}`})
				res.status(200).send({productGemas: productGemasUpdated})
		
	})

});









//*******************DELETE*********************
app.delete('/api/productGemas/:productGemasId', (req, res)=> {
		let productGemasId = req.params.productGemasId
		ProductGemas.findById(productGemasId, (err, productGemas)=>{
			if (err) res.status(500).send({message: `Error al borrar la gema ${err}`})
			productGemas.remove(err=>{
				
				if (err) res.status(500).send({message: `Error al eliminar la gema ${err}`})
						res.status(200).send({message: `Producto eliminado`})
			})
		})
  		
});

//*************************GET-ALL***********************

app.get('/api/productGemas/', (req,res)=>{
	ProductGemas.find({}, (err, productGemas)=>{
		//con esto obtengo mi callback
		if(err) return res.status(500).send({message: `Error al realizar la peticion  de la gema ${err}`})
		if(!productGemas) return res.status(400).send({message: `La gema no existe`})
		res.status(200).send({productGemas});
	})
});
//****************GET-ONE PRODUCT*************************
app.get('/api/productGemas/:productGemasId', (req,res)=>{
	let productGemasId = req.params.productGemasId

	ProductGemas.findById(productGemasId, (err, productGemas)=>{
		if(err) return res.status(500).send({message: `Error al realizar la peticion de la gema ${err}`})
		if(!productGemas) return res.status(400).send({message: `La gema no existe`})
		res.send(200,{productGemas});	
	})
});
//*******************POST*****************************
app.post('/api/productGemas', (req,res)=>{
	console.log(req.body)
	let productGemas = new ProductGemas()
	productGemas.name = req.body.name;
	productGemas.price = req.body.price;
	productGemas.img = req.body.img;
	productGemas.stock = req.body.stock;
	productGemas.discounts = req.body.discounts;
	productGemas.reviews = req.body.reviews;
	



	productGemas.save((err,productGemasStored)=>{
		if(err) res.status(500).send({message:`Error al registrar la gema en la BD: ${err}`})
			
		res.status(200).send({productGemas: productGemasStored})
	});
})

/*
app.listen(port, ()=>{
	console.log(` API REST corrientdo en localhost:${port}`)
}); */
//shop


//******************CONEXION MONGODB*******************
mongoose.connect('mongodb://localhost:27017/store',(err, res)=>{
	if(err){
		return console.log('Error al conectar con la BD: ${err}')
	}
	console.log('La conexión fue exitosa')
	app.listen(port, ()=>{
		console.log(`API REST corriendo en localhost:${port}`)
	})
})