a
SELECT * FROM `Funcionários`;

b
SELECT id,name FROM `Funcionários`;


c
SELECT * FROM `Funcionários`
WHERE name = "laura";


d
SELECT * FROM `Funcionários`
WHERE name LIKE "%A%";


e
SELECT * FROM `Funcionários`
WHERE name NOT LIKE "%r%" AND email LIKE "%u%";
