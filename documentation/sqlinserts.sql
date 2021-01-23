use adopet;

INSERT INTO `user_admin` VALUES 
(1,'joeMontana','Pablo','Perez','paperez@hotmail.com', 'hgbkbbkj', '1995-01-29', 3311331133, 1),
(2, 'taylorSwift','Taylor','Swift','tswift@hotmail.com', 'nvcnssb', '1992-08-13', 3352458458, 0),
(3, 'macMiller','Mac','Miller','mmiller@hotmail.com', 'djfhvbdjfbv', '1990-02-09', 3312585458, 1),
(4, 'rogerWatters','Roger','Watters','rwatters@hotmail.com', 'schjsdbjj', '1987-11-21', 335485985, 1),
(5, 'carlaBruni','Carla','Bruni','cbruni@hotmail.com', 'hjsbcjbsjcbs', '1997-01-29', 33644158598, 1),
(6, 'thomYorke','Thom','Yorke','tyorke@hotmail.com', '255663bbkj', '1982-01-29', 3331515896, 1),
(7, 'angelicaGarcia','Angelica','Garcia','agarcia@hotmail.com', 'hgbk5122j', '1998-12-14', 3398569586, 1);

INSERT INTO `user_rescuer` VALUES 
(1, 'jordanHull','Jordan','Hull','jHull@hotmail.com', 'shjdshjdshbsd', '1995-01-29', 3311331133, ' ', 'Casita de Paja', '2021-02-28', 0, 1),
(2, 'steveLacy','Steve','Lacy','sLacy@hotmail.com', 's5854515dshbsd', '1993-01-29', 3312585458, ' ', 'Casita de Fierro', '2021-02-28', 1, 1),
(3, 'kidCudi','Kid','Cudi','kcudi@hotmail.com', 'vbsjhfbsjf', '1983-01-29', 335485985, ' ', 'Casita de Carton', '2021-03-28', 1, 2),
(4, 'childishGambino','Childish','Gambino','cgambino@hotmail.com', '16515sd6dsaad', '1992-04-29', 33644158598, ' ', 'Casita de Madera', '2021-04-28', 1, 2);

INSERT INTO `user_adoptant` VALUES 
(1, 'frankOcean','Frank','Ocean','fOcean@hotmail.com', 'sdb3hweb', '1995-01-29', 3311331133, ' ', 0, 1),
(2, 'selenaGomez','Selena','Gomez','sgomez@hotmail.com', 'sd5f5sdf5sd5', '1992-01-29', 335485985, ' ', 1, 1),
(3, 'pCherry','Paul','Cherry','pCherry@hotmail.com', 'sfdfd5fd5f', '1991-01-29', 3331515896, ' ', 1, 3),
(4, 'jessieReyez','Jessie','Reyez','jreyez@hotmail.com', 'dchjdshjsdd', '1999-01-29', 3398569586, ' ', 1, 2);


INSERT INTO `pet` VALUES 
(1, 'pipo',' ','dog','mixed', 'F', 18, 'S', 'perro amable', true, true, false, false, false, 'none', 1, 1),
(2, 'cooper',' ','dog','chihuahua', 'M', 24, 'S', 'perro mordelon', true, false, true, true, true, 'money', 1, 2),
(3, 'rata',' ','cat','egipcyan', 'F', 2, 'S', 'gato chiqueado', false, false, false, false, false, 'none', 1, 2),
(4, 'kayza',' ','other','fish', 'M', 1, 'S', 'pez beta', true, true, true, true, true, 'none', 1, 3);

INSERT INTO `questionary` VALUES 
(1, 'Zapopan',true, true,5, true,1, 1),
(2, 'Guadalajara',true,true,2,true, 1, 2),
(3, 'Tlaquepaque',true,true,3, true, 1, 2),
(4, 'Tonala',false,true,4,true,1, 3);

INSERT INTO `request` VALUES 
(1, 1,2,1, 'evaluation'),
(2, 2,1,3, 'requested'),
(3, 3,3,3, 'adopted'),
(4, 4,4,2, 'evaluation');

INSERT INTO `event` VALUES 
(1, ' ','Venta de Croquetas', '2021-03-18','Zapopan', 'Croquetas varias',1, 1),
(2, ' ','Venta de Ropita', '2021-03-22','Guadalajara', 'Ropita Perrona',2, 2),
(3, ' ','Esterilizacion Gratis', '2021-04-18','Guadalajara', 'Para perros y gatos',1, 2),
(4, ' ','Vacunacion Gratuita', '2021-02-11','Tlaquepaque', 'Rabia y Parvovirus',1, 3);

INSERT INTO `directory` VALUES 
(1, ' ','veterinario', 'Mario Lopez','Zapopan', 3311331158, 'L-V', '09:00-18:00', 1, 2),
(2, ' ','entrenador', 'Juan Perez','Guadalajara', 3345859658, 'M-S', '09:00-18:00', 2, 1),
(3, ' ','alimentos', 'Don Croqueton','Tlaquepaque', 3356985485, 'L-V', '09:00-17:00', 1, 3),
(4, ' ','veterinario', 'Maria Bonita','Zapopan', 3345824518, 'L-V', '10:00-18:00', 1, 2);




