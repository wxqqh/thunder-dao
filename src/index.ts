/// <reference path="../typings/index.d.ts" />

import * as debug from "debug";

import {default as Table} from "./entity/decorators/Table";
import {default as Id} from "./entity/decorators/Id";

const LOG = debug("index");

@Table("t_person")
class Person {
    @Id()
    public id: number = 0;

    public name: string = "";

    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    public show() {
        LOG(`id: ${this.id}, name: ${this.name}`);
    }
}

const p = new Person(1, "Test");

LOG(`${JSON.stringify(p)}`);

p.show();
