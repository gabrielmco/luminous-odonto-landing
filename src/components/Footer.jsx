const Footer = () => {
    return (
        <footer className="bg-slate-950 text-white py-12 relative z-20" id="contact">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 text-center md:text-left">
                    {/* Coluna 1: Info */}
                    <div className="w-full md:w-1/3">
                        <h2 className="text-2xl font-bold tracking-tight mb-4">Luminous Odonto</h2>
                        <p className="text-slate-400 mb-6 max-w-xs mx-auto md:mx-0">Excelência e velocidade no seu sorriso.</p>
                        <p className="text-slate-500 text-sm">
                            Av. Rio Branco, 1234 - Centro<br />
                            Juiz de Fora - MG, 36000-000
                        </p>
                    </div>

                    {/* Coluna 2: Mapa (Centro) */}
                    <div className="w-full md:w-1/3 h-56 rounded-2xl overflow-hidden border border-slate-800 shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3705.572459816047!2d-43.34863032479632!3d-21.75806659779222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x989b6574c8b273%3A0xe530d17d59045330!2sAv.%20Bar%C3%A3o%20do%20Rio%20Branco%2C%20Juiz%20de%20Fora%20-%20MG!5e0!3m2!1spt-BR!2sbr!4v1709845123456!5m2!1spt-BR!2sbr"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    {/* Coluna 3: Links Sociais */}
                    <div className="w-full md:w-1/3 flex flex-col items-center md:items-end">
                        <div className="social-icons" aria-label="Redes sociais">
                            <a href="#" className="facebook" aria-label="Facebook">
                                <i className="fab fa-facebook-f" aria-hidden="true"></i>
                            </a>
                            <a href="https://instagram.com/diogenesbarbearia_" className="instagram" aria-label="Instagram">
                                <i className="fab fa-instagram" aria-hidden="true"></i>
                            </a>
                            <a href="https://wa.me/5532999999999" className="whatsapp" aria-label="WhatsApp">
                                <i className="fab fa-whatsapp" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-900 mt-12 pt-8 text-center text-xs text-slate-600">
                    © {new Date().getFullYear()} Luminous Odonto. Desenvolvido por Gabriel WebDev.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
