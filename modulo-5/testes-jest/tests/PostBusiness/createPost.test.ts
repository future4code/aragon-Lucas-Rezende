import {PostBusiness} from "../../src/business/PostBusiness"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { HashManagerMock } from "../mocks/services/HashManagerMock"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { PostDatabaseMock } from "../mocks/PostDatabaseMock"
import { ICreatePostInputDTO } from "../../src/models/Post"
import { PostDatabase } from "../../src/database/PostDatabase"


describe("Testando PostBusiness", () => {
  const postBusiness = new PostBusiness(
      new PostDatabaseMock() as unknown as PostDatabase,
      new IdGeneratorMock(),
      new HashManagerMock(),
      new AuthenticatorMock()
  )

  test("post criado com sucesso",async()=>{
    const input: ICreatePostInputDTO = {
      token: "token-astrodev",
      content: "olá mundo"
  }

  const response = await postBusiness.createPost(input)

  expect(response.message).toEqual("Post criado com sucesso")
  // expect(response.post).toEqual({
  //   id:"id-mock",
  //   content:"olá mundo",
  //   user_id:"101"
  // })

  })

})