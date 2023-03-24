/* PRÁTICA GUIADA - Parte 1
Crie um sistema de cadastro de usuários que contenha:

1. Type Alias para uma pessoa (Person) com as propriedades id, name, email, password e role;
2. Type Aliases de conta, com as propriedades account e permission: 
  a. AdminAccount 
  b. NormalAccount
*/

// Admin | Normal

enum Role {
  ADMIN = "Admin",
  NORMAL = "Normal"
}

type Person = {
  id: number,
  name: string,
  email: string,
  password: string,
  role: Role
}

type AdminAccount = {
  account: string,
  permission: boolean
}

type NormalAccount = {
  account: string,
  permission: boolean
}

type AdminUser = Person & AdminAccount
type NormalUser = Person & NormalAccount

const admins: Array<AdminUser> = []

const normais: NormalAccount [] = []

const user1: AdminUser = {
  id: 1,
  name: "Ludmila Souza",
  email: "ludmilasouz.a@hotmail.com",
  password: "172831",
  role: Role.ADMIN,
  account: "001",
  permission: true
}

const user2: NormalUser = {
  id: 2,
  name: "Rodrido Santos",
  email: "rodrigo.santos@hotmail.com",
  password: "12345",
  role: Role.NORMAL,
  account: "002",
  permission: false
}

function validarUsuario(usuario: any){
  if (usuario.role !== Role.ADMIN) {
    normais.push(usuario)
  } else {
    admins.push(usuario)
  }
}

validarUsuario(user1)

validarUsuario(user2)


console.table(normais)
console.table(admins)






















/* PRÁTICA GUIADA - Parte 2
Vamos continuar nosso sistema de cadastro de usuários criando:

1. Enum com valores ADMIN e NORMAL;
2. Tipo Intersection unindo: pessoa(Person) + permissão (Role);
3. Um array de usuários que permite guardar apenas usuários do tipo Person + Role;
4. Crie duas pessoas, uma com permissão normal e a outra admin;
5. Guarde essas pessoas no array de usuários.

*/ 