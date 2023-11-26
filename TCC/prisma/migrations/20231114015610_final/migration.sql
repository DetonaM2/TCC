-- CreateTable
CREATE TABLE "users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cpf" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "gender" BOOLEAN NOT NULL,
    "smoker" BOOLEAN NOT NULL,
    "hypertension" BOOLEAN NOT NULL,
    "diabetes" BOOLEAN NOT NULL,
    "fat" BOOLEAN NOT NULL,
    "psychosocial" BOOLEAN NOT NULL,
    "healthy" BOOLEAN NOT NULL,
    "cholesterol" BOOLEAN NOT NULL,
    "activity" BOOLEAN NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "doctor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cpf" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "doctor_cpf_key" ON "doctor"("cpf");
