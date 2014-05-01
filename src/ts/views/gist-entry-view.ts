/// <reference path="../../../definitions/jquery.d.ts" />

/// <reference path="../infrastructure/hackleview.ts" />
/// <reference path="../viewmodel/gist-entry-viewmodel.ts" />

module DEMO {

    export class GistEntryView extends HACKLE.View {

        tagName: string = 'article';
        className: string = 'cassette';

        constructor(public viewmodel: GistEntryViewModel) {
            super();

            this.reflectTagName();
            this.reflectAttribute();
            this.delegateEvents(this.events);
            this.render();
        }

        render(): GistEntryView {

            this.$el.append(
                this.renderTemplate()
            );

            return this;
        }

        events = {
            "click .owner" : [this.jumpToOwnerPage, this.viewmodel.gistEntry.owner.ownerUrl.value]
        }

        private jumpToOwnerPage(event, data) {
            location.href = event.data;
        }

        private renderTemplate(): string {
            var template = new HACKLE.HBSTemplate('hbs/gist-entry.hbs');

            return template.render(this.viewmodel);
        }

    }

}
