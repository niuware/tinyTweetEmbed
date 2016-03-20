<?php

namespace Niuware {

    class TweetEmbedClass {
        
        private $twitter;
        
        public function __construct() { }
        
        public function postEmbedTweet($params = array())
        {
            if (isset($params['url'])) {
                
                $paramsArray = array(
                    "url" => filter_var($params['url'], FILTER_SANITIZE_URL),
                    "omit_script" => $params['om_script'],
                    "align" => "center",
                    "hide_media" => $params['cards'],
                    "hide_thread" => $params['threads']
                    );
                    
                $query = http_build_query($paramsArray);
                
                $response = json_decode(file_get_contents("https://api.twitter.com/1.1/statuses/oembed.json?" . $query));
                
                if (isset($response->html))
                {
                    header("content-type:application/json");
                    echo json_encode(array("oembed" => "<p>" . $response->html . "</p>&nbsp;"));
                }
            }
        }
    }
    
    if (filter_input(\INPUT_SERVER, 'REQUEST_METHOD') == "POST") {
        
        $demo = new TweetEmbedClass();

        $demo->postEmbedTweet(filter_input(INPUT_POST, 'params', FILTER_DEFAULT, FILTER_REQUIRE_ARRAY));
    }
}

