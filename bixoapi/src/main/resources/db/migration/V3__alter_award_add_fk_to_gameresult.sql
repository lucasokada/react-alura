alter table award add constraint AWARD_GAMERESULT_FK foreign key (gameResult) references gameresult(id);