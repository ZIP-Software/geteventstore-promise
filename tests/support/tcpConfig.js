export default {
	hostname: process.env.ES_HOST || 'localhost',
	port: 2116,
	credentials: {
		username: 'admin',
		password: 'changeit'
	},
	poolOptions: {
		autostart: false,
		max: 10,
		min: 0
	}
};