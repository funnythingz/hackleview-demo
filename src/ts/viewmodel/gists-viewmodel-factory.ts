/// <reference path="../model/gist-entry-factory.ts" />
/// <reference path="../views/layout.ts" />
/// <reference path="../views/gist-entry-view.ts" />
/// <reference path="../viewmodel/gist-entry-viewmodel.ts" />


module DEMO {

    export class GistsViewModelFactory {

        constructor(public args: any) {}

        createGistEntryViewModel(): GistEntryViewModel {
            var gistEntry: Model.GistEntry = GistEntryRepository.resolve(this.args.data[0]);
            return new GistEntryViewModel(gistEntry);
        }

        createGistEntryListViewModel(): GistEntryViewModel[] {
            var gistsEntryVM: GistEntryViewModel[] = [];

            $.map(this.args.data, function(obj, key) {
                gistsEntryVM.push(
                    new GistEntryViewModel(GistEntryRepository.resolve(obj))
                );
            });

            return gistsEntryVM;
        }

    }


}
