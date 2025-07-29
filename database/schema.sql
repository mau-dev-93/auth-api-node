CREATE TABLE roleCat (
  id int primary key generated always as identity,
  slug VARCHAR(50) UNIQUE NOT NULL,
  name VARCHAR(100) NOT NULL
);

insert into roleCat (slug, name) values ('admin','Administrador');
insert into roleCat (slug, name) values ('user','Usuario');

CREATE TABLE genderCat (
  id varchar(2) UNIQUE NOT NULL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

insert into genderCat(id, name) values ('M', 'Masculino');
insert into genderCat(id, name) values ('F', 'Femenino');
insert into genderCat(id, name) values ('NB', 'No Binario');
insert into genderCat(id, name) values ('O', 'Otro');
insert into genderCat(id, name) values ('N', 'Prefiero no decir');

CREATE TABLE users (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  phone_number numeric(10),
  last_name varchar(150),
  gender_id Varchar(2) REFERENCES genderCat(id),
  role_id INT NULL REFERENCES roleCat(id)
);