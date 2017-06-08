use jadrn012;


drop table if exists orders;

create table orders(
    id int AUTO_INCREMENT PRIMARY KEY,
    sku varchar(50) NOT NULL,
    quantity varchar(100) NOT NULL,
    OrderDate datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
    ); 