/// <reference path="../../../definitions/jquery.d.ts" />
/// <reference path="../infrastructure/hackleview.ts" />

module DEMO {

    export class Layout extends HACKLE.View {

        $el = $('body');

        constructor(viewCreateOptions: HACKLE.IViewCreateOptions = {}) {
            super(viewCreateOptions);
        }

        display($el: JQuery) {
            this.$el.append($el);
        }

    }

}
