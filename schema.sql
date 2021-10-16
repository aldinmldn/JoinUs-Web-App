create database join_us;

use database join_us;

create table users(
    email varchar(255) primary key,
    created_at timestamp default now()
);

INSERT INTO users (email) VALUES('Katie34@yahoo.com'), ('Tunde@gmail.com');