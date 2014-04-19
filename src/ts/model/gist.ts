/// <reference path="../infrastructure/ddd-base/entity.ts" />
/// <reference path="../infrastructure/ddd-base/identity.ts" />

module DEMO {

    export module Model {

        export class GistID extends DDD.Identity<string> {

            constructor(value: string) {
                super(value);
            }

        }

        export class Gist extends DDD.Entity<GistID> {

            constructor(id: GistID) {
                super(id);
            }

        }

        export class AtDate {

            fullYear: string;
            month: string;
            day: string;

            constructor(value: string) {
                var date: Date = new Date(value);
                this.fullYear = Util.DateSplitter.splitFullYear(date);
                this.month = Util.DateSplitter.splitMonth(date);
                this.day = Util.DateSplitter.splitDay(date);
            }

        }
        console.log(new AtDate("2014-04-19T03:45:44Z"));

        export class CreatedAtDate extends AtDate {

            constructor(value: string) {
                super(value);
            }

        }

        export class UpdatedAtDate extends AtDate {

            constructor(value: string) {
                super(value);
            }

        }

    }

}
