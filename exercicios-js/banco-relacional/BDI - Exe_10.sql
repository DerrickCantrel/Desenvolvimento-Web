                                    -- BANCO DE DADOS EMPRESA --

-- Criando a tabela Departamento 
create table departamento (
    nome VARCHAR(45) NOT NULL,
    numero INT NOT NULL,
    num_empre INT,
    data_inicio DATE,
    PRIMARY KEY (nome)
);

-- Criando a tabela Localizações 
create table if not exists localizações (
    localização VARCHAR(45) NOT NULL,
    nome_depart VARCHAR(45) NOT NULL,
    PRIMARY KEY (localização), 
    FOREIGN KEY (nome_depart) REFERENCES departamento (nome)
);

-- Criando a tabela depedentes
create table dependentes (
    nome VARCHAR (45) NOT NULL,
    sexo CHAR(9) NOT NULL,
    data_nasc DATE,
    empreg_depend INT NOT NULL,
    PRIMARY KEY (nome),
    FOREIGN KEY (empreg_depend) REFERENCES empregados (ssn)
);

-- Criando a tabela Empregados
create table empregados (
    ssn INT NOT NULL,
    data_nasc DATE NOT NULL,
    salario DECIMAL(7,2) NOT NULL,
    ender VARCHAR(45),
    sexo CHAR(9) NOT NULL,
    nome_depart VARCHAR(45) NOT NULL,
    PRIMARY KEY (ssn),
    FOREIGN KEY (nome_depart) REFERENCES departamento (nome)
);

-- Criando a tabela Nome
create table if not exists nome (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    p_nome CHAR(12) NOT NULL,
    m_nome CHAR(12) NOT NULL,
    u_nome CHAR(12) NOT NULL,
    nome_empregado INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (nome_empregado) REFERENCES empregados (ssn)
);

-- Criando a tabela Empregado-Projeto
create table empregado_projeto (
    horas TIME NOT NULL,
    proj_nome VARCHAR(45) NOT NULL,
    empregado_ssn INT NOT NULL,
    PRIMARY KEY (horas),
    FOREIGN KEY (proj_nome) REFERENCES projetos (nome),
    FOREIGN KEY (empregado_ssn) REFERENCES empregados (ssn)
);

-- Criando a tabela Projetos
create table projetos (
    nome VARCHAR(45) NOT NULL,
    numero INT NOT NULL,
    localização VARCHAR(45) NOT NULL,
    nome_depart VARCHAR(45) NOT NULL,
    PRIMARY KEY (nome),
    FOREIGN KEY (nome_depart) REFERENCES departamento (nome)
);

