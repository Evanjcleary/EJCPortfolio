USE l2nvgjrelgansv5x;

CREATE TABLE IF NOT EXISTS projects (
 id int(11) NOT NULL AUTO_INCREMENT,
 project_name varchar(255) NOT NULL,
 project_description varchar(255) NOT NULL,
 project_repo varchar(255),
 deployed_link varchar(255),
 developers varchar(255),
 image varchar(255),
 PRIMARY KEY (id)
)