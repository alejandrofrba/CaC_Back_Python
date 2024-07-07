
# TP

use CAC;

drop TABLE Contacto;

CREATE TABLE Contacto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NULL,
    fecLleg VARCHAR(15) NULL,
    fecSal VARCHAR(15) NULL,
    TipHab VARCHAR(20) NULL,
    email VARCHAR(100) NULL,
    Comentarios VARCHAR(400) NULL,
    almuerzo VARCHAR(16) NULL
);

select *
from Contacto;
