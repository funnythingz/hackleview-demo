var HACKLE;
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

            $.ajax({
                url: _hbsName,
                type: 'get',
                dataType: 'html',
                async: false,
                success: function (hbs) {
                    var template = Handlebars.compile(hbs);
                    resultHTML = template(data);
                }
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
;var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var DEMO;
(function (DEMO) {
    var GreetingView = (function (_super) {
        __extends(GreetingView, _super);
        function GreetingView() {
            _super.call(this);
            this.tagName = 'article';
            this.className = 'greeting';
            this.events = {
                "click .header": this.headerTest,
                "click .cat": function (event) {
                    event.preventDefault();
                    console.log('cat');
                }
            };
            this.reflectTagName();
            this.reflectAttribute();
            this.delegateEvents(this.events);
        }
        GreetingView.prototype.headerTest = function () {
            console.log("click .header");
        };

        GreetingView.prototype.render = function () {
            this.$el.append(this.renderTemplate());

            return this;
        };

        GreetingView.prototype.renderTemplate = function () {
            var template = new HACKLE.HBSTemplate('hbs/greeting.hbs');
            return template.render({
                greeting: 'Hello HACKLE.View',
                animals: [
                    { name: 'cat', anchor: '#cat' },
                    { name: 'dog', anchor: '#dog' },
                    { name: 'rion', anchor: '#rion' }
                ],
                copyright: "funnythingz"
            });
        };
        return GreetingView;
    })(HACKLE.View);
    DEMO.GreetingView = GreetingView;
})(DEMO || (DEMO = {}));

$(function () {
    var greetingView = new DEMO.GreetingView();
    $('#main').append(greetingView.render().$el);
    console.log(greetingView.$el.html());
});
