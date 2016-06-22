"use strict";
import Properties from "../util/Properties";

/**
 * 实体表注解
 * 声明的一个 POJO 所对应的数据表名
 * 
 * @export
 * @class Table
 */
export class Table {
    /**
     * 表名
     */
    private mName: string = "";

    /**
     * 获取表名
     */
    get name() {
        return this.mName;
    }

    /**
     * 创建一个数据表注解的实例
     * 
     * @param name 数据库表名字
     */
    constructor(name: string) {
        this.mName = name;
    }

}

/**
 * 类注解
 * 添加表名
 */
const table: (tableName: string) => ClassDecorator = (tableName: string) => {
    if (!tableName) {
        throw new TypeError(`tableName can not be empty`);
    }

    return (target) => {
        const $thunder = Properties.nonenumerable(target, `$thunder`);

        $thunder[`$table`] = new Table(tableName);
    };
};

export default table;
