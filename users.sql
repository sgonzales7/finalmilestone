DROP DATABASE IF EXISTS hs;
                                                    CREATE DATABASE hs;

                                                    \c hs;

                                                    CREATE TABLE posts (
                                                      ID SERIAL PRIMARY KEY,
                                                      name VARCHAR,
                                                      email VARCHAR,
                                                      score VARCHAR
                                                    );

                                                    INSERT INTO posts (name, email, score)
                                                      VALUES ('Stephanie', 'stephanie@demo.com', '100');