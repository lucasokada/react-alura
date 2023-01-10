create table award (
  id int not null auto_increment,
  awardNumber int not null,
  result varchar(6) not null,
  gameResult int not null,
  primary key (id)
);