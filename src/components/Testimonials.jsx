import Reveal from './Reveal';

const Testimonials = () => {
    return (
        <section className="py-24 bg-slate-50 relative z-20">
            <div className="container mx-auto px-6 max-w-4xl text-center">
                <Reveal>
                    <div className="grid grid-cols-1 gap-8 mt-16 max-w-5xl mx-auto">
                        {/* Testimonial 1 */}
                        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100 text-left hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col md:flex-row gap-8 items-center">
                            <div className="w-20 h-20 flex-shrink-0 rounded-full border-4 border-blue-50 shadow-md overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" alt="Carlos Eduardo" className="w-full h-full object-cover" />
                            </div>

                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-3 text-yellow-400 text-sm">
                                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                                </div>
                                <p className="text-xl font-medium text-slate-700 leading-relaxed mb-4">
                                    <span className="text-4xl font-serif text-blue-200 leading-none mr-2">“</span>
                                    Absolutamente incrível. O atendimento é outro nível.
                                    O resultado das minhas lentes ficou <span className="text-blue-700 font-bold">impecável</span> e muito natural.
                                </p>
                                <div>
                                    <h4 className="text-lg font-bold text-slate-900">Carlos Eduardo</h4>
                                    <p className="text-sm text-slate-500 font-medium">Empresário</p>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100 text-left hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col md:flex-row gap-8 items-center">
                            <div className="w-20 h-20 flex-shrink-0 rounded-full border-4 border-blue-50 shadow-md overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop" alt="Ana Paula" className="w-full h-full object-cover" />
                            </div>

                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-3 text-yellow-400 text-sm">
                                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                                </div>
                                <p className="text-xl font-medium text-slate-700 leading-relaxed mb-4">
                                    <span className="text-4xl font-serif text-blue-200 leading-none mr-2">“</span>
                                    Simplesmente transformador. A equipe é super atenciosa e a tecnologia usada é <span className="text-blue-700 font-bold">surpreendente</span>. Recomendo de olhos fechados!
                                </p>
                                <div>
                                    <h4 className="text-lg font-bold text-slate-900">Ana Paula</h4>
                                    <p className="text-sm text-slate-500 font-medium">Advogada</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default Testimonials;
