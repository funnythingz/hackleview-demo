/// <reference path="hoge.ts" />

module DEMO {

    export class HogeFactory {

        static createHoge(id: string): Model.Hoge {

            return new Model.Hoge(new Model.HogeID(id));
        }

    }

}
