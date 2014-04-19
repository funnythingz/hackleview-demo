/// <reference path="../infrastructure/ddd-base/entity.ts" />
/// <reference path="../infrastructure/ddd-base/identity.ts" />

/// <reference path="description.ts" />
/// <reference path="url.ts" />

module DEMO {

    export module Model {

        export class GistID extends DDD.Identity<string> {

            constructor(value: string) {
                super(value);
            }

        }

        export class Gist extends DDD.Entity<GistID> {

            constructor(id: GistID,
                        public gistDescription: GistDescription,
                        public gistUrl: GistUrl) {

                super(id);

            }

        }

        export class GistDescription extends Description {

            constructor(value: string) {

                super(value);

            }

        }

        export class GistUrl extends Url {

            constructor(value: string) {

                super(value);

            }

        }

    }

}
