tinyTweetEmbed
======
![tinyTweetEmbed](http://niuware.github.io/public/assets/tinyTweetEmbed/images/screen_0.png)

**tinyTweetEmbed** is a simple plugin to embed tweets directly into your TinyMCE editor. Just copy the URL of the tweet and let this plugin transform it into an HTML Tweet card. It uses PHP to connect to the Twitter API to transform the URL. **NO API keys required** :)

## Installation

Copy the plugin folder into the tinymce main plugin folder:

```
tinymce/plugins/twembed
```

Additionally copy the php, js and css files to the desired path. The *php* and *theme* paths can be configured in the `js/tweetembed` script file:

```
php/TweetEmbed.class.php  // Script to connect to Twitter API 
js/tweetembed.js          // Script to instantiate the tinymce and communicate with the PHP file
theme/                    // Styles for TinyMCE
```

## Requirements

1. jQuery
2. TinyMCE
3. Twitter [Javascript API](https://developer.twitter.com/en/docs/twitter-for-websites/javascript-api/guides/set-up-twitter-for-websites)

## Usage

1. Open the Tweet Embed plugin navigating through the TinyMCE menubar Insert > Embed Tweet.
2. Paste the url of your tweet (something like https://twitter.com/{username}/status/{status-id}).   
2.1 Optionally configure any desired advanced parameters for your embeded tweet.
3. Click on "Get Tweet Code". After you see the embedcode then click "OK" to insert it into the editor.

![tinyTweetEmbed dialog](http://niuware.github.io/public/assets/tinyTweetEmbed/images/screen_1.png)

You will see a simple design of the card inside the TinyMCE editor:

![tinyTweetEmbed dialog](http://niuware.github.io/public/assets/tinyTweetEmbed/images/screen_2.png)

But in your website you will see the full tweet card like this:

![tinyTweetEmbed dialog](http://niuware.github.io/public/assets/tinyTweetEmbed/images/screen_3.png)

Remember you need the Twitter Javascript API file in your live website in order to render the card correctly. Find out more [here](https://developer.twitter.com/en/docs/twitter-for-websites/javascript-api/guides/set-up-twitter-for-websites).

## Example

If you download the repository, just open the **index.html** for a live example. Just add jQuery and the full tinymce script files to the project.

## Author

This plugin was coded by Erik Lopez.

## License

Licensed under [GNU General Public License v 3.0](https://github.com/niuware/tinyTweetEmbed/blob/master/LICENSE)
