/// <reference path="../../../definitions/jquery.d.ts" />

module Infra {

    export class GistsAPI {

        static resolve() {

            var apiPath: string = GistsAPI.getApiPath();

            var promise = $.ajax({type: 'get', url: apiPath, dataType: 'jsonp', async: true});

            return promise;

        }

        static getApiPath(): string {
            return "https://api.github.com/gists";
        }

    }

    export class Promise {

        constructor() {
            return GistsAPI.resolve();
        }

    }

}
