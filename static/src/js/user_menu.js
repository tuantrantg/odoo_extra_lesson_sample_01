odoo.define('sample_01.UserMenu', function (require) {
    "use strict";

    var core = require('web.core');
    var UserMenu = require('web.UserMenu');

    var QWeb = core.qweb;

    UserMenu.include({
        start: function() {
            var session = this.getSession();
            var res = this._super.apply(this, arguments);

            res.then(function () {
                var $user_menu = self.$('.dropdown-menu');
                $user_menu.append(QWeb.render(
                    "UserMenu.Actions",
                    {session: session}
                ));
            });

            return res;
        },
    });

});