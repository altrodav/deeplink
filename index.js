const express = require('express');
const app = express();

// Route for redirection
app.get("/",(req,res)=>{
    res.status(200).json(
        "welcome to the 8 Store API"
    );
});

app.get('/getapp', (req, res) => {
    const userAgent = req.headers['user-agent']; // Extract the user-agent string
    
    if (/android/i.test(userAgent)) {
        // Redirect to Play Store if Android device
        res.redirect('https://play.google.com/store/apps/details?id=com.profcymasolutions.meetx');
    } else if (/iphone|ipad|ipod/i.test(userAgent)) {
        // Redirect to App Store if iOS device
        res.redirect('https://altrodav.com');
    } else {
        // Redirect to your website for unsupported platforms
        res.redirect('https://altrodav.com');
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
