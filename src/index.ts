import * as debug from "debug";

import {default as Table} from "./entity/decorators/Table";
import {default as Id} from "./entity/decorators/Id";
import {default as Comment} from "./entity/decorators/Comment";
import {default as Column} from "./entity/decorators/Column";

const LOG = debug("index");

@Table("t_person")
@Comment("test")
class Person {
    @Id()
    @Comment("test")
    public id: number = 0;

    @Column("")
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
