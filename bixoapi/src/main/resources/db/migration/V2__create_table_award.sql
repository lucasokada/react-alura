create table award (
  id int not null auto_increment,
  award_number int not null,
  result varchar(6),
  game_result_id varchar(36),
  primary key (id)
);