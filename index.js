//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js')
const { conn } = require('./src/db.js')
const { getTemperamentsAndSendThemToDb } = require('./src/controllers/dbFunctions')
const { PORT } = process.env

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
	server.listen(PORT, () => {
		console.log(`%s listening at ${PORT}`) // eslint-disable-line no-console
	})
})

getTemperamentsAndSendThemToDb()

//Configuracion a heroku
/* 

---------------------EN DB
const { DATABASE_URL } = process.env 

const sequelize = new Sequelize(DATABASE_URL, {
	logging: false, // set to console.log to see the raw SQL queries
	native: false, // lets Sequelize know we can use pg-native for ~30% more speed
	dialectOptions: {
		ssl: {
			require: true,
			rejectUnauthorized: false,
		},
	},
})
---------------------EN APP se importa la url del deploy y se pone en vez del localhost 
const { CORS_URL } = process.env

server.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', CORS_URL) // update to match the domain you will make the request from


---------------------EN INDEX se cambia el puerto por el automatico de heroku
const { PORT } = process.env

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
	server.listen(PORT, () => {
		console.log(`%s listening at ${PORT}`) // eslint-disable-line no-console
	})
})


---------------------EN package.json SE CAMBIA NODEMON A NODE .
"scripts": {
		"start": "node .", 
		"test": "mocha -w .........................
	},

*/
