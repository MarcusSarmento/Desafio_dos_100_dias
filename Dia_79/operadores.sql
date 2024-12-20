CREATE DATABASE  IF NOT EXISTS `empresa` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `empresa`;
-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: localhost    Database: empresa
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `departamento`
--

DROP TABLE IF EXISTS `departamento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `departamento` (
  `dnome` varchar(15) DEFAULT NULL,
  `dnumero` int NOT NULL,
  `cpf_gerente` char(11) NOT NULL,
  `data_inicio_gerente` date DEFAULT NULL,
  PRIMARY KEY (`dnumero`),
  KEY `cpf_gerente` (`cpf_gerente`),
  CONSTRAINT `departamento_ibfk_1` FOREIGN KEY (`cpf_gerente`) REFERENCES `funcionario` (`cpf`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `departamento`
--

LOCK TABLES `departamento` WRITE;
/*!40000 ALTER TABLE `departamento` DISABLE KEYS */;
INSERT INTO `departamento` VALUES ('Matriz',1,'88866555576','1981-06-19'),('Compras',3,'33344555587',NULL),('Administração',4,'98765432168','1995-01-01'),('Pesquisa',5,'33344555587','1988-05-22');
/*!40000 ALTER TABLE `departamento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dependente`
--

DROP TABLE IF EXISTS `dependente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dependente` (
  `fcpf` char(11) NOT NULL,
  `nome_dependente` varchar(15) NOT NULL,
  `sexo` char(1) DEFAULT NULL,
  `datanasc` date DEFAULT NULL,
  `parentesco` varchar(8) DEFAULT NULL,
  PRIMARY KEY (`fcpf`,`nome_dependente`),
  CONSTRAINT `dependente_ibfk_1` FOREIGN KEY (`fcpf`) REFERENCES `funcionario` (`cpf`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dependente`
--

LOCK TABLES `dependente` WRITE;
/*!40000 ALTER TABLE `dependente` DISABLE KEYS */;
INSERT INTO `dependente` VALUES ('12345678966','Alicia','F','1988-12-30','Filha'),('12345678966','Elizabeth','F','1967-05-05','Esposa'),('12345678966','Michael','M','1988-01-04','Filho'),('33344555587','Alicia','F','1986-04-05','Filha'),('33344555587','Janaína','F','1958-05-03','Esposa'),('33344555587','Tiago','M','1983-10-25','Filho'),('98765432168','Antonio','M','1942-02-28','Marido');
/*!40000 ALTER TABLE `dependente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `funcionario`
--

DROP TABLE IF EXISTS `funcionario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `funcionario` (
  `pnome` varchar(15) DEFAULT NULL,
  `minicial` char(1) DEFAULT NULL,
  `unome` varchar(15) DEFAULT NULL,
  `cpf` char(11) NOT NULL,
  `datanasc` date DEFAULT NULL,
  `endereco` varchar(50) DEFAULT NULL,
  `sexo` char(1) DEFAULT NULL,
  `salario` decimal(10,2) DEFAULT NULL,
  `cpf_supervisor` char(11) DEFAULT NULL,
  `dnr` int DEFAULT NULL,
  PRIMARY KEY (`cpf`),
  KEY `cpf_supervisor` (`cpf_supervisor`),
  KEY `dnr` (`dnr`),
  CONSTRAINT `funcionario_ibfk_1` FOREIGN KEY (`cpf_supervisor`) REFERENCES `funcionario` (`cpf`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `funcionario_ibfk_2` FOREIGN KEY (`dnr`) REFERENCES `departamento` (`dnumero`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `funcionario`
--

LOCK TABLES `funcionario` WRITE;
/*!40000 ALTER TABLE `funcionario` DISABLE KEYS */;
INSERT INTO `funcionario` VALUES ('Jorge','L','Caio','10000000000','1955-12-01','Rua Carolina Silva, 832, São Paulo, SP','M',26000.00,NULL,5),('João','B','Silva','12345678966','1965-01-09','Rua das Flores, 751, São Paulo, SP','M',30000.00,'33344555587',5),('Fernando','T','Wong','33344555587','1955-12-08','Rua da Lapa, 34, São Paulo, SP','M',40000.00,'88866555576',5),('Joice','A','Leite','45345345376','1972-07-31','Avenida Lucas Obes, 74, São Paulo, SP','F',25000.00,'33344555587',5),('Ronaldo','K','Lima','66688444476','1962-09-15','Rua Rebouças, 65, Piracicaba, SP','M',38000.00,'33344555587',NULL),('Jorge','E','Brito','88866555576','1937-11-10','Rua do Horto, 35, São Paulo, SP','M',55000.00,NULL,1),('Jennifer','S','Souza','98765432168','1941-06-20','Avenida Artur de Lima, 54, Santo André, SP','F',43000.00,'88866555576',4),('André','V','Pereira','98798798733','1969-03-29','Rua Timbira, 35, São Paulo, SP','M',25000.00,'98765432168',4),('Alice','J','Zelaya','99988777767','1968-01-19','Rua Souza Lima, 35, Curitiba, PR','F',25000.00,'98765432168',4);
/*!40000 ALTER TABLE `funcionario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `localizacao_dep`
--

DROP TABLE IF EXISTS `localizacao_dep`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `localizacao_dep` (
  `dnumero` int NOT NULL,
  `dlocal` varchar(15) NOT NULL,
  PRIMARY KEY (`dnumero`,`dlocal`),
  CONSTRAINT `localizacao_dep_ibfk_1` FOREIGN KEY (`dnumero`) REFERENCES `departamento` (`dnumero`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `localizacao_dep`
--

LOCK TABLES `localizacao_dep` WRITE;
/*!40000 ALTER TABLE `localizacao_dep` DISABLE KEYS */;
INSERT INTO `localizacao_dep` VALUES (1,'São Paulo'),(4,'Mauá'),(5,'Itu'),(5,'Santo André'),(5,'São Paulo');
/*!40000 ALTER TABLE `localizacao_dep` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `projeto`
--

DROP TABLE IF EXISTS `projeto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `projeto` (
  `projnome` varchar(15) NOT NULL,
  `projnumero` int NOT NULL,
  `projlocal` varchar(15) DEFAULT NULL,
  `dnum` int NOT NULL,
  PRIMARY KEY (`projnumero`),
  KEY `dnum` (`dnum`),
  CONSTRAINT `projeto_ibfk_1` FOREIGN KEY (`dnum`) REFERENCES `departamento` (`dnumero`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projeto`
--

LOCK TABLES `projeto` WRITE;
/*!40000 ALTER TABLE `projeto` DISABLE KEYS */;
INSERT INTO `projeto` VALUES ('ProdutoX',1,'Santo André',5),('ProdutoY',2,'Itu',5),('ProdutoZ',3,'São Paulo',5),('Informatização',10,'Mauá',4),('Reorganização',20,'São Paulo',1),('Novosbenefícios',30,'Mauá',4);
/*!40000 ALTER TABLE `projeto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trabalha_em`
--

DROP TABLE IF EXISTS `trabalha_em`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `trabalha_em` (
  `fcpf` char(11) NOT NULL,
  `pnr` int NOT NULL,
  `horas` decimal(3,1) NOT NULL,
  PRIMARY KEY (`fcpf`,`pnr`,`horas`),
  KEY `pnr` (`pnr`),
  CONSTRAINT `trabalha_em_ibfk_1` FOREIGN KEY (`pnr`) REFERENCES `projeto` (`projnumero`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `trabalha_em_ibfk_2` FOREIGN KEY (`fcpf`) REFERENCES `funcionario` (`cpf`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trabalha_em`
--

LOCK TABLES `trabalha_em` WRITE;
/*!40000 ALTER TABLE `trabalha_em` DISABLE KEYS */;
INSERT INTO `trabalha_em` VALUES ('12345678966',1,32.5),('45345345376',1,20.0),('12345678966',2,7.5),('33344555587',2,10.0),('45345345376',2,20.0),('33344555587',3,10.0),('66688444476',3,40.0),('33344555587',10,10.0),('98798798733',10,35.0),('99988777767',10,10.0),('33344555587',20,10.0),('88866555576',20,0.0),('98765432168',20,15.0),('98765432168',30,20.0),('98798798733',30,5.0),('99988777767',30,30.0);
/*!40000 ALTER TABLE `trabalha_em` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-09-17 13:02:14

/*
/* Crie e exiba uma visão que recupere o nome e o sobrenome dos funcionários e a quantidade total de horas que eles trabalham. 
Traga apenas os funcionários que trabalham mais de 35 horas*/
create view total_horas as 
select pnome, unome, sum(horas)
from funcionario inner join trabalha_em on cpf = fcpf
group by cpf
having sum(horas) > 35;

select * from total_horas;

/* Crie e exiba uma visão que recupere o nome e o sobrenome dos funcionários e o nome dos projetos que eles trabalham */
create view funcs as
select f.pnome, f.unome, p.projnome
from funcionario f
inner join trabalha_em on trabalha_em.fcpf = f.cpf
inner join projeto p on trabalha_em.pnr = p.projnumero
order by pnome asc;

/* Crie e exiba uma visão que recupere o nome de todos os funcionários juntamente com a quantidade de dependentes que eles possuem.
Caso ele não tenha nenhum dependente, exiba 0 na contagem */
create view num_dependentes as 
select pnome, unome, count(fcpf) as num_dependentes
from funcionario left join dependente on cpf = fcpf
group by cpf;

/* Traga os funcionários que possuem o maior número de dependentes */
select max(num_dependentes)
from num_dependentes;

/* Traga o nome dos funcs com o maior número de dependentes */
select pnome, unome, count(fcpf) as num_dependentes
from funcionario left join dependente on cpf = fcpf
group by cpf
having num_dependentes = (select max(num_dependentes) from num_dependentes);
 */

-- Recuperar o primeiro nome e o salário em que o salário do funcionário é maior pou igual a 30000
select pnome, salario
from funcionario
where salario >= 30000;

-- Recuperar a data de nascimento e o endereço do funcionário cujo nome completo seja "João B. Silva"
select datanasc, endereco 
from funcionario
where pnome = 'João' && minicial = 'B' && unome = 'Silva';

-- Recuperar todos os valores de atributo de qualque FUNCIOÁRIO no DEPARTAMENTO número 5
SELECT * from funcionario where dnr = 5;


-- Calcular Renubneração mensal dos funcionários e depois adicionar o bônus de 50
select pnome, unome, salario/12 + 50 as salario_mensal_bonus from funcionario;

-- Recupere o salário de cada funcionário
select all salario from funcionario;

-- Recuperar os valores de salários distintis de cada funcionário
select distinct salario from funcionario;

-- % Substitui uma quantidade qualquer de zero ou mais caracteres
-- _ Subtittui um unico caracter
-- Recuperar todos os funcionários cujo endereço esteja em São Paulo
select * from funcionario where endereco like "%São Paulo, SP";

--Encontrar todos os funcionários que o primeiro nome tem dois caracteres quaisquer seguidos de ice
select * from funcionario where pnome like "__ice";

-- Recuperar todos os funcionários no departamento 5 cujo salário esteja entre 30000 e 40000
select * from funcionario where (salario BETWEEN 30000 and 40000) and dnr = 5;

-- Recuperar o Nome e endereçode todos os funcionários que trabalham para o departamento de  "Pesquisa"
select pnome, unome, endereco from funcionario where dnr IN (select dnumero from departamento where dnome="Pesquisa");

-- Recuperar nome e numero do departamento dos empregados que ainda não possuem supervisor
select pnome, dnr from funcionario where cpf_supervisor is null;

-- Recuperar nome e numero do departamento dos empregados que ainda não possuem supervisor
select pnome, dnr from funcionario where cpf_supervisor is not null;

-- Recuperar todas as informções dos funcionários cujo Unome não seja Souza
select * from funcionario where unome not in ("Souza");

-- Recuperar todas as informações dos funcionários que possuem salário menor que 30000 ou maior que 50000
select * from funcionario where salario NOT BETWEEN 30000 and 50000;

-- Recuperar o primeiro nome e o salário do funcionário em que o salário é maior ou igual a 30000 ordenado pelo último nome
select pnome,salario from funcionario where salario >= 30000 order by unome;

-- Recuperar o nome e o endereço de todos os funcionários que trabalham para o departamento de pesquisa. Ordene pelo primeiro nome descendente
select pnome, unome, endereco from funcionario, departamento where dnome="Pesquisa" and dnumero = dnr order by pnome DESC;

-- Achar a soma dos salários de todos os funcionários, o salário máximo, o salário mínimo e a média dos salários
select SUM(salario), MAX(salario), MIN(salario), AVG(salario) from funcionario;

-- Achar a soma dos salários de todos os funcionários do departamentp "Pesquisa" bem como o salário máximo, o salário mínimo e a média dos salários nesse departamento
select SUM(salario), MAX(salario), MIN(salario), AVG(salario) from funcionario, departamento where dnome="Pesquisa" and dnumero = dnr;

-- Para cada departamento, recuperar o número do  departamento, o múmero do funcionários no departamento e seu salário médio
select dnr, count(*), avg(salario) from funcionario GROUP BY dnr;

-- Para cada supervisor, recuperar o cpf, o número de funcionários deste supervisor e o seu salario mínimo
select cpf_supervisor, count(*), avg(salario) from funcionario GROUP BY cpf_supervisor;
