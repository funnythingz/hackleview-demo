/// <reference path="../../../definitions/jquery.d.ts" />

/// <reference path="../infrastructure/hackleview.ts" />

/// <reference path="../viewmodel/hoge-viewmodel.ts" />

module DEMO {

    export class HogeView extends HACKLE.View {

        tagName: string = 'div';

        constructor(public viewmodel: HogeViewModel) {
            super();

            this.reflectTagName();
            this.reflectAttribute();
            this.delegateEvents(this.events);
            this.render();
        }

        render(): HogeView {

            this.$el.append('hoge');

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
