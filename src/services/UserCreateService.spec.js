const UserCreateService =  require('./UserCreateService');
const UserRepositoryInMemory = require("../repositories/UserRepositoryInMemory");

/**colocamos o async para que o await possa funcionar */

it("user should be create", async ()  => {
  /**simulamos os inputs  */
    const user = {
        name: "User Test",
        email:"user@test.com",
        password:"123"
    };
/* agora instanciamos  */

    const userRepositoryInMemory = new UserRepositoryInMemory();
    const userCreateService = new UserCreateService(userRepositoryInMemory);
    const userCreated  = await userCreateService.execute(user);

    /* a minha expectativa é que devolva uma propriedade id
    dentro do objeto userCreated */
    expect(userCreated).toHaveProperty("id");
});