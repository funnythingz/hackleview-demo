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

            var gistEntryListView = this;

            $.each(this.renderGistEntryListView(), function() {
                gistEntryListView.$el.append(this.$el);
            });

            return this;
        }

        private renderGistEntryListView(): GistEntryView[] {
            var gistEntryListView: GistEntryView[] = $.map(this.viewmodels, function(viewmodel, key) {
                return new GistEntryView(viewmodel)
            });

            return gistEntryListView;
        }

    }

}
