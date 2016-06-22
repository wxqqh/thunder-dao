"use strict";
import Properties from "../util/Properties";

/**
 * 实体表主键注解
 * 声明的一个 POJO 所对应的数据表的主键
 * 
 * @export
 * @class PK
 */
export class PK {
    /**
     * 主键列表
     */
    private mPrimaryKeys: Array<string> = [];

    /**
     * 获取主键
     */
    get primaryKeys() {
        return this.mPrimaryKeys;
    }

    /**
     * 创建一个数据表主键注解的实例
     * 
     * @param PrimaryKeys 数据库表名字
     */
    constructor(primaryKeys: Array<string>) {
        this.mPrimaryKeys = primaryKeys;
    }

}

/**
 * 为数据表添加主键
 * 类注解
 */
const pk: (primaryKeys: Array<string>) => ClassDecorator = (primaryKeys: Array<string>) => {
    return (target) => {
        if (!primaryKeys.length) {
            throw new TypeError(`primaryKeys can not be empty`);
        }
        const $thunder = Properties.nonenumerable(target, `$thunder`);

        $thunder[`$pk`] = new PK(primaryKeys);
    };
};

export default pk;
