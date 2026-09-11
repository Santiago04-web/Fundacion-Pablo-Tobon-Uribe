import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { SITE_DATA } from '../data/siteData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre || !formData.correo || !formData.mensaje) return;

    setIsSubmitting(true);
    // Simulate interactive submission handling
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ nombre: '', correo: '', mensaje: '' });
    }, 800);
  };

  return (
    <section id="contacto" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-bold text-[#0b1d3a] shadow-xs">
            <MessageSquare className="w-4 h-4 text-[#c5a059]" />
            <span>Contacto Institucional</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b1d3a] tracking-tight">
            {SITE_DATA.contact.title}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal">
            {SITE_DATA.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10">
          
          {/* Left Column: Official Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-2xl p-8 border border-slate-200/90 shadow-sm space-y-8">
              
              <h3 className="text-xl font-bold text-[#0b1d3a] border-b border-slate-100 pb-4">
                Información Oficial
              </h3>

              <div className="space-y-6">
                
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#0b1d3a] text-[#c5a059] rounded-xl shrink-0 mt-1">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Dirección</h4>
                    <p className="text-base font-semibold text-[#0b1d3a] mt-0.5">
                      {SITE_DATA.institution.address.street}
                    </p>
                    <p className="text-xs text-slate-500">
                      {SITE_DATA.institution.address.city}, {SITE_DATA.institution.address.region}, {SITE_DATA.institution.address.country}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#0b1d3a] text-[#c5a059] rounded-xl shrink-0 mt-1">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Teléfono de Atención</h4>
                    <a 
                      href={`tel:${SITE_DATA.institution.contact.phoneClean}`}
                      className="text-base font-semibold text-[#0b1d3a] hover:text-[#c5a059] transition-colors mt-0.5 block"
                    >
                      {SITE_DATA.institution.contact.phone}
                    </a>
                    <span className="text-xs text-slate-500">Atención telefónica directa</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#0b1d3a] text-[#c5a059] rounded-xl shrink-0 mt-1">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Correo Electrónico</h4>
                    <a 
                      href={`mailto:${SITE_DATA.institution.contact.email}`}
                      className="text-base font-semibold text-[#0b1d3a] hover:text-[#c5a059] transition-colors mt-0.5 block break-all"
                    >
                      {SITE_DATA.institution.contact.email}
                    </a>
                    <span className="text-xs text-slate-500">Soporte e información general</span>
                  </div>
                </div>

              </div>

              {/* Action Buttons for Quick Phone / Email */}
              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${SITE_DATA.institution.contact.phoneClean}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#0b1d3a] text-white text-xs font-bold py-3 px-4 rounded-xl hover:bg-[#071326] transition-colors border border-[#c5a059]/40"
                >
                  <Phone className="w-4 h-4 text-[#c5a059]" />
                  <span>Llamar ahora</span>
                </a>

                <a
                  href={`mailto:${SITE_DATA.institution.contact.email}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-white border border-slate-200 text-[#0b1d3a] text-xs font-bold py-3 px-4 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#c5a059]" />
                  <span>Enviar correo</span>
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            
            <div className="bg-white rounded-2xl p-8 border border-slate-200/90 shadow-sm space-y-6">
              
              <div className="border-b border-slate-100 pb-4">
                <h3 className="text-xl font-bold text-[#0b1d3a]">
                  Formulario de Contacto Directo
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Envíanos un mensaje institucional y nos pondremos en contacto contigo a la brevedad.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-4 animate-fade-in">
                  <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-900">
                    ¡Mensaje enviado con éxito!
                  </h4>
                  <p className="text-sm text-emerald-700 max-w-md mx-auto">
                    {SITE_DATA.contact.form.successMessage}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-xs font-bold text-[#0b1d3a] hover:underline"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Name Input */}
                  <div>
                    <label htmlFor="nombre" className="block text-xs font-bold text-[#0b1d3a] uppercase tracking-wider mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      required
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      placeholder={SITE_DATA.contact.form.namePlaceholder}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0b1d3a] focus:border-transparent transition-all bg-slate-50/50"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="correo" className="block text-xs font-bold text-[#0b1d3a] uppercase tracking-wider mb-2">
                      Correo electrónico *
                    </label>
                    <input
                      type="email"
                      id="correo"
                      required
                      value={formData.correo}
                      onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
                      placeholder={SITE_DATA.contact.form.emailPlaceholder}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0b1d3a] focus:border-transparent transition-all bg-slate-50/50"
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label htmlFor="mensaje" className="block text-xs font-bold text-[#0b1d3a] uppercase tracking-wider mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="mensaje"
                      rows={5}
                      required
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      placeholder={SITE_DATA.contact.form.messagePlaceholder}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0b1d3a] focus:border-transparent transition-all bg-slate-50/50 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#0b1d3a] hover:bg-[#071326] text-white text-base font-bold py-4 px-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-[#c5a059]/40 disabled:opacity-70 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Enviando mensaje...</span>
                    ) : (
                      <>
                        <span>{SITE_DATA.contact.form.submitButton}</span>
                        <Send className="w-4 h-4 text-[#c5a059]" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-slate-400 text-center">
                    Tus datos se manejan con estricta confidencialidad institucional.
                  </p>

                </form>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
