CREATE TABLE IF NOT EXISTS "game" (
    id SERIAL PRIMARY KEY,
    mandante VARCHAR(50) NOT NULL,
    visitante VARCHAR(50) NOT NULL,
    gols_mandante INTEGER NOT NULL,
    gols_visitante INTEGER NOT NULL,
    data_partida DATE NOT NULL    
    
);

INSERT INTO game (id, mandante, visitante, gols_mandante, gols_visitante, data_partida) VALUES
(1, 'Palmeiras', 'Santos', 1, 4, '2019-05-05'),
(2, 'São Paulo', 'Corinthians', 1, 1, '2019-05-05'),
(3, 'Flamengo', 'Vasco', 2, 1, '2019-05-05'),
(4, 'Atlético-MG', 'Cruzeiro', 2, 0, '2019-05-05'),
(5, 'Grêmio', 'Internacional', 1, 1, '2019-05-05'),
(6, 'Fluminense', 'Botafogo', 1, 0, '2019-05-05'),
(7, 'Bahia', 'Chapecoense', 1, 0, '2019-05-05'),
(8, 'Santos', 'Palmeiras', 2, 0, '2019-05-05'),
(9, 'Corinthians', 'São Paulo', 1, 1, '2019-05-05'),
(10, 'Vasco', 'Flamengo', 1, 2, '2019-05-05'),
(11, 'Cruzeiro', 'Atlético-MG', 0, 2, '2019-05-05'),
(12, 'Internacional', 'Grêmio', 1, 1, '2019-05-05'),
(13, 'Botafogo', 'Fluminense', 0, 1, '2019-05-05'),
(14, 'Chapecoense', 'Bahia', 0, 1, '2019-05-05'),
(15, 'Palmeiras', 'Corinthians', 1, 0, '2019-05-12'),
(16, 'São Paulo', 'Santos', 1, 6, '2019-05-12'),
(17, 'Flamengo', 'Cruzeiro', 2, 0, '2019-05-12'),
(18, 'Atlético-MG', 'Vasco', 2, 0, '2019-05-12'),
(19, 'Grêmio', 'Botafogo', 1, 1, '2019-05-12'),
(20, 'Fluminense', 'Internacional', 1, 0, '2019-05-12'),
(21, 'Bahia', 'Santos', 0, 3, '2019-05-12');