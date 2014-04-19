/// <reference path="../../../definitions/jquery.d.ts" />

/// <reference path="../infrastructure/hackleview.ts" />

/// <reference path="../viewmodel/gist-entry-viewmodel.ts" />

module DEMO {

    export class GistEntryView extends HACKLE.View {

        tagName: string = 'div';

        constructor(public viewmodel: GistEntryViewModel) {
            super();

            this.reflectTagName();
            this.reflectAttribute();
            this.delegateEvents(this.events);
            this.render();
        }

        render(): GistEntryView {

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
