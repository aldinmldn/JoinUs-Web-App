-- User list
SELECT * FROM users;

-- Show the newest user on the web app
SELECT * 
FROM users 
order by created_at DESC limit 1;

-- Show the earliest user date and date formatting
SELECT 
    DATE_FORMAT(MIN(created_at), "%M %D %Y") as earliest_date 
FROM users;

-- Show the first user on the web app
SELECT * 
FROM   users 
WHERE  created_at = (SELECT MIN(created_at) 
                     FROM   users); 

-- Count the months when the user joins the web app
SELECT Monthname(created_at) AS month, 
       Count(*)              AS count 
FROM   users 
GROUP  BY month 
ORDER  BY count DESC; 

-- Count the yahoo users
SELECT Count(*) AS yahoo_users 
FROM   users 
WHERE  email LIKE '%@yahoo.com'; 

-- Count all the type of email
SELECT CASE 
         WHEN email LIKE '%@gmail.com' THEN 'gmail' 
         WHEN email LIKE '%@yahoo.com' THEN 'yahoo' 
         WHEN email LIKE '%@hotmail.com' THEN 'hotmail' 
         ELSE 'other' 
       end      AS provider, 
       Count(*) AS total_users 
FROM   users 
GROUP  BY provider 
ORDER  BY total_users DESC; 