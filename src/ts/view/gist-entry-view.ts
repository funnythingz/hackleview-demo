/// <reference path="../../../definitions/jquery.d.ts" />

/// <reference path="../infrastructure/hackleview.ts" />
/// <reference path="../viewmodel/gist-entry-viewmodel.ts" />

module DEMO {

    export class GistEntryView extends HACKLE.View {

        constructor(public viewmodel: GistEntryViewModel) {

            super({tagName: 'article', className: 'cassette'});

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
            "click .owner" : ()=> location.href = this.viewmodel.gistEntry.owner.ownerUrl.value
        }

        private renderTemplate(): string {

            var template = new HACKLE.HBSTemplate('src/hbs/gist-entry.hbs');

            return template.render(this.viewmodel);
        }

    }

}
