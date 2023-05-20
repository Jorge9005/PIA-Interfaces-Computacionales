function Equipo() {
    return (
        <div className="wrapper-equipo">
            <h1>Equipo de Proyecto</h1>
            <table className="tabla-integrantes">
                <tr>
                    <th>Nombre</th>
                    <th>Matrícula</th>
                    <th>Carrera</th>
                    <th>Semestre</th>
                </tr>
                <tr>
                    <td>Jorge Luis Sandoval Pérez</td>
                    <td>1742114</td>
                    <td>IAS</td>
                    <td>8vo</td>
                </tr>
                <tr>
                    <td>Debanhi Montserrat Hernández Rangel</td>
                    <td>1798820</td>
                    <td>IAS</td>
                    <td>8vo</td>
                </tr>
                <tr>
                    <td>Ramón Gabriel Aguilar Espinosa</td>
                    <td>1827552</td>
                    <td>IAS</td>
                    <td>8vo</td>
                </tr>
                <tr>
                    <td>Leslie Medel Garza</td>
                    <td>1877641</td>
                    <td>IAS</td>
                    <td>8vo</td>
                </tr>
                <tr>
                    <td>Christian Sebastian Álvarez García</td>
                    <td>1903173</td>
                    <td>IAS</td>
                    <td>8vo</td>
                </tr>
                <tr>
                    <td>Miguel Armando Dorado Quintanilla</td>
                    <td>1898136</td>
                    <td>IAS</td>
                    <td>8vo</td>
                </tr>
            </table>
            <div className="container-tabla-datos">
                <table className="tabla-datos">
                    <tr>
                        <th>Grupo</th>
                        <th>Fecha/Hora</th>
                        <th>Salón</th>
                    </tr>
                    <tr>
                        <td>005</td>
                        <td>LMV - N4</td>
                        <td>4109</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default Equipo;