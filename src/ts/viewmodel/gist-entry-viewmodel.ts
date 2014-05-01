/// <reference path="../model/model.ts" />

module DEMO {

    export class GistEntryViewModel {

        constructor(public gistEntry: Model.GistEntry,
                    public createdAtDate: Model.CreatedAtDate,
                    public updatedAtDate: Model.UpdatedAtDate) {}

    }

}
