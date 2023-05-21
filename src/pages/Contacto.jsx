
function Contacto() {
    return (
        <div className="wrapper-contacto">
            <div className="hero-wrapper">
                <h1>Contacto</h1>
                <form method="POST">
                    <div className="form-group">
                        <label htmlFor="name">Nombre</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Correo electrónico</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Mensaje</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Enviar" className="btn" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contacto;