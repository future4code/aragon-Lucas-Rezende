import { ResultBusiness } from "../../src/business/ResultBusiness";
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock";
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock";
import { ICreateResultInputDTO } from "../../src/models/Result";
import { ResultDatabaseMock } from "../mocks/ResultsDatabaseMock";
import { CompetitionDatabase } from "../../src/database/CompetitionDataBase";
import { ResultDatabase } from "../../src/database/ResultDatabase";
import { BaseError } from "../../src/errors/BaseError";

describe("Testando createResults", () => {
  const resultBusiness = new ResultBusiness(
    new CompetitionDatabase() as unknown as CompetitionDatabase,
    new ResultDatabaseMock() as unknown as ResultDatabase,
    new IdGeneratorMock(),
    new AuthenticatorMock()
  );

  test("resultado criado com sucesso", async () => {
    const input: ICreateResultInputDTO = {
      token: "token-astrodev",
      competition_id: "201",
      user_id: "102",
      value: 11,
      unit: "s",
    };

    const response = await resultBusiness.createResult(input);

    expect(response.message).toEqual("result created successfully");
  });

  test("retorna erro quando o atleta já fez 3 lançamentos", async () => {
    try {
      const input: ICreateResultInputDTO = {
        token: "token-astrodev",
        competition_id: "202",
        user_id: "111",
        value: 87,
        unit: "m",
      };

      const response = await resultBusiness.createResult(input);
    } catch (error: unknown) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toEqual(401);
        expect(error.message).toEqual("athlete has already made 3 launches");
      }
    }
  });
});
