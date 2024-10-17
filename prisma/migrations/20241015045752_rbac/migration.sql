/*
  Warnings:

  - You are about to drop the column `is_menu` on the `menus` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "menus" DROP COLUMN "is_menu",
ADD COLUMN     "is_submenu" BOOLEAN NOT NULL DEFAULT true;
