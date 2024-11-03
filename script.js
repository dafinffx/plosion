function onGoogleSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId());
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());

    const id_token = googleUser.getAuthResponse().id_token;
    console.log('ID Token: ' + id_token);
    // Send the ID token to your server to validate the user

    // Display the profile image
    const profileImage = document.getElementById('profileImage');
    profileImage.src = profile.getImageUrl();
    profileImage.classList.remove('d-none');
}
