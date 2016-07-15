
import IDao from "./IDao";

import TableInfo from "../entity/info/TableInfo";
import FieldInfo from "../entity/info/FieldInfo";

import Table from "../entity/info/Table";
import PK from "../entity/info/PK";
import Comment from "../entity/info/Comment";

import Id from "../entity/info/Id";
import Str from "../entity/info/Str";
import Column from "../entity/info/Column";

class Dao implements IDao {
    public create(Klass: any): Promise<any> {
        const tableInfo = TableInfo.getTableInfoInstance(Klass);

        const SQL = ``;
    }
}

export default Dao;
