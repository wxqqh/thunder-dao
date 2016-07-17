"use strict";

import Table from "./Table";
import PK from "./PK";
import Comment from "./Comment";

/**
 * 数据表信息
 * 
 * @class TableInfo
 */
class TableInfo {

    /**
     * 获取指定对象的TableInfo实例
     * 如果对象没有, 则创建一个新的TableInfo
     * 
     * @static
     * @param {Object} klass 目标对象
     * @returns {TableInfo} TableInfo实例
     */
    public static getTableInfoInstance(klass: Object): TableInfo {
        if (!klass[`$tableInfo`]) {
            klass[`$tableInfo`] = new TableInfo();
        }
        return klass[`$tableInfo`];
    }
    /**
     * 数据表注解
     * 
     * @type {Table}
     * @see "./Table"
     */
    public table: Table;

    /**
     * 表主键注解
     * 
     * @type {PK}
     * @see "./PK"
     */
    public pk: PK;

    /**
     * 注释注解
     * 
     * @type {Comment}
     * @see "./Comment"
     */
    public comment: Comment;
}

export default TableInfo;
