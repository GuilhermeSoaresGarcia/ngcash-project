CREATE TABLE "public.Users" (
	"id" serial NOT NULL,
	"username" varchar(50) NOT NULL UNIQUE,
	"password" varchar(50) NOT NULL,
	"accountId" int NOT NULL,
	CONSTRAINT "Users_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "public.Accounts" (
	"id" serial NOT NULL,
	"balance" money NOT NULL,
	CONSTRAINT "Accounts_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "public.Transactions" (
	"id" serial NOT NULL,
	"debitedAccountId" int NOT NULL,
	"creditedAccountId" int NOT NULL,
	"value" money NOT NULL,
	"createdAt" DATE NOT NULL,
	CONSTRAINT "Transactions_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

ALTER TABLE "public.Users" ADD CONSTRAINT "Users_fk0" FOREIGN KEY ("accountId") REFERENCES "public.Accounts"("id");
ALTER TABLE "public.Transactions" ADD CONSTRAINT "Transactions_fk0" FOREIGN KEY ("debitedAccountId") REFERENCES "public.Accounts"("id");
ALTER TABLE "public.Transactions" ADD CONSTRAINT "Transactions_fk1" FOREIGN KEY ("creditedAccountId") REFERENCES "public.Accounts"("id");

