var DEMO;
(function (DEMO) {
    var Application = (function () {
        function Application() {
            this.ready();
        }
        Application.prototype.ready = function () {
            var controller = new DEMO.Controller();
            controller.ready();
        };
        return Application;
    })();

    $(function () {
        new Application();
    });
})(DEMO || (DEMO = {}));
;var DEMO;
(function (DEMO) {
    var Controller = (function () {
        function Controller() {
        }
        Controller.prototype.ready = function () {
        };
        return Controller;
    })();
    DEMO.Controller = Controller;
})(DEMO || (DEMO = {}));
;var Infra;
(function (Infra) {
    var HogeAPI = (function () {
        function HogeAPI() {
        }
        HogeAPI.resolve = function () {
            var apiPath = HogeAPI.getApiPath();

            var promise = $.ajax({ type: 'get', url: apiPath, dataType: 'json', async: true });

            return promise;
        };

        HogeAPI.getApiPath = function () {
            return "";
        };
        return HogeAPI;
    })();
    Infra.HogeAPI = HogeAPI;

    var Promise = (function () {
        function Promise() {
            return HogeAPI.resolve();
        }
        return Promise;
    })();
    Infra.Promise = Promise;
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
;var HACKLE;
(function (HACKLE) {
    var View = (function () {
        function View(viewCreateOptions) {
            if (typeof viewCreateOptions === "undefined") { viewCreateOptions = {}; }
            this.tagName = 'div';
            this.attributes = {};
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
            $.map(events, function (eventMethod, eventWithElement) {
                var eventElementPair = _this.splitEventWithElement(eventWithElement);
                _this.$el.on.call(_this.$el, eventElementPair.eventName, eventElementPair.selector, eventMethod);
            });
            return this;
        };

        View.prototype.splitEventWithElement = function (eventWithElement) {
            var resultPair = eventWithElement.split(' ', 2);
            return {
                'eventName': resultPair[0],
                'selector': resultPair[1]
            };
        };
        return View;
    })();
    HACKLE.View = View;

    var HBSTemplate = (function () {
        function HBSTemplate(hbsName) {
            this.hbsName = hbsName;
        }
        HBSTemplate.prototype.render = function (data) {
            if (typeof data === "undefined") { data = {}; }
            var resultHTML;
            var _hbsName = this.hbsName;

            var $getHBSTemplate = $.ajax({
                url: _hbsName,
                type: 'get',
                dataType: 'html',
                async: false
            });

            $getHBSTemplate.done(function (hbs) {
                var template = Handlebars.compile(hbs);
                resultHTML = template(data);
            });

            return resultHTML;
        };
        return HBSTemplate;
    })();
    HACKLE.HBSTemplate = HBSTemplate;

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
})(Util || (Util = {}));
;var DEMO;
(function (DEMO) {
    var HogeFactory = (function () {
        function HogeFactory() {
        }
        HogeFactory.createHoge = function (id) {
            return new DEMO.Model.Hoge(new DEMO.Model.HogeID(id));
        };
        return HogeFactory;
    })();
    DEMO.HogeFactory = HogeFactory;
})(DEMO || (DEMO = {}));
;var DEMO;
(function (DEMO) {
    var HogeRepository = (function () {
        function HogeRepository() {
        }
        HogeRepository.prototype.resolve = function () {
            return null;
        };

        HogeRepository.prototype.store = function () {
            return null;
        };

        HogeRepository.prototype.delete = function () {
            return null;
        };
        return HogeRepository;
    })();
    DEMO.HogeRepository = HogeRepository;
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
        var HogeID = (function (_super) {
            __extends(HogeID, _super);
            function HogeID(value) {
                _super.call(this, value);
            }
            return HogeID;
        })(DDD.Identity);
        Model.HogeID = HogeID;

        var Hoge = (function (_super) {
            __extends(Hoge, _super);
            function Hoge(id) {
                _super.call(this, id);
            }
            return Hoge;
        })(DDD.Entity);
        Model.Hoge = Hoge;
    })(DEMO.Model || (DEMO.Model = {}));
    var Model = DEMO.Model;
})(DEMO || (DEMO = {}));
;var DEMO;
(function (DEMO) {
    var HogeViewModel = (function () {
        function HogeViewModel() {
        }
        return HogeViewModel;
    })();
    DEMO.HogeViewModel = HogeViewModel;
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
    var HogeView = (function (_super) {
        __extends(HogeView, _super);
        function HogeView(viewmodel) {
            _super.call(this);
            this.viewmodel = viewmodel;
            this.tagName = 'div';
            this.events = {
                "click .hoge": this.hogeEvent
            };

            this.reflectTagName();
            this.reflectAttribute();
            this.delegateEvents(this.events);
            this.render();
        }
        HogeView.prototype.render = function () {
            this.$el.append('hoge');

            return this;
        };

        HogeView.prototype.hogeEvent = function () {
            console.log('hoge');
        };
        return HogeView;
    })(HACKLE.View);
    DEMO.HogeView = HogeView;
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
        function Layout(viewCreateOptions) {
            if (typeof viewCreateOptions === "undefined") { viewCreateOptions = {}; }
            _super.call(this, viewCreateOptions);
        }
        Layout.prototype.display = function ($el) {
        };
        return Layout;
    })(HACKLE.View);
    DEMO.Layout = Layout;
})(DEMO || (DEMO = {}));
