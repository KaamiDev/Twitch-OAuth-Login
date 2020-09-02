require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));

app.get('/auth', (req, res) => {
	res.sendFile('/auth.html', { root: __dirname });
});

app.get('/', (req, res) => {
	res.redirect(
		`https://id.twitch.tv/oauth2/authorize?client_id=${process.env.CLIENT_ID}&redirect_uri=${process.env
			.REDIRECT_URI}&response_type=token&scope=chat:read chat:edit user_follows_edit&force_verify=true`
	);
});

const PORT = 3000;
app.listen(PORT, () => {
	console.log('Server started. Now listening on port ' + PORT);
});
