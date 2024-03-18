CREATE TABLE public.task (
	id serial NOT NULL,
	title varchar(32) NULL,
	"description" varchar(512) NULL,
	CONSTRAINT task_pkey PRIMARY KEY (id)
);

CREATE TABLE public.user (
	id serial NOT NULL,
	username varchar(64) NOT NULL,
	"password" varchar(64),
	CONSTRAINT user_pkey PRIMARY KEY (id)
);
