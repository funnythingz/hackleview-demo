/// <reference path="../../../definitions/jquery.d.ts" />

/// <reference path="../infrastructure/hackleview.ts" />
/// <reference path="../viewmodel/gist-entry-viewmodel.ts" />

module DEMO {

    export class GistEntryListView extends HACKLE.View {

        tagName: string = 'section';
        className: string = 'unit';

        constructor(public viewmodels: GistEntryViewModel[]) {
            super();

            this.reflectTagName();
            this.reflectAttribute();
            this.render();
        }

        render(): GistEntryListView {

            this.$el.append(this.renderHeaderTemplate());

            var gistEntryListView = this;
            $.each(this.renderGistEntryListView(), function() {
                gistEntryListView.$el.append(this.$el);
            });

            this.$el.append(this.renderFooterTemplate());

            return this;
        }

        private renderHeaderTemplate(): string {

            var template = new HACKLE.HBSTemplate('src/hbs/header.hbs');

            return template.render({title: 'update Gists'});
        }

        private renderFooterTemplate(): string {

            var template = new HACKLE.HBSTemplate('src/hbs/footer.hbs');

            return template.render({author: 'funnythingz'});
        }

        private renderGistEntryListView(): GistEntryView[] {
            return $.map(this.viewmodels, function(viewmodel, key) {
                return new GistEntryView(viewmodel)
            });
        }

    }

}
