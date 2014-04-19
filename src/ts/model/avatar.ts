module DEMO {

    export module Model {

        export class Avatar {

            constructor(public avatarUrl: AvatarUrl) {}

        }

        export class AvatarUrl extends Url {

            constructor(value: string) {

                super(value);

            }

        }

    }

}
