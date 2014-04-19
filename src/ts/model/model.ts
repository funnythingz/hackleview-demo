/// <reference path="../infrastructure/ddd-base/entity.ts" />
/// <reference path="../infrastructure/ddd-base/identity.ts" />

module DEMO {

    export module Model {

        export class Name {
            constructor(public value: string) {}
        }

        export class Url {
            constructor(public value: string) {}
        }

        export class Description {
            constructor(public value: string) {}
        }

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

        export class OwnerID extends DDD.Identity<string> {
            constructor(value: string) {
                super(value);
            }
        }

        export class Owner extends DDD.Entity<OwnerID> {

            constructor(id: OwnerID,
                        public ownerName: OwnerName,
                        public ownerUrl: OwnerUrl,
                        public avatar: Avatar) {

                super(id);
            }

        }

        export class OwnerName extends Name {
            constructor(value: string) {
                super(value);
            }

        }

        export class OwnerUrl extends Url {
            constructor(value: string) {
                super(value);
            }

        }

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

        export class Avatar {
            constructor(public avatarUrl: AvatarUrl) {}
        }

        export class AvatarUrl extends Url {
            constructor(value: string) {
                super(value);
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
