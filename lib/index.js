"use strict";

const emojer = require("emojer")
    , emojis = require("github-api-emojis/lib/map")

module.exports = function showdownEmoji () {
    return [
        {
            type: "output"
          , filter: text => emojer(text, "<img src=\"https://github.global.ssl.fastly.net/images/icons/emoji/__EMOJI_NAME__.png?v5\" alt=\":__EMOJI_NAME__:\" title=\":__EMOJI_NAME__:\" class=\"emoji-img emoji\">", emojis)
        }
    ]
}
