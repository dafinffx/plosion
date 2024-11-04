const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.get('/callback', async (req, res) => {
    const code = req.query.code; // Get the authorization code
    const tokenResponse = await fetch('https://discord.com/api/oauth2/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            'client_id': '1301190119532920832',
            'client_secret': 'PJAHvwYl-XaIkE4Dt5bmj5duef3CZR_L',
            'grant_type': 'authorization_code',
            'code': code,
            'redirect_uri': 'https://rizqanaldafin.my.id',
        })
    });

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    // Fetch user info using the access token
    const userResponse = await fetch('https://discord.com/api/users/@me', {
        headers: {
            'Authorization': `Bearer ${accessToken}`,
        },
    });

    const userData = await userResponse.json();
    const discordUsername = userData.username; // Get the username

    // Here you can redirect back to your frontend and send the username
    res.redirect(`https://rizqanaldafin.my.id?discordUsername=${encodeURIComponent(discordUsername)}`);
});
