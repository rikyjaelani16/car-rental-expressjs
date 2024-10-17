const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const MENUS = [
  {
    id: 1,
    name: "CARS",
    title: "Cars",
    icon: null,
    path: null,
    is_submenu: false,
    permissions: ["create", "update", "delete", "read", "import", "export"],
    createdBy: "Super Duper Admin",
  },
];

async function menuSeed() {
  await prisma.menus.deleteMany();
  return await prisma.menus.createMany({
    data: MENUS,
  });
}
module.exports = menuSeed;
