// @see https://codemyui.com/clean-word-scrambler-effect/
module.exports = function (el) {
    'use strict';

    let m = el;

    m.init = function () {
        m.codeletters = "&*+%;@$_/<>";
        m.message = el.textContent;
        m.current_length = el.textContent.length;
        m.fadeBuffer = false;
        m.animateFadeBuffer();
    };

    m.animateFadeBuffer = function () {
        let i;
        if (m.fadeBuffer === false) {
            m.fadeBuffer = [];
            for (i = 0; i < m.message.length; i++) {
                m.fadeBuffer.push({c: (Math.floor(Math.random() * 12)) + 1, l: m.message.charAt(i)});
            }
        }

        let do_cycles = false;
        let message = '';

        for (i = 0; i < m.fadeBuffer.length; i++) {
            let fader = m.fadeBuffer[i];
            if (fader.c > 0) {
                do_cycles = true;
                fader.c--;
                message += m.codeletters.charAt(Math.floor(Math.random() * m.codeletters.length));
            } else {
                message += fader.l;
            }
        }

        el.innerHTML = escapeHtml(message);

        if (do_cycles === true) {
            setTimeout(m.animateFadeBuffer, 100);
        } else {
            setTimeout(m.init, 5000);
        }
    };

    m.init();
};

function escapeHtml(text) {
    let map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };

    return text.replace(/[&<>"']/g, function (m) {
        return map[m];
    });
}
