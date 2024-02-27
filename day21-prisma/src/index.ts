import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(
  username: string,
  password: string,
  firstName: string,
  lastName: string
) {
  const res = await prisma.user.create({
    data: {
      username,
      password,
      firstName,
      lastName,
    },
  });
  console.log(res);
}

insertUser("admin1", "123456", "Sachin", "Sharma");

interface UpdateParams {
  firstName: string;
  lastName: string;
}

async function updateUser(
  username: string,
  { firstName, lastName }: UpdateParams
) {
  const res = await prisma.user.update({
    where: { username },
    data: {
      firstName,
      lastName,
    },
  });
  console.log(res);
}

updateUser("admin1", {
  firstName: "new name",
  lastName: "sharma",
});

async function getUser(username: string) {
  const user = await prisma.user.findFirst({
    where: {
      username: username,
    },
  });
  console.log(user);
}

getUser("admin1");
