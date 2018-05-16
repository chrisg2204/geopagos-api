CREATE TABLE public.users (
    "id" serial NOT NULL,
    "uuid" varchar NOT NULL,
    "email" varchar NOT NULL,
    "firstname" varchar NOT NULL,
    "lastname" varchar NOT NULL,
    "address" varchar,
    "status" boolean default TRUE,
    "created" timestamp without time zone DEFAULT NOW(),
    PRIMARY KEY ("id")
);

CREATE TABLE public.sales (
    "id" serial NOT NULL,
    "uuid" varchar NOT NULL,
    "user_email" varchar NOT NULL,
    "amount" decimal NOT NULL,
    "status" boolean default TRUE,
    "date" timestamp without time zone DEFAULT NOW(),
    PRIMARY KEY ("id")
);

CREATE TABLE public.users_sales (
    "id" serial NOT NULL,
    "id_user" INTEGER NOT NULL,
    "id_sale" INTEGER NOT NULL,
    PRIMARY KEY ("id")
);

ALTER TABLE public.users_sales
ADD CONSTRAINT fk_id_user
FOREIGN KEY (id_user)
REFERENCES public.users
ON DELETE CASCADE;

ALTER TABLE public.users_sales
ADD CONSTRAINT fk_id_sale
FOREIGN KEY (id_sale)
REFERENCES public.sales
ON DELETE CASCADE;