
interface IDao {
    create(Klass: Function): Promise<any>;
}

export default IDao;
