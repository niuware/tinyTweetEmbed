var TweetEmbedJs = (function() {

    'use strict';

    var instance;

    function init() {

        return {
            load: function() {

                $(document).ready(function() {

                    $('#content').tinymce({
                        script_url: "js/tinymce/tinymce.min.js",
                        convert_urls: false,
                        relative_urls: false,
                        theme: "modern",
                        width: 700,
                        height: 250,
                        plugins: [
                            "save advlist autolink lists link image charmap preview anchor",
                            "searchreplace visualblocks code fullscreen",
                            "media table paste importcss template autosave twembed"
                        ],
                        menubar: "edit insert view format table tools",
                        toolbar: "save | undo redo | paste | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media template",
                        contextmenu: "link image media",
                        toolbar_items_size: 'small',
                        content_css: "theme/tinymce/tweetembed.css",
                        image_advtab: true,
                        save_enablewhendirty: false
                    });

                });
            },

            apiPost: function(args) {
                $.ajax({
                    url: "php/TweetEmbed.class.php",
                    type: "POST",
                    timeout: 40000,
                    data: { params : args }
                })
                .done(function(response) {
                    $('.mce-twapicode-class').val(response.oembed);
                })
                .fail(function(e, c) {});
            }
        };
    }

    return {

        getInstance: function() {

            if (!instance) {

                instance = init();
            }

            return instance;
        }
    };
} ());

var TweetEmbed = TweetEmbedJs.getInstance();

TweetEmbed.load();