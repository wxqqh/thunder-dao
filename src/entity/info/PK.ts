
/**
 * 实体表主键注解
 * 声明的一个 POJO 所对应的数据表的主键
 * 
 * @export
 * @class PK
 */
class PK {
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
export default PK;
