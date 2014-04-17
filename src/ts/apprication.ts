/// <reference path="controller/controller.ts" />

module DEMO {

    class Application {

        constructor() {
            this.ready();
        }

        private ready() {
            var controller = new Controller();
            controller.ready();
        }

    }

    $(()=> {
        new Application();
    });

}
