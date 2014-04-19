/// <reference path="../infrastructure/api.ts" />
/// <reference path="../views/layout.ts" />
/// <reference path="../views/gist-entry-view.ts" />
/// <reference path="../viewmodel/gists-viewmodel-factory.ts" />
/// <reference path="../viewmodel/gist-entry-viewmodel.ts" />

module DEMO {

    export interface IController {
        layout: Layout;
        promise: any;
    }

    export class Controller implements IController {

        layout: Layout = new Layout();
        promise: any = new Infra.Promise();

        constructor() {
            this.index();
        }

        index() {

            this.promise.done(function(data) {
                console.log(data);

                var gistsVMFactory: GistsViewModelFactory = new GistsViewModelFactory(data);
                var gistEntryVM: GistEntryViewModel = gistsVMFactory.createGistEntryViewModel();

                var gistEntryView: GistEntryView = new GistEntryView(gistEntryVM);
                this.layout.display(this.index(gistEntryView.$el));
            });

        }

    }

}
