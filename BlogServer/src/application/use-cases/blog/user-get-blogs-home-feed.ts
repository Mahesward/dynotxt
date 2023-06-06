import GetUtils from "dynotxt-common-services/build/utils";
import blogRepositoryInteraface from "../../../adaptor/repositorys/blogRepositoryInteraface";

const caseUserBlogsGetForHomeFeed = async (
  blogRepository: blogRepositoryInteraface,
  utilsService: GetUtils,
  page: number
) => {
  return await blogRepository.getAllPublicBlogs(page).catch(utilsService.throwInternalError("Faild to get blogs"));
};

export default caseUserBlogsGetForHomeFeed;
