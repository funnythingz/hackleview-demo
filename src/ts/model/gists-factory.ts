/// <reference path="gists.ts" />

module DEMO {

    export class GistFactory {

        static createGist(id: string): Model.Gist {

            return new Model.Gist(new Model.GistID(id));
        }

    }

}
