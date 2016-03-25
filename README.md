# v2site
Front end web development. This is the new website code, built for the new version 2 engine.

Make changes to develop branch and when happy, send a pull request... the usual. If you feel you can be a regular contributor & wan to join us... get in touch, there is a load of stuff to be done, not documented here yet, but will be coming on as time permits us.

To get it working locally:
1. Check out the repo (Make changes to the develop branch only please as far as possible)

2. copy mainsite/js/facebook.js.sample to mainsite/js/facebook.js 

3. Edit this new facebook.js

Look for this section & change the appId to your developer app id on facebook
```
    FB.init({
        appId: '12345changeme', // App ID
        channelUrl: '//localhost/channel.html', // Channel File
        status: true, // check login status
        cookie: true, // enable cookies to allow the server to access the session
        xfbml: true  // parse XFBML
    });
```

4. Thats it! Run jekyll serve & begin fixing the code ;)

5. **Bonus**  submit your fixes  to us
