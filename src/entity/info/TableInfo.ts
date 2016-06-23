"use strict";

import {Table} from "../decorators/Table";
import {PK} from "../decorators/PK";
import {Comment} from "../decorators/Comment";

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
     * @see "../decorators/Table"
     */
    public table: Table;

    /**
     * 表主键注解
     * 
     * @type {PK}
     * @see "../decorators/PK"
     */
    public pk: PK;

    /**
     * 注释注解
     * 
     * @type {Comment}
     * @see "../decorators/Comment"
     */
    public comment: Comment;
}

export default TableInfo;
