/// <reference path="../views/layout.ts" />
/// <reference path="../views/gist-view.ts" />
/// <reference path="../infrastructure/api.ts" />

module DEMO {

    export interface IController {
        layout: Layout;
        promise: any;
    }

    export class Controller implements IController {

        layout = new Layout();
        promise: any = new Infra.Promise();

        constructor() {
            this.index();
        }

        index() {
            this.promise.done(function(data) {
                console.log(data);

                /**
                var viewmodelFactory: GistViewModelFactory = new GistViewModel(data);
                var viewmodel: GistViewModel = viewmodelFactory.createGistViewModel();

                var gistView: GistView = new GistView(viewmodel);
                this.layout.display(this.index(gistView.$el));
                /**/
            });
        }

    }

}
