/*global tinymce:true,TweetEmbed */

tinymce.PluginManager.add('twembed', function(editor) {

    'use strict';

    function showDialog() {
        editor.windowManager.open({
            title: 'Embed tweet',
            bodyType: 'tabpanel',
            body: [
                {
                    title: 'General',
                    type: 'form',
                    items: [
                        {
                            type: 'textbox', name: 'twurl', size: 40, label: 'Tweet url', classes: 'twurl-class'
                        },
                        {
                            type: 'textbox', name: 'twapicode', multiline: true, label: 'Tweet embedcode', style: 'height: 60px;',
                            classes: 'twapicode-class'
                        },
                        {
                            type: 'button', name: 'twapi', size: 10, label: ' ', text: 'Get tweet code',
                            onclick: function() {

                                if ($('.mce-twurl-class').val() !== "") {
                                    TweetEmbed.apiPost({
                                        url: $('.mce-twurl-class').val(),
                                        id: '.mce-twapicode-class',
                                        omit_script: true,
                                        hide_media: !$('.mce-twmedia-class').hasClass('mce-checked'),
                                        hide_thread: !$('.mce-twthread-class').hasClass('mce-checked'),
                                        is_video: $('.mce-twvideo-class').hasClass('mce-checked'),
                                        theme: $('.mce-twtheme-class').hasClass('mce-checked'),
                                        maxwidth: $('.mce-twmaxwidth-class').val(),
                                        linkcolor: $('.mce-twlinkcolor-class').val()
                                    });
                                }
                            }
                        }
                    ]
                },
                {
                    title: 'Design',
                    type: 'form',
                    items: [
                        {
                            type: 'textbox', name: 'maxwidth', size: 20, label: 'Maxwidth', classes: 'twmaxwidth-class'
                        },
                        {
                            type: 'textbox', name: 'linkcolor', size: 20, label: 'Link color', classes: 'twlinkcolor-class'
                        },
                        {
                            type: 'checkbox', name: 'theme', text: 'Dark background', classes: 'twtheme-class'
                        }
                    ]
                },
                {
                    title: 'Advanced',
                    type: 'form',
                    items: [
                        {
                            type: 'checkbox', name: 'media', text: 'Show media', classes: 'twmedia-class'
                        },
                        {
                            type: 'checkbox', name: 'conversation', text: 'Show threads', classes: 'twthread-class'
                        },
                        {
                            type: 'checkbox', name: 'video', text: 'Load as video', classes: 'twvideo-class'
                        }
                    ]
                }
            ],
            onsubmit: function(e) {
                if (e.data.twapicode !== "") {
                    editor.execCommand('mceInsertContent', false, e.data.twapicode);
                }
            }
        });
    }

    editor.addMenuItem('twembed', {
        text: 'Embed tweet',
        context: 'insert',
        onclick: showDialog
    });
});