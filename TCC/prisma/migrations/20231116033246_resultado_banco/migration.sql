-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_users" (
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
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "result" REAL NOT NULL DEFAULT 0
);
INSERT INTO "new_users" ("activity", "age", "cholesterol", "cpf", "createdAt", "diabetes", "fat", "gender", "healthy", "hypertension", "id", "psychosocial", "smoker") SELECT "activity", "age", "cholesterol", "cpf", "createdAt", "diabetes", "fat", "gender", "healthy", "hypertension", "id", "psychosocial", "smoker" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
