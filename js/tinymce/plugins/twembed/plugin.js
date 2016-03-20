/*global tinymce:true */

tinymce.PluginManager.add('twembed', function(editor) {
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
                                        om_script: true,
                                        cards: !$('.mce-twcard-class').hasClass('mce-checked'),
                                        threads: !$('.mce-twthread-class').hasClass('mce-checked')
                                    });
                                }
                            }
                        }
                    ]
                },
                {
                    title: 'Advanced',
                    type: 'form',
                    items: [
                        {
                            type: 'checkbox', name: 'cards', text: 'Show cards', classes: 'twcard-class', checked: 'checked'
                        },
                        {
                            type: 'checkbox', name: 'conversation', text: 'Show threads', classes: 'twthread-class'
                        },
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