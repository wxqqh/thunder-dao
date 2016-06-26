
/**
 * 标识当前字段为一个 ID。数值型主键
 * 声明后的字段不能为空
 * 字段注解
 * 
 * @export
 * @class Id
 */
export class Id {
    /**
     * 是否自增
     */
    private mAutoIncrement = true;

    /**
     * 获取是否自增标志位
     * 
     * @readonly
     */
    get autoIncrement() {
        return this.mAutoIncrement;
    }

    constructor(autoIncrement: boolean) {
        this.mAutoIncrement = autoIncrement;
    }
}
export default Id;
