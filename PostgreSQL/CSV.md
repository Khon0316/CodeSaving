```postgresplsql
COPY TABLE (COLUMN) TO 'filepath.csv' WITH DELIMITER ',';

COPY persons TO 'C:\tmp\persons_db.csv' DELIMITER ',' CSV HEADER;

COPY persons(first_name,last_name,email) 
TO 'C:\tmp\persons_partial_db.csv' DELIMITER ',' CSV HEADER;

copy (SELECT * FROM persons) to 'C:\tmp\persons_client.csv' with csv

exists(select * from test); //true, false
```

 