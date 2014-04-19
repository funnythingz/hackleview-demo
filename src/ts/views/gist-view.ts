/// <reference path="../../../definitions/jquery.d.ts" />

/// <reference path="../infrastructure/hackleview.ts" />

/// <reference path="../viewmodel/gist-viewmodel.ts" />

module DEMO {

    export class GistView extends HACKLE.View {

        tagName: string = 'div';

        constructor(public viewmodel: GistViewModel) {
            super();

            this.reflectTagName();
            this.reflectAttribute();
            this.delegateEvents(this.events);
            this.render();
        }

        render(): GistView {

            this.$el.append('gist');

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
