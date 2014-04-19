/// <reference path="../../../definitions/jquery.d.ts" />

/// <reference path="../infrastructure/hackleview.ts" />

/// <reference path="../viewmodel/gists-viewmodel.ts" />

module DEMO {

    export class GistsView extends HACKLE.View {

        tagName: string = 'div';

        constructor(public viewmodel: GistsViewModel) {
            super();

            this.reflectTagName();
            this.reflectAttribute();
            this.delegateEvents(this.events);
            this.render();
        }

        render(): GistsView {

            this.$el.append('gists');

            return this;
        }

        events = {
            "click .hoge" : this.hogeEvent
        }

        private hogeEvent() {
            console.log('hoge');
        }
    }

}
