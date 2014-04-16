/// <reference path="../../../definitions/jquery.d.ts" />
/// <reference path="../infrastructure/hackleview.ts" />

module DEMO {

    export class VimeosView extends HACKLE.View {

        tagName: string = 'article';
        className: string = 'vimeos';

        constructor() {
            super();
            this.reflectTagName();
            this.reflectAttribute();
            this.delegateEvents(this.events);
        }

        events = {
            "click .header" : this.headerTest,
            "click .cat" : function(event) {
                event.preventDefault();
                console.log('cat');
            }
        }

        private headerTest() {
            console.log("click .header");
        }

        render(): VimeosView {
            this.$el.append(
                this.renderTemplate()
            );

            return this;
        }

        private renderTemplate(): string {
            var template = new HACKLE.HBSTemplate('hbs/vimeos.hbs');

            return template.render({
                // TODO: APIからとったデータはめる
            });
        }

    }

}
