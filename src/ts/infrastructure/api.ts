/// <reference path="../../../definitions/jquery.d.ts" />

module Infra {

    export class HogeAPI {

        static resolve() {

            var apiPath: string = HogeAPI.getApiPath();

            var promise = $.ajax({type: 'get', url: apiPath, dataType: 'json', async: true});

            return promise;

        }

        static getApiPath(): string {
            return "";
        }

    }

    export class Promise {

        constructor() {
            return HogeAPI.resolve();
        }

    }

}
