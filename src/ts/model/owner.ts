/// <reference path="../infrastructure/ddd-base/entity.ts" />
/// <reference path="../infrastructure/ddd-base/identity.ts" />

/// <reference path="name.ts" />
/// <reference path="url.ts" />
/// <reference path="avatar.ts" />

module DEMO {

    export module Model {

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

    }

}
