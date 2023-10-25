INSERT INTO department (name)
VALUES ('R&D'),
       ('Gross Things'),
       ('[REDACTED]'),
       ('Jeffries');

INSERT INTO role (title, salary, department_id)
VALUES ('Researcher', 25000, 1),
       ('Developer', 28999, 1),
       ('Ampersand', 450000, 1),
       ('Leech', 2400, 2),
       ('Slug', 2690, 2),
       ('Cthontic God', 600000, 3),
       ('Ascended One', 400000, 3),
       ('Cryptids', 2500, 3),
       ('Finders', 40000, 4),
       ('Makers', 45600, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('Bob', 'Bobert', 1, 3),
       ('Rob', 'Robert', 1, 3),
       ('John', 'Jobert', 2, 4),
       ('Andy', 'Sandy', 3, NULL),
       ('leech', 'leecherson', 4, 7),
       ('slug,', 'slugerton', 5, NULL),
       ('Cthulu', 'Cthuluson', 6, NULL),
       ('[REDACTED]', '[REDACTEDSON]', 7, NULL),
       ('Big', 'Foot', 8, 8),
       ('The', 'Bibendum', 8, NULL),
       ('Jeffery', 'Finder', 9, NULL),
       ('Jeffery', 'Maker', 10, 11);
