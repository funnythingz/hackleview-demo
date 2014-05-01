/// <reference path="../model/factory.ts" />
/// <reference path="../views/layout.ts" />
/// <reference path="../views/gist-entry-view.ts" />
/// <reference path="../viewmodel/gist-entry-viewmodel.ts" />


module DEMO {

    export class GistsViewModelFactory {

        constructor(public args: any) {}

        createGistEntryViewModel(): GistEntryViewModel {
            var gistEntry: Model.GistEntry = GistEntryFactory.createGistEntry(this.args.data[0]);
            var createdAtDate: Model.CreatedAtDate = new Model.CreatedAtDate(this.args.data[0].created_at);
            var updatedAtDate: Model.UpdatedAtDate = new Model.UpdatedAtDate(this.args.data[0].updated_at);

            return new GistEntryViewModel(gistEntry, createdAtDate, updatedAtDate);
        }

        createGistEntryListViewModel(): GistEntryViewModel[] {
            var gistsEntryViewModel: GistEntryViewModel[] = [];

            $.map(this.args.data, function(obj, key) {
                gistsEntryViewModel.push(
                    new GistEntryViewModel(GistEntryFactory.createGistEntry(obj),
                                           new Model.CreatedAtDate(obj.created_at),
                                           new Model.UpdatedAtDate(obj.updated_at))
                );
            });

            return gistsEntryViewModel;
        }

    }


}
