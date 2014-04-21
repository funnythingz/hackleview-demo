/// <reference path="../../../definitions/jquery.d.ts" />

/// <reference path="model.ts" />
/// <reference path="gist-entry-factory.ts" />

module DEMO {

    export class GistEntryRepository {

        static resolve(data: any): Model.GistEntry {
            return GistEntryFactory.createGistEntry(data);
        }

    }

}
