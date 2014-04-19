/// <reference path="../infrastructure/ddd-base/entity.ts" />

module DEMO {

    export module Model {

        export class GistID extends DDD.Identity<string> {

            constructor(value: string) {
                super(value);
            }

        }

        export class Gist extends DDD.Entity<DDD.Identity<string>> {

            constructor(id: GistID) {

                super(id);
            }

        }
    
    }

}
