var fb = new Application();

fb.Router = Backbone.Router.extend({

    routes: {
        "":                         "earlyaccess",
        "me":                       "me",
        "revoke":                   "revoke",
        "post":                     "post",
        //"postui":                   "postui",
        "logout":                   "logout",
        "login":                    "login"
    },

    initialize: function() {
        // Caching the Welcome View
        this.welcomeView = new fb.views.Welcome({model: fb.user});
    },

    earlyaccess: function () {
        $('#content').html(this.welcomeView.el);
    },

    me: function () {
        this.person('me');
    },

    post: function () {
    //    $('#content').html('<div class="breadcrumb api">FB.api("/me/feed", "post", data);</div>');
        $('#contentactions').append(new fb.views.Post().el);
    },

    postui: function () {
    //    $('#content').html('<div class="breadcrumb api">FB.ui();</div>');
        $('#contentactions').html(new fb.views.PostUI().el);
    },

    revoke: function () {
    //    $('#content').html('<div class="breadcrumb api">FB.api("/me/permissions", "delete");</div>');
        $('#contentactions').html(new fb.views.Revoke().el);
    },

    showErrorPage: function () {
        $('#contentactions').html(new fb.views.Error().el);
    },

    logout: function () {
      FB.logout()
    },

    login: function () {
      FB.login(function(response) {
      }, {scope: 'publish_actions'});
    }

});

$(document).on('ready', function() {
    fb.user = new fb.models.Person(); // Holds the authenticated Facebook user
    // Load HTML templates for the app
    fb.templateLoader.load(['shell', 'welcome', 'login', 'post', 'postui', 'error', 'revoke'], function () {
        fb.shell = new fb.views.Shell({el: "#shell", model: fb.user});
        fb.router = new fb.Router();
        Backbone.history.start();
    });
});

$(document).on('fbStatusChange', function (event, data) {
    if (data.status === 'connected') {
        FB.api('/me', function (response) {
            fb.user.set(response); // Store the newly authenticated FB user
        });
    } else {
        fb.user.set(fb.user.defaults); // Reset current FB user
    }
});

