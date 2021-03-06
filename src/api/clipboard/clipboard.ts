import { Base } from '../base';
import { WriteRequestType, WriteAnyRequestType } from './write-request';

/**
 * WriteRequestType interface
 * @typedef { object } WriteRequestType
 * @property { string } name The name of the running application
 * @property { string } uuid The uuid of the running application
 */

/**
 * The Clipboard API allows reading and writing to the clipboard in multiple formats.
 * @namespace
*/
export default class Clipboard extends Base {

    /**
     * Writes data into the clipboard as plain text
     * @param { WriteRequestType } writeObj This object is described in the WriteRequestType typeof
     * @return {Promise.<void>}
     * @tutorial Clipboard.writeText
    */
    public writeText(writeObj: WriteRequestType): Promise<void> {
        return this.wire.sendAction('clipboard-write-text', writeObj).then(() => undefined);
    }

    /**
     * Read the content of the clipboard as plain text
     * @param { string } type Clipboard Type
     * @return {Promise.<string>}
     * @tutorial Clipboard.readText
    */
    public readText(type?: string): Promise<string> {
        return this.wire.sendAction('clipboard-read-text', type)
            .then(({ payload }) => payload.data);
    }

    /**
     * Writes data into the clipboard as Html
     * @param { WriteRequestType } writeObj This object is described in the WriteRequestType typedef
     * @return {Promise.<void>}
     * @tutorial Clipboard.writeHtml
    */
    public writeHtml(writeObj: WriteRequestType): Promise<void> {
        return this.wire.sendAction('clipboard-write-html', writeObj).then(() => undefined);
    }

    /**
     * Read the content of the clipboard as Html
     * @param { string } type Clipboard Type
     * @return {Promise.<string>}
     * @tutorial Clipboard.readHtml
    */
    public readHtml(type?: string): Promise<string> {
        return this.wire.sendAction('clipboard-read-html', type)
            .then(({ payload }) => payload.data);
    }

    /**
     * Writes data into the clipboard as Rtf
     * @param { WriteRequestType } writeObj This object is described in the WriteRequestType typedef
     * @return {Promise.<void>}
     * @tutorial Clipboard.writeRtf
    */
    public writeRtf(writeObj: WriteRequestType): Promise<void> {
        return this.wire.sendAction('clipboard-write-rtf', writeObj).then(() => undefined);
    }

    /**
     * Read the content of the clipboard as Rtf
     * @param { string } type Clipboard Type
     * @return {Promise.<string>}
     * @tutorial Clipboard.readRtf
    */
    public readRtf(type?: string): Promise<string> {
        return this.wire.sendAction('clipboard-read-rtf', type)
            .then(({ payload }) => payload.data);
    }

    /**
     * Writes data into the clipboard
     * @param { WriteRequestType } writeObj This object is described in the WriteRequestType typedef
     * @return {Promise.<void>}
     * @tutorial Clipboard.write
    */
    public write(writeObj: WriteAnyRequestType): Promise<void> {
        return this.wire.sendAction('clipboard-write', writeObj).then(() => undefined);
    }

    /**
     * Reads available formats for the clipboard type
     * @param { string } type Clipboard Type
     * @return {Promise.Array.<string>}
     * @tutorial Clipboard.getAvailableFormats
    */
    public getAvailableFormats(type?: string): Promise<Array<string>> {
        return this.wire.sendAction('clipboard-read-formats', type)
            .then(({ payload }) => payload.data);
    }
}
