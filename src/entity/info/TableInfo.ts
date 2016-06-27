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
