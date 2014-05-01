/// <reference path="../infrastructure/api.ts" />
/// <reference path="../views/layout.ts" />
/// <reference path="../views/gist-entry-view.ts" />
/// <reference path="../viewmodel/gists-viewmodel-factory.ts" />
/// <reference path="../viewmodel/gist-entry-viewmodel.ts" />

module DEMO {

    export interface IController {
        layout: Layout;
    }

    export class Controller implements IController {

        layout: Layout = new Layout();

        start() {

            var layout = this.layout;
            var promise = ControllerRepository.promise();

            promise.done(function(responseJsonFromGistsAPI: any) {
                var factory: GistsViewModelFactory = new GistsViewModelFactory(responseJsonFromGistsAPI);
                var gistEntryViewModels: GistEntryViewModel[] = factory.createGistEntryListViewModel();

                var gistEntryListView: GistEntryListView = new GistEntryListView(gistEntryViewModels);
                layout.display(gistEntryListView.$el);
            });

        }

    }

    export class ControllerRepository {

        static promise(): JQueryXHR {
            return Infra.GistsAPI.resolve();
        }

    }

}
