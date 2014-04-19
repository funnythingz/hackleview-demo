/// <reference path="../infrastructure/ddd-base/entity.ts" />
/// <reference path="../infrastructure/ddd-base/identity.ts" />

/// <reference path="gist.ts" />
/// <reference path="owner.ts" />

module DEMO {

    export module Model {

        export class GistEntryID extends DDD.Identity<string> {

            constructor(value: string) {
                super(value);
            }

        }

        export class GistEntry extends DDD.Entity<GistEntryID> {

            constructor(id: GistEntryID,
                        public gist: Gist,
                        public owner: Owner) {

                super(id);

            }

        }

    }

}
