const request = require("supertest");
const server = require("../index");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const testUser = {
  email: "test@test.com",
  password: "Password1!",
};
describe("POST /api/v1/auth/signup", () => {
  it("should return 201 and create user", (done) => {
    request(server)
      .post("/api/v1/auth/signup")
      .send(testUser)
      .set("Accept", "application/json")
      .then((res) => {
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({
          code: 200,
          message: "User created",
          status: "success",
          data: expect.objectContaining({
            user: {
              email: "test@test.com",
              password: expect.not.stringContaining("Password1!"),
              address: null,
              avatar: null,
              birthdate: null,
              driver_license: null,
              fullname: null,
              gender: null,
              phone_nUmber: null,
              role_id: 3,
              createdBy: null,
              createdDt: expect.any(String),
              updatedBy: null,
              updatedDt: expect.any(String),
            },
          }),
        });
        done();
      })
      .catch((e) => {
        console.log(e);
        done();
      });
  });
});

describe("POST /api/v1/auth/signin", () => {
  it("should return 200 and signin user", (done) => {
    request(server)
      .post("/api/v1/auth/signin")
      .send(testUser)
      .set("Accept", "application/json")
      .then((res) => {
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({
          code: 200,
          message: "Signin success",
          status: "success",
          data: expect.objectContaining({
            user: {
              email: "test@test.com",
              password: expect.not.stringContaining("Password1!"),
              address: null,
              avatar: null,
              birthdate: null,
              driver_license: null,
              fullname: null,
              gender: null,
              phone_nUmber: null,
              role_id: 3,
              createdBy: null,
              createdDt: expect.any(String),
              updatedBy: null,
              updatedDt: expect.any(String),
            },
          }),
        });
        done();
      })
      .catch((e) => {
        console.log(e);
        done();
      });
  });
});
