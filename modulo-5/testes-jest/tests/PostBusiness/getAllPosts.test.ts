import {PostBusiness} from "../../src/business/PostBusiness"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { HashManagerMock } from "../mocks/services/HashManagerMock"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { PostDatabaseMock } from "../mocks/PostDatabaseMock"
import { ICreatePostInputDTO, IGetPostsInputDTO, Post } from "../../src/models/Post"
import { PostDatabase } from "../../src/database/PostDatabase"


describe("Testando PostBusiness", () => {
  const postBusiness = new PostBusiness(
      new PostDatabaseMock() as unknown as PostDatabase,
      new IdGeneratorMock(),
      new HashManagerMock(),
      new AuthenticatorMock()
  )

  test("lista retornada com sucesso",async()=>{
    const input: IGetPostsInputDTO = {
      token: "token-astrodev",
  }

  const response = await postBusiness.getPosts(input)

  expect(response.posts.length).toEqual(3)
  expect(response.posts[0]).toBeInstanceOf(Post)
  expect(response.posts[0].getId()).toEqual("201")

  })

})