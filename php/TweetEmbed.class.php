<?php

namespace Niuware {

    class TweetEmbed {
        
        public static function getOembedTweet($params = array())
        {
            if (isset($params['url'])) {

                $linkColor = ltrim($params['linkcolor'], '#');
                
                $paramsArray = array(
                    "url" => filter_var($params['url'], FILTER_SANITIZE_URL),
                    "omit_script" => $params['omit_script'],
                    "align" => "center",
                    "hide_media" => $params['hide_media'],
                    "hide_thread" => $params['hide_thread'],
                    "widget_type" => ($params['is_video'] === "true") ? "video" : "",
                    "theme" => ($params['theme'] === "true") ? "dark" : "light",
                    "link_color" => (ctype_xdigit($linkColor)) ? "#" . $linkColor : "",
                    "maxwidth" => (is_numeric($params['maxwidth'])) ? $params['maxwidth'] : ""
                );
                    
                $query = http_build_query($paramsArray);
                
                $response = json_decode(file_get_contents("https://publish.twitter.com/oembed?" . $query));
                
                if (isset($response->html))
                {
                    header("content-type:application/json");
                    echo json_encode(array("oembed" => "<p>" . $response->html . "</p>&nbsp;"));
                }
            }
        }
    }
    
    if (filter_input(\INPUT_SERVER, 'REQUEST_METHOD') == "POST") {

        TweetEmbed::getOembedTweet(filter_input(INPUT_POST, 'params', FILTER_DEFAULT, FILTER_REQUIRE_ARRAY));
    }
}

