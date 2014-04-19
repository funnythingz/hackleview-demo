/// <reference path="gist-entry.ts" />
/// <reference path="owner.ts" />

module DEMO {

    export class GistEntryFactory {

        static createGistEntry(data: any): Model.GistEntry {

            var gistId: Model.GistEntryID = new Model.GistEntryID(data.id);

            var gist: Model.Gist = new Model.Gist(new Model.GistID(data.id),
                                                  new Model.GistDescription(data.description),
                                                  new Model.GistUrl(data.html_url));

            var owner: Model.Owner = new Model.Owner(new Model.OwnerID(data.owner.id),
                                                     new Model.OwnerName(data.owner.login),
                                                     new Model.OwnerUrl(data.owner.html_url),
                                                     new Model.Avatar(data.owner.avatar_url));

            return new Model.GistEntry(gistId, gist, owner);

        }

    }

}
