-- Active: 1680198841780@@127.0.0.1@3306
-- Conecte o arquivo pratica-aprofundamento-sql.db com a extensão MySQL e ative a conexão aqui

-- Deletar tabela
DROP TABLE pokemons;

-- Criar tabela
CREATE TABLE pokemons (
    id INTEGER PRIMARY KEY UNIQUE NOT NULL,
    name TEXT UNIQUE NOT NULL,
    type TEXT NOT NULL,
    hp INTEGER NOT NULL,
    attack INTEGER NOT NULL,
    defense INTEGER NOT NULL,
    special_attack INTEGER NOT NULL,
    special_defense INTEGER NOT NULL,
    speed INTEGER NOT NULL
);

-- Popular tabela
INSERT INTO pokemons (
    id,
    name,
    type,
    hp,
    attack,
    defense,
    special_attack,
    special_defense,
    speed
)
VALUES 
    (1, "bulbasaur", "grass", 45, 49, 49, 65, 65, 45),
    (2, "ivysaur", "grass", 60, 62, 63, 80, 80, 60),
    (3, "venusaur", "grass", 80, 82, 83, 100, 100, 80),
    (4, "charmander", "fire", 39, 52, 43, 60, 50, 65),
    (5, "charmeleon", "fire", 58, 64, 58, 80, 65, 80),
    (6, "charizard", "fire", 78, 84, 78, 109, 85, 100),
    (7, "squirtle", "water", 44, 48, 65, 50, 64, 43),
    (8, "wartortle", "water", 59, 63, 80, 65, 80, 58),
    (9, "blastoise", "water", 79, 83, 100, 85, 105, 78);

-- Buscar todos os pokemons
SELECT * FROM pokemons;

-- Práticas
-- Prática 1

SELECT * FROM pokemons
WHERE speed > 60;

SELECT * FROM pokemons
WHERE attack >= 60 AND special_attack >= 60;

SELECT * FROM pokemons
WHERE name LIKE "%saur";

-- Prática 2
-- Busque na tabela pokemon a média simples da coluna hp
SELECT AVG(hp) AS "mediaHP" FROM pokemons; 

-- Busque número de linhas na tabela pokemon
SELECT COUNT(*) AS "linhasTabela" FROM pokemons;

-- Prática 3
-- Busque todos os pokemons e ordene-os baseado na coluna defense em ordem decrescente
SELECT * FROM pokemons
ORDER BY defense DESC;

-- Busque todos os pokemons e agrupe o resultado baseado na coluna type
SELECT COUNT(*) AS "totalTipos", type 
FROM pokemons
GROUP BY type;

-- Busque por todos os pokemons, limitado o resultado a 3 linhas iniciando a partir da quinta linha
SELECT * FROM pokemons
LIMIT 3
OFFSET 4;

-- Fixação

--Busque por todos os pokemons aplicando os filtros:
--Filtrar o resultado, mostrando somente os itens que possuem a coluna type valendo fire ou grass attack
--Ordem crescente baseado na coluna attack
--Resultado das linhas limitado a 3 a patir da terceira linha
SELECT * FROM pokemons
WHERE type = 'grass' OR type = 'fire'
ORDER BY attack ASC
LIMIT 3
OFFSET 3;







