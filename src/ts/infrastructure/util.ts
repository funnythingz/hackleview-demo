module Util {

    export function isIe6(): boolean {
        if(getIeVersion() === '6') {
            return true;
        }
        return false;
    }

    export function isIe7(): boolean {
        if(getIeVersion() === '7') {
            return true;
        }
        return false;
    }

    export function isIe8(): boolean {
        if(getIeVersion() === '8') {
            return true;
        }
        return false;
    }

    function getIeVersion(): string {
        if(navigator.appName.toUpperCase().indexOf( 'EXPLORER' ) != -1) {
            return navigator.appVersion.toUpperCase().split( ';' )[1].charAt( 6 );
        }
        return null;
    }

    export function hasPlaceholder(): boolean {
        return 'placeholder' in document.createElement('input');
    }

    export function isEmpty(str: string): boolean {
        if(str.length === 0) {
            return true;
        }
        return false;
    }

    export class DateSplitter {

        static splitFullYear(date: Date): string {
            return date.getFullYear().toString();
        }

        static splitMonth(date: Date): string {
            return (date.getMonth() + 1).toString();
        }

        static splitDay(date: Date): string {
            return date.getDate().toString();
        }

    }

}
