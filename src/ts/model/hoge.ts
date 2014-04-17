/// <reference path="../infrastructure/ddd-base/entity.ts" />

module DEMO {

    export module Model {

        export class HogeID extends DDD.Identity<string> {

            constructor(value: string) {
                super(value);
            }

        }

        export class Hoge extends DDD.Entity<DDD.Identity<string>> {

            constructor(id: HogeID) {

                super(id);
            }

        }
    
    }

}
