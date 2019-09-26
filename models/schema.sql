USE l2nvgjrelgansv5x;

SELECT * FROM projects;
SELECT * FROM requests;

SELECT * FROM Requests;
SELECT * FROM Projects;

CREATE TABLE IF NOT EXISTS Projects (
 id int(11) NOT NULL AUTO_INCREMENT,
 project_name varchar(255) NOT NULL,
 project_description varchar(255) NOT NULL,
 project_repo varchar(255),
 deployed_link varchar(255),
 developers varchar(255),
 image varchar(255),
 PRIMARY KEY (id)
);


CREATE TABLE IF NOT EXISTS equests (
 id int(11) NOT NULL AUTO_INCREMENT,
 request_name varchar(255) NOT NULL,
 request_description varchar(255) NOT NULL,
 requester_name varchar(255) NOT NULL,
 requester_email varchar(255) NOT NULL,
 requester_phone varchar(255) NOT NULL,
 request_budget varchar(255),
 request_misc varchar(255),
 PRIMARY KEY (id)
);

INSERT INTO requests ( request_name, request_description, requester_name, requester_email, requester_phone) VALUES ('test','testa','tesb','test2','test3');

INSERT INTO Projects (project_name, 
project_description, 
project_repo, 
deployed_link, 
image) 
VALUES ('Project Management System', 
'A System for Internal use to track expenses, revenues and profits searchable by specific jobs, jobsites or supervisors',
'https://github.com/jhunt1989/project_2',
'https://thawing-falls-91414.herokuapp.com/',
'http://pngimg.com/uploads/shovel/shovel_PNG7596.png');

INSERT INTO Projects (project_name, 
project_description, 
project_repo, 
deployed_link, 
image) 
VALUES ('Philly Sports News Forum', 
'A web scraper that lists top 10 Philly Sports and allows users to communicate',
'https://github.com/Evanjcleary/EJCPortfolio',
'https://phillysportsnews.herokuapp.com',
'http://pngimg.com/uploads/baseball/baseball_PNG19065.png');

INSERT INTO projects (project_name, 
project_description, 
project_repo, 
deployed_link, 
image) 
VALUES ('Nutri-prep', 
'A website for setting your daily calorie goal and you get 3 recommended recipes for the day to match those goals',
'https://github.com/nlasusa/project1',
'https://nlasusa.github.io/project1/',
'http://pngimg.com/uploads/turkey_food/turkey_food_PNG27.png');


INSERT INTO projects (project_name, 
project_description, 
project_repo, 
deployed_link, 
image) 
VALUES ('Friend Finder', 
'A survey that will match you up with the most compatible friend',
'https://github.com/Evanjcleary/FriendFinder',
'https://enigmatic-ocean-51146.herokuapp.com/',
'http://pngimg.com/uploads/heart/heart_PNG51351.png');

INSERT INTO projects (project_name, 
project_description, 
project_repo, 
deployed_link, 
image) 
VALUES ('Bamazon', 
'An application that is a back-end system for inventory management, made with ',
'https://github.com/Evanjcleary/Bamazon/',
'https://share.getcloudapp.com/DOujxrgZ/',
'http://pngimg.com/uploads/scales/scales_PNG77.png');


INSERT INTO projects (project_name, 
project_description, 
project_repo, 
deployed_link, 
image) 
VALUES ('Language Interpretation and Response Interface', 
'LIRI is a primitive prototype of a SIRI module',
'https://github.com/Evanjcleary/liri-node-app',
'https://share.getcloudapp.com/Wnuw42d5',
'http://pngimg.com/uploads/bulb/bulb_PNG1250.png');

INSERT INTO Projects (project_name, 
project_description, 
project_repo, 
deployed_link, 
image) 
VALUES ('Burger-App', 
'A simple application to test the post / get routes and link them up with a SQL database',
'https://github.com/Evanjcleary/Burger',
'https://limitless-shelf-52519.herokuapp.com/',
'http://pngimg.com/uploads/burger_sandwich/burger_sandwich_PNG4145.png');



 