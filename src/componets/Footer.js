import Menu from './navBar/Menu'

const Footer = () => {
    return (
        <>
            <footer className=" navbar-dark bg-dark">
                <div className="row">
                    <div className="col-lg-4">
                        <h5>MENU</h5>
                        <Menu />
                    </div>

                    <div className="col-lg-4">
                        <div className="col-lg-12">
                            <h5>DONDE ESTAMOS</h5>
                            <iframe title="ubicacion" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6562.967616117329!2d-58.368219!3d-34.667737!3m2
                                !1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe771f022c22a954b!2sEstadio%20Presidente%20Per%C3%B3n!5e0!3m2!1ses-419!2sar!4v16
                                43160000874!5m2!1ses-419!2sar" loading="lazy" />
                        </div>
                        <div className="col-lg-12">
                            <p>Direccion: Diego A. Milito, B1870 Avellaneda, Provincia de Buenos Aires.
                                Telefono: 91 642 32 16
                                Fax: 91 642 32 47
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <h5>DESARROLLADO CON</h5>
                        <p>
                            <img src="https://icongr.am/devicon/javascript-original.svg?size=70&color=currentColor" alt="Creado con React"></img>
                            <img src="https://icongr.am/devicon/react-original-wordmark.svg?size=70&color=currentColor" alt="Creado con React"></img>
                        </p>
                        <h5>Optimizado para</h5>
                        <p className="browsers">
                            <a href="#/">
                                <img src="https://icongr.am/devicon/firefox-original.svg?size=60&color=currentColor" alt="firefox" title="Firefox" />
                            </a>
                            <a href="#/">
                                <img src="https://icongr.am/devicon/chrome-original.svg?size=60&color=currentColor" alt="chrome" title="Chrome" />
                            </a>
                            <a href="#/">
                                <img src="https://icongr.am/devicon/safari-original.svg?size=60&color=currentColor" alt="safari" title="Safari" />
                            </a>
                            <a href="#/">
                                <img src="https://icongr.am/devicon/ie10-original.svg?size=60&color=currentColor" alt="explorer" title="Explorer" />
                            </a>
                            <a href="#/">
                                <img src="https://icongr.am/devicon/android-original.svg?size=60&color=currentColor" alt="android" title="android" />
                            </a>
                        </p>
                        <h5>AUTOR</h5>
                        <p> &copy; Juani Martin</p>

                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer