/// <reference path="../../../definitions/jquery.d.ts" />
/// <reference path="../../applications/hackleview/hackleview.ts" />

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
            });
        }

    }

}

$(() => {
    var vimeosView: DEMO.VimeosView = new DEMO.VimeosView();
    $('#main').append(vimeosView.render().$el);
    console.log(vimeosView.$el.html());
});
