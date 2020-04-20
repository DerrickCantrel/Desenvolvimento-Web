create table ALUNO (
    mat_aluno INT NOT NULL,
    nome VARCHAR(50),
    endereco VARCHAR(40),
    sexo VARCHAR(1),
    PRIMARY KEY (mat_aluno),
    UNIQUE KEY (nome)
);

create table DISCIPLINA (
    cod_disc INT NOT NULL,
    des_disc VARCHAR(50),
    mat_prof INT(2) NOT NULL,
    cod_disc_pre_req INT NOT NULL,
    cod_depto INT NOT NULL,
    PRIMARY KEY (cod_disc),
    FOREIGN KEY (mat_prof) REFERENCES PROFESSOR (mat_prof),
    FOREIGN KEY (cod_disc_pre_req) REFERENCES DISCIPLINA (cod_disc_pre_req),
    FOREIGN KEY (cod_depto) REFERENCES DEPARTAMENTO (cod_depto) 
);

create table ALUNO_DISCIPLINA (
    mat_aluno INT NOT NULL,
    cod_disc INT NOT NULL,
    CONSTRAINT fk_tbl_aluno FOREIGN KEY (mat_aluno) REFERENCES ALUNO (mat_aluno),
    CONSTRAINT fk_tbl_disciplina FOREIGN KEY (cod_disc) REFERENCES DISCIPLINA (cod_disc),
    CONSTRAINT pk_composta PRIMARY KEY (mat_aluno, cod_disc)
);

create table PROFESSOR (
    mat_prof INT(2) NOT NULL,
    nome_prof VARCHAR(50),
    end_prof VARCHAR(40),
    date_nasc DATE,
    tip_sexo VARCHAR(1),
    vlr_salario FLOAT,
    PRIMARY KEY (mat_prof),
    UNIQUE KEY (nome_prof)
);

create table DEPARMENTO (
    cod_depto INT NOT NULL,
    des_depto VARCHAR(60),
    cod_area INT NOT NULL,
    PRIMARY KEY (cod_depto),
    FOREIGN KEY (cod_area) REFERENCES AREA (cod_area)
);

create table AREA (
    cod_area INT NOT NULL,
    nom_area VARCHAR(30),
    PRIMARY KEY (cod_area),
    UNIQUE KEY (nom_area)
);