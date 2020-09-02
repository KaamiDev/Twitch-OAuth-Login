// import modules
const express = require('express');
const app = express();

// oauth information
const CLIENT_ID = '';
const REDIRECT_URI = 'http://localhost:3000/auth';

// auth route
app.get('/auth', (req, res) => {
	// send html file
	res.sendFile('/auth.html', { root: __dirname });
});

// main route
app.get('/', (req, res) => {
	// redirect to get request for oauth login
	res.redirect(
		`https://id.twitch.tv/oauth2/authorize?client_id=${process.env.CLIENT_ID}&redirect_uri=${process.env
			.REDIRECT_URI}&response_type=token&scope=chat:read chat:edit user_follows_edit&force_verify=true`
	);
});

// listen to port
const PORT = 3000;
app.listen(PORT, () => {
	console.log('Server started. Now listening on port ' + PORT);
});
