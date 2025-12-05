const express = require('express');
const app = express();

// Route for redirection
app.get("/",(req,res)=>{
    res.status(200).json(
        "welcome to the Meet-mux"
    );
});

app.get('/getapp/:id', (req, res) => {

    const {id} = req.params;
    const userAgent = req.headers['user-agent']; // Extract the user-agent string
    
    if (/android/i.test(userAgent)) {
        // Redirect to Play Store if Android device
        res.redirect(`https://apps.apple.com/in/app/meetmux/id6747908089`);
    } else if (/iphone|ipad|ipod/i.test(userAgent)) {
        // Redirect to App Store if iOS device
        res.redirect(`https://play.google.com/store/apps/details?id=com.flow.meetmux&pcampaignid=web_share`);
        // res.redirect('https://apps.apple.com/in/app/meetmux/id6747908089');
    } else {
        // Redirect to your website for unsupported platforms
        res.redirect('https://altrodav.com/');
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
