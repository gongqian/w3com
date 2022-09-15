/*
  Warnings:

  - The primary key for the `EntityMember` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[createdById]` on the table `Entity` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[memberId,entityId]` on the table `EntityMember` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `ratings` to the `Campaign` table without a default value. This is not possible if the table is not empty.
  - Added the required column `recommends` to the `Campaign` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shareds` to the `Campaign` table without a default value. This is not possible if the table is not empty.
  - Added the required column `trendings` to the `Campaign` table without a default value. This is not possible if the table is not empty.
  - Added the required column `views` to the `Campaign` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Campaign" ADD COLUMN     "ratings" INTEGER NOT NULL,
ADD COLUMN     "recommends" INTEGER NOT NULL,
ADD COLUMN     "shareds" INTEGER NOT NULL,
ADD COLUMN     "trendings" INTEGER NOT NULL,
ADD COLUMN     "views" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "EntityMember" DROP CONSTRAINT "EntityMember_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "EntityMember_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "Entity_createdById_key" ON "Entity"("createdById");

-- CreateIndex
CREATE UNIQUE INDEX "EntityMember_memberId_entityId_key" ON "EntityMember"("memberId", "entityId");
