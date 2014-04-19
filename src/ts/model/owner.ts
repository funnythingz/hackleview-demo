/// <reference path="../infrastructure/ddd-base/entity.ts" />
/// <reference path="../infrastructure/ddd-base/identity.ts" />

module DEMO {

    export module Model {

        export class OwnerID extends DDD.Identity<string> {

            constructor(value: string) {
                super(value);
            }

        }

        export class Owner extends DDD.Entity<OwnerID> {

            constructor(id: OwnerID) {
                super(id);
            }

        }
    
    }

}
