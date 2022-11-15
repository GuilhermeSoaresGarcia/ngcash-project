CREATE TABLE "public.Users" (
	"id" uuid DEFAULT gen_random_uuid() NOT NULL,
	"username" varchar(50) NOT NULL UNIQUE,
	"password" varchar(50) NOT NULL,
	"accountId" uuid,
	CONSTRAINT "Users_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.Accounts" (
	"id" uuid DEFAULT gen_random_uuid() NOT NULL,
	"balance" money NOT NULL,
	CONSTRAINT "Accounts_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.Transactions" (
	"id" uuid DEFAULT gen_random_uuid() NOT NULL,
	"debitedAccountId" uuid NOT NULL,
	"creditedAccountId" uuid NOT NULL,
	"value" money NOT NULL,
	"createdAt" DATE NOT NULL,
	CONSTRAINT "Transactions_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

ALTER TABLE "public.Users" ADD CONSTRAINT "Users_fk0" FOREIGN KEY ("accountId") REFERENCES "public.Accounts"("id");
ALTER TABLE "public.Transactions" ADD CONSTRAINT "Transactions_fk0" FOREIGN KEY ("debitedAccountId") REFERENCES "public.Accounts"("id");
ALTER TABLE "public.Transactions" ADD CONSTRAINT "Transactions_fk1" FOREIGN KEY ("creditedAccountId") REFERENCES "public.Accounts"("id");

