this["HACKLE_HBS"] = this["HACKLE_HBS"] || {};
this["HACKLE_HBS"]["Templates"] = this["HACKLE_HBS"]["Templates"] || {};

this["HACKLE_HBS"]["Templates"]["src/hbs/footer.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<footer>\n    <p class=\"copyright\">&copy; <a href=\"//github.com/";
  if (helper = helpers.author) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.author); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.author) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.author); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></p>\n</footer>\n";
  return buffer;
  });

this["HACKLE_HBS"]["Templates"]["src/hbs/gist-entry.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"flex\">\n    <div class=\"item item-owner\">\n        <figure id=\"owner-"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.gistEntry)),stack1 == null || stack1 === false ? stack1 : stack1.owner)),stack1 == null || stack1 === false ? stack1 : stack1.identity)),stack1 == null || stack1 === false ? stack1 : stack1.value)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"owner\">\n            <img src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.gistEntry)),stack1 == null || stack1 === false ? stack1 : stack1.owner)),stack1 == null || stack1 === false ? stack1 : stack1.avatar)),stack1 == null || stack1 === false ? stack1 : stack1.avatarUrl)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"avatar\">\n            <figcaption>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.gistEntry)),stack1 == null || stack1 === false ? stack1 : stack1.owner)),stack1 == null || stack1 === false ? stack1 : stack1.ownerName)),stack1 == null || stack1 === false ? stack1 : stack1.value)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</figcaption>\n        </figure>\n    </div>\n    <div class=\"item\">\n        <p class=\"description\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.gistEntry)),stack1 == null || stack1 === false ? stack1 : stack1.gist)),stack1 == null || stack1 === false ? stack1 : stack1.gistDescription)),stack1 == null || stack1 === false ? stack1 : stack1.value)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n        <p class=\"gist\"><a href=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.gistEntry)),stack1 == null || stack1 === false ? stack1 : stack1.gist)),stack1 == null || stack1 === false ? stack1 : stack1.gistUrl)),stack1 == null || stack1 === false ? stack1 : stack1.value)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.gistEntry)),stack1 == null || stack1 === false ? stack1 : stack1.gist)),stack1 == null || stack1 === false ? stack1 : stack1.gistUrl)),stack1 == null || stack1 === false ? stack1 : stack1.value)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></p>\n        <ul class=\"meta\">\n            <li>updated at: "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.updatedAtDate)),stack1 == null || stack1 === false ? stack1 : stack1.month)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "."
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.updatedAtDate)),stack1 == null || stack1 === false ? stack1 : stack1.day)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "."
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.updatedAtDate)),stack1 == null || stack1 === false ? stack1 : stack1.fullYear)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</li>\n            <li>created at: "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.createdAtDate)),stack1 == null || stack1 === false ? stack1 : stack1.month)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "."
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.createdAtDate)),stack1 == null || stack1 === false ? stack1 : stack1.day)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "."
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.createdAtDate)),stack1 == null || stack1 === false ? stack1 : stack1.fullYear)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</li>\n        </ul>\n    </div>\n</div>\n";
  return buffer;
  });

this["HACKLE_HBS"]["Templates"]["src/hbs/header.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<header>\n    <h1 class=\"heading\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h1>\n</header>\n";
  return buffer;
  });;var DEMO;
(function (DEMO) {
    var Application = (function () {
        function Application() {
        }
        Application.prototype.ready = function () {
            FastClick.attach(document.body);

            var controller = new DEMO.Controller();
            controller.start();
        };
        return Application;
    })();

    $(function () {
        var demo = new Application();
        demo.ready();
    });
})(DEMO || (DEMO = {}));
;var DEMO;
(function (DEMO) {
    var Controller = (function () {
        function Controller() {
            this.layout = new DEMO.Layout();
        }
        Controller.prototype.start = function () {
            var layout = this.layout;
            var promise = ControllerRepository.promise();

            promise.done(function (responseJsonFromGistsAPI) {
                var factory = new DEMO.GistsViewModelFactory(responseJsonFromGistsAPI);
                var gistEntryViewModels = factory.createGistEntryListViewModel();

                var gistEntryListView = new DEMO.GistEntryListView(gistEntryViewModels);
                layout.display(gistEntryListView.$el);
            });
        };
        return Controller;
    })();
    DEMO.Controller = Controller;

    var ControllerRepository = (function () {
        function ControllerRepository() {
        }
        ControllerRepository.promise = function () {
            return Infra.GistsAPI.resolve();
        };
        return ControllerRepository;
    })();
    DEMO.ControllerRepository = ControllerRepository;
})(DEMO || (DEMO = {}));
;var Infra;
(function (Infra) {
    var GistsAPI = (function () {
        function GistsAPI() {
        }
        GistsAPI.resolve = function () {
            var apiPath = 'https://api.github.com/gists';

            return $.ajax({ type: 'get', url: apiPath, dataType: 'jsonp', async: true });
        };
        return GistsAPI;
    })();
    Infra.GistsAPI = GistsAPI;
})(Infra || (Infra = {}));
;var DDD;
(function (DDD) {
    var Entity = (function () {
        function Entity(identity) {
            this.identity = identity;
        }
        Entity.prototype.getIdentity = function () {
            return this.identity;
        };

        Entity.prototype.equals = function (other) {
            return this.getIdentity() === other.getIdentity();
        };
        return Entity;
    })();
    DDD.Entity = Entity;
})(DDD || (DDD = {}));
;var DDD;
(function (DDD) {
    var Identity = (function () {
        function Identity(value) {
            this.value = value;
        }
        Identity.prototype.getValue = function () {
            return this.value.toString();
        };

        Identity.prototype.getIdentity = function () {
            return this.value;
        };
        return Identity;
    })();
    DDD.Identity = Identity;
})(DDD || (DDD = {}));
;
var HACKLE;
(function (HACKLE) {
    var View = (function () {
        function View(viewCreateOptions) {
            if (typeof viewCreateOptions === "undefined") { viewCreateOptions = {}; }
            this.tagName = 'div';
            this.attributes = {};
            this.events = {};
            this.tagName = viewCreateOptions.tagName || 'div';
            this.id = viewCreateOptions.id || '';
            this.className = viewCreateOptions.className || '';
            this.attributes = viewCreateOptions.attributes || {};
            this.$el = isJQuery(viewCreateOptions.$el) ? viewCreateOptions.$el : $('<' + this.tagName + '>');

            this.reflectAttribute();
        }
        View.prototype.render = function () {
            return this;
        };

        View.prototype.reflectTagName = function () {
            this.$el = $('<' + this.tagName + '>');
        };

        View.prototype.reflectAttribute = function () {
            var attributes = {};

            if (this.id !== '') {
                attributes['id'] = this.id;
            }

            if (this.className !== '') {
                attributes['class'] = this.className;
            }

            for (var key in this.attributes) {
                attributes[key] = this.attributes[key];
            }

            this.$el.attr(attributes);
        };

        View.prototype.delegateEvents = function (events) {
            var _this = this;
            $.map(events, function (eventMethodWithData, eventWithSelector) {
                var splitEventMethodWithData = new SplitEventMethodWithData(eventMethodWithData);

                var eventAndSelectorPair = splitEventWithSelector(eventWithSelector);

                _this.$el.on.call(_this.$el, eventAndSelectorPair.eventName, eventAndSelectorPair.selector, splitEventMethodWithData.data, splitEventMethodWithData.method);
            });

            return this;
        };
        return View;
    })();
    HACKLE.View = View;

    function splitEventWithSelector(eventWithSelector) {
        var resultPair = eventWithSelector.split(' ');

        var eventName = resultPair.shift();
        var selector = resultPair.join(' ');

        return {
            'eventName': eventName,
            'selector': selector
        };
    }

    var SplitEventMethodWithData = (function () {
        function SplitEventMethodWithData(methodWithData) {
            this.data = null;
            if (typeof methodWithData === 'object') {
                this.method = methodWithData[0];
                this.data = methodWithData[1];
            } else {
                this.method = methodWithData;
            }
        }
        return SplitEventMethodWithData;
    })();

    var HBSTemplate = (function () {
        function HBSTemplate(hbsName) {
            this.hbsName = hbsName;
        }
        HBSTemplate.prototype.render = function (data) {
            if (typeof data === "undefined") { data = {}; }
            return HACKLE_HBS.Templates[this.hbsName](data);
        };
        return HBSTemplate;
    })();
    HACKLE.HBSTemplate = HBSTemplate;

    var HBSTemplateFromString = (function () {
        function HBSTemplateFromString(hbs) {
            this.hbs = hbs;
        }
        HBSTemplateFromString.prototype.render = function (data) {
            if (typeof data === "undefined") { data = {}; }
            var template = Handlebars.compile(this.hbs);
            var resultHTML = template(data);

            return resultHTML;
        };
        return HBSTemplateFromString;
    })();
    HACKLE.HBSTemplateFromString = HBSTemplateFromString;

    function isJQuery($that) {
        return $that instanceof jQuery;
    }
    HACKLE.isJQuery = isJQuery;
})(HACKLE || (HACKLE = {}));
;var Util;
(function (Util) {
    function isIe6() {
        if (getIeVersion() === '6') {
            return true;
        }
        return false;
    }
    Util.isIe6 = isIe6;

    function isIe7() {
        if (getIeVersion() === '7') {
            return true;
        }
        return false;
    }
    Util.isIe7 = isIe7;

    function isIe8() {
        if (getIeVersion() === '8') {
            return true;
        }
        return false;
    }
    Util.isIe8 = isIe8;

    function getIeVersion() {
        if (navigator.appName.toUpperCase().indexOf('EXPLORER') != -1) {
            return navigator.appVersion.toUpperCase().split(';')[1].charAt(6);
        }
        return null;
    }

    function hasPlaceholder() {
        return 'placeholder' in document.createElement('input');
    }
    Util.hasPlaceholder = hasPlaceholder;

    function isEmpty(str) {
        if (str.length === 0) {
            return true;
        }
        return false;
    }
    Util.isEmpty = isEmpty;

    var DateSplitter = (function () {
        function DateSplitter() {
        }
        DateSplitter.splitFullYear = function (date) {
            return date.getFullYear().toString();
        };

        DateSplitter.splitMonth = function (date) {
            return (date.getMonth() + 1).toString();
        };

        DateSplitter.splitDay = function (date) {
            return date.getDate().toString();
        };
        return DateSplitter;
    })();
    Util.DateSplitter = DateSplitter;
})(Util || (Util = {}));
;var DEMO;
(function (DEMO) {
    var GistEntryFactory = (function () {
        function GistEntryFactory() {
        }
        GistEntryFactory.createGistEntry = function (data) {
            var gistId = new DEMO.Model.GistEntryID(data.id);

            var gist = new DEMO.Model.Gist(new DEMO.Model.GistID(data.id), new DEMO.Model.GistDescription(data.description), new DEMO.Model.GistUrl(data.html_url));

            var owner = new DEMO.Model.Owner(new DEMO.Model.OwnerID(data.owner.id), new DEMO.Model.OwnerName(data.owner.login), new DEMO.Model.OwnerUrl(data.owner.html_url), new DEMO.Model.Avatar(data.owner.avatar_url));

            return new DEMO.Model.GistEntry(gistId, gist, owner);
        };
        return GistEntryFactory;
    })();
    DEMO.GistEntryFactory = GistEntryFactory;
})(DEMO || (DEMO = {}));
;var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var DEMO;
(function (DEMO) {
    (function (Model) {
        var Name = (function () {
            function Name(value) {
                this.value = value;
            }
            return Name;
        })();
        Model.Name = Name;

        var Url = (function () {
            function Url(value) {
                this.value = value;
            }
            return Url;
        })();
        Model.Url = Url;

        var Description = (function () {
            function Description(value) {
                this.value = value;
            }
            return Description;
        })();
        Model.Description = Description;

        var GistID = (function (_super) {
            __extends(GistID, _super);
            function GistID(value) {
                _super.call(this, value);
            }
            return GistID;
        })(DDD.Identity);
        Model.GistID = GistID;

        var Gist = (function (_super) {
            __extends(Gist, _super);
            function Gist(id, gistDescription, gistUrl) {
                _super.call(this, id);
                this.gistDescription = gistDescription;
                this.gistUrl = gistUrl;
            }
            return Gist;
        })(DDD.Entity);
        Model.Gist = Gist;

        var GistDescription = (function (_super) {
            __extends(GistDescription, _super);
            function GistDescription(value) {
                _super.call(this, value);
            }
            return GistDescription;
        })(Description);
        Model.GistDescription = GistDescription;

        var GistUrl = (function (_super) {
            __extends(GistUrl, _super);
            function GistUrl(value) {
                _super.call(this, value);
            }
            return GistUrl;
        })(Url);
        Model.GistUrl = GistUrl;

        var OwnerID = (function (_super) {
            __extends(OwnerID, _super);
            function OwnerID(value) {
                _super.call(this, value);
            }
            return OwnerID;
        })(DDD.Identity);
        Model.OwnerID = OwnerID;

        var Owner = (function (_super) {
            __extends(Owner, _super);
            function Owner(id, ownerName, ownerUrl, avatar) {
                _super.call(this, id);
                this.ownerName = ownerName;
                this.ownerUrl = ownerUrl;
                this.avatar = avatar;
            }
            return Owner;
        })(DDD.Entity);
        Model.Owner = Owner;

        var OwnerName = (function (_super) {
            __extends(OwnerName, _super);
            function OwnerName(value) {
                _super.call(this, value);
            }
            return OwnerName;
        })(Name);
        Model.OwnerName = OwnerName;

        var OwnerUrl = (function (_super) {
            __extends(OwnerUrl, _super);
            function OwnerUrl(value) {
                _super.call(this, value);
            }
            return OwnerUrl;
        })(Url);
        Model.OwnerUrl = OwnerUrl;

        var GistEntryID = (function (_super) {
            __extends(GistEntryID, _super);
            function GistEntryID(value) {
                _super.call(this, value);
            }
            return GistEntryID;
        })(DDD.Identity);
        Model.GistEntryID = GistEntryID;

        var GistEntry = (function (_super) {
            __extends(GistEntry, _super);
            function GistEntry(id, gist, owner) {
                _super.call(this, id);
                this.gist = gist;
                this.owner = owner;
            }
            return GistEntry;
        })(DDD.Entity);
        Model.GistEntry = GistEntry;

        var Avatar = (function () {
            function Avatar(avatarUrl) {
                this.avatarUrl = avatarUrl;
            }
            return Avatar;
        })();
        Model.Avatar = Avatar;

        var AvatarUrl = (function (_super) {
            __extends(AvatarUrl, _super);
            function AvatarUrl(value) {
                _super.call(this, value);
            }
            return AvatarUrl;
        })(Url);
        Model.AvatarUrl = AvatarUrl;

        var AtDate = (function () {
            function AtDate(value) {
                var date = new Date(value);
                this.fullYear = Util.DateSplitter.splitFullYear(date);
                this.month = Util.DateSplitter.splitMonth(date);
                this.day = Util.DateSplitter.splitDay(date);
            }
            return AtDate;
        })();
        Model.AtDate = AtDate;

        var CreatedAtDate = (function (_super) {
            __extends(CreatedAtDate, _super);
            function CreatedAtDate(value) {
                _super.call(this, value);
            }
            return CreatedAtDate;
        })(AtDate);
        Model.CreatedAtDate = CreatedAtDate;

        var UpdatedAtDate = (function (_super) {
            __extends(UpdatedAtDate, _super);
            function UpdatedAtDate(value) {
                _super.call(this, value);
            }
            return UpdatedAtDate;
        })(AtDate);
        Model.UpdatedAtDate = UpdatedAtDate;
    })(DEMO.Model || (DEMO.Model = {}));
    var Model = DEMO.Model;
})(DEMO || (DEMO = {}));
;var DEMO;
(function (DEMO) {
    var GistEntryViewModel = (function () {
        function GistEntryViewModel(gistEntry, createdAtDate, updatedAtDate) {
            this.gistEntry = gistEntry;
            this.createdAtDate = createdAtDate;
            this.updatedAtDate = updatedAtDate;
        }
        return GistEntryViewModel;
    })();
    DEMO.GistEntryViewModel = GistEntryViewModel;
})(DEMO || (DEMO = {}));
;var DEMO;
(function (DEMO) {
    var GistsViewModelFactory = (function () {
        function GistsViewModelFactory(args) {
            this.args = args;
        }
        GistsViewModelFactory.prototype.createGistEntryViewModel = function () {
            var gistEntry = DEMO.GistEntryFactory.createGistEntry(this.args.data[0]);
            var createdAtDate = new DEMO.Model.CreatedAtDate(this.args.data[0].created_at);
            var updatedAtDate = new DEMO.Model.UpdatedAtDate(this.args.data[0].updated_at);

            return new DEMO.GistEntryViewModel(gistEntry, createdAtDate, updatedAtDate);
        };

        GistsViewModelFactory.prototype.createGistEntryListViewModel = function () {
            var gistsEntryViewModel = [];

            $.map(this.args.data, function (obj, key) {
                gistsEntryViewModel.push(new DEMO.GistEntryViewModel(DEMO.GistEntryFactory.createGistEntry(obj), new DEMO.Model.CreatedAtDate(obj.created_at), new DEMO.Model.UpdatedAtDate(obj.updated_at)));
            });

            return gistsEntryViewModel;
        };
        return GistsViewModelFactory;
    })();
    DEMO.GistsViewModelFactory = GistsViewModelFactory;
})(DEMO || (DEMO = {}));
;var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var DEMO;
(function (DEMO) {
    var GistEntryListView = (function (_super) {
        __extends(GistEntryListView, _super);
        function GistEntryListView(viewmodels) {
            _super.call(this);
            this.viewmodels = viewmodels;
            this.tagName = 'section';
            this.className = 'unit';

            this.reflectTagName();
            this.reflectAttribute();
            this.render();
        }
        GistEntryListView.prototype.render = function () {
            this.$el.append(this.renderHeaderTemplate());

            var gistEntryListView = this;
            $.each(this.renderGistEntryListView(), function () {
                gistEntryListView.$el.append(this.$el);
            });

            this.$el.append(this.renderFooterTemplate());

            return this;
        };

        GistEntryListView.prototype.renderHeaderTemplate = function () {
            var template = new HACKLE.HBSTemplate('src/hbs/header.hbs');

            return template.render({ title: 'update Gists' });
        };

        GistEntryListView.prototype.renderFooterTemplate = function () {
            var template = new HACKLE.HBSTemplate('src/hbs/footer.hbs');

            return template.render({ author: 'funnythingz' });
        };

        GistEntryListView.prototype.renderGistEntryListView = function () {
            return $.map(this.viewmodels, function (viewmodel, key) {
                return new DEMO.GistEntryView(viewmodel);
            });
        };
        return GistEntryListView;
    })(HACKLE.View);
    DEMO.GistEntryListView = GistEntryListView;
})(DEMO || (DEMO = {}));
;var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var DEMO;
(function (DEMO) {
    var GistEntryView = (function (_super) {
        __extends(GistEntryView, _super);
        function GistEntryView(viewmodel) {
            _super.call(this);
            this.viewmodel = viewmodel;
            this.tagName = 'article';
            this.className = 'cassette';
            this.events = {
                "click .owner": [this.jumpToOwnerPage, this.viewmodel.gistEntry.owner.ownerUrl.value]
            };

            this.reflectTagName();
            this.reflectAttribute();
            this.delegateEvents(this.events);
            this.render();
        }
        GistEntryView.prototype.render = function () {
            this.$el.append(this.renderTemplate());

            return this;
        };

        GistEntryView.prototype.jumpToOwnerPage = function (event, data) {
            location.href = event.data;
        };

        GistEntryView.prototype.renderTemplate = function () {
            var template = new HACKLE.HBSTemplate('src/hbs/gist-entry.hbs');

            return template.render(this.viewmodel);
        };
        return GistEntryView;
    })(HACKLE.View);
    DEMO.GistEntryView = GistEntryView;
})(DEMO || (DEMO = {}));
;var DEMO;
(function (DEMO) {
    var Helper = (function () {
        function Helper() {
        }
        Helper.hoge = function () {
            return "";
        };
        return Helper;
    })();
    DEMO.Helper = Helper;

    Handlebars.registerHelper('hoge', Helper.hoge);
})(DEMO || (DEMO = {}));
;var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var DEMO;
(function (DEMO) {
    var Layout = (function (_super) {
        __extends(Layout, _super);
        function Layout() {
            _super.call(this);
            this.$el = $('body');
        }
        Layout.prototype.display = function ($el) {
            this.$el.append($el);
        };
        return Layout;
    })(HACKLE.View);
    DEMO.Layout = Layout;
})(DEMO || (DEMO = {}));
