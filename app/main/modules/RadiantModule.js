'use strict';
import { Logger as logger } from "winston";

/**
 * Provides a mechanism to simplify Mithril Routing
 */
export default class RadiantModule {

    constructor(controller, view) {
        // Module checks; in order to be a fully fledged UI component both are required
        if(new.target === RadiantModule) { throw 'Cannot construct Abstract instances directly!' }
        if(controller === undefined) { throw `Module: ${this.constructor.name} attempted to be created with an undefined controller!`; }
        if(view === undefined) { throw `Module: ${this.constructor.name} attempted to be created with an undefined view!`; }

        this._controller = controller;
        this._view = view;

        logger.log(`Module Loaded: ${this.constructor.name} with controller: ${controller.constructor.name} and view: ${view.constructor.name}`);
    }

    get controller() {
        if(this._controller === undefined) throw `RadiantModule[${this.constructor.name}]: controller() is not defined!`;
        return this._controller;
    }

    get view() {
        if(this._view === undefined) throw `RadiantModule[${this.constructor.name}]: view() is not defined!`;
        return this._view;
    }

}