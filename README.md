tinyTweetEmbed
======
![tinyTweetEmbed](http://niuware.com/github/tinyTweetEmbed/images/screen_0.png)

**tinyTweetEmbed** is a simple plugin to embed tweets directly from your TinyMCE editor. Just copy the URL of the tweet and let this plugin transform it into an HTML Tweet card. It uses PHP to connect to the Twitter API to transform the URL. NO API keys required :)

## Installation

Just copy the plugin folder into the tinymce main plugin folder:

```
tinymce/plugins/twembed
```

Additionally copy the php, js and css files to the desired path:

```
php/TweetEmbed.class.php  // Script to connect to Twitter API 
js/tweetembed.js          // Script to instantiate the tinymce and communicate with the PHP file
theme/                    // Styles for TinyMCE
```

##Usage

1. Open the plugin going into the TinyMCE menubar Insert > Embed Tweet.
2. Paste the url of your tweet (something like https://twitter.com/{username}/status/{status-id-number})
3. Click on "Get Tweet Code". After you see the embedcode then click "OK" and thats it.

![tinyTweetEmbed dialog](http://niuware.com/github/tinyTweetEmbed/images/screen_1.png)

You will see just a general design of the card inside TinyMCE:

![tinyTweetEmbed dialog](http://niuware.com/github/tinyTweetEmbed/images/screen_2.png)

But once in your live website you will see something like this:

![tinyTweetEmbed dialog](http://niuware.com/github/tinyTweetEmbed/images/screen_3.png)

**Remember** you need the Twitter Widget js file in your live website in order to render the card correctly. Find out more here:
https://dev.twitter.com/web/javascript/loading

## Example

If you download the repository, just open the **index.html** for a live example. Just add jQuery and the full tinymce script files to the project.

## Author

This application was coded entirely by Erik Lopez.

## License

Licensed under [GNU General Public License v 3.0](https://github.com/niuware/tinyTweetEmbed/blob/master/LICENSE)
