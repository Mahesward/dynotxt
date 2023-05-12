import { IToken } from "../../frameworks/databases/mongoDb/models/tokens.schema";
import tokenRepositoryImpl from "../../frameworks/databases/mongoDb/repository/tockensRepositoryImpl";

const tokenRepositoryInteraface = (respository: tokenRepositoryImpl) => {
  const add = (uid: string, token: string, options?: object) =>
    respository.add(uid, token, options);

  const addWithEmail = (email: string, token: string, options?: object) =>
    respository.addWithEmail(email, token, options);

  const getById = (uid: string) => respository.getById(uid);

  const getByToken = (token: string) => respository.getByToken(token);

  const remove = (data: IToken) => respository.remove(data);

  return {
    add,
    getById,
    getByToken,
    remove,
    addWithEmail,
  };
};

type tokenRepositoryInteraface = ReturnType<typeof tokenRepositoryInteraface>;
export default tokenRepositoryInteraface;
