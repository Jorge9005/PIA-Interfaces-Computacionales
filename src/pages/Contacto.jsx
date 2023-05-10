
function Contacto() {
    return (
        <>
            <form action="">
                <h1>¡Escríbenos!</h1>
                <h3>¡Asesoría disponible las 24 hrs del día!</h3>
                <ul>
                    <li><input type="text" id="name" placeholder="Escribe tu nombre*"/></li>
                    <li><input type="text" id="email" placeholder="Escribe tu correo*"/></li>
                    <li><input type="text" id="asunto" placeholder="Asunto: ¡cuéntanos de qué va la consulta!*"/></li>
                    <li><textarea type="text" id="msg" placeholder="Mensaje: ¡explícanos lo que necesitas!*"/></li>
                </ul>
            </form>
        </>
    );
}

export default Contacto;