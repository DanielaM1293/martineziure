# Martínez Iure — Sitio web de consultorio jurídico

Sitio web profesional para **Martínez Iure**, un consultorio jurídico de Bogotá, Colombia, especializado en derecho laboral y de seguridad social, con orientación para colombianos en el exterior.

🔗 **Sitio en vivo:** [martineziure.netlify.app](https://martineziure.netlify.app/)

> 🇬🇧 English summary at the bottom.

---

## 📌 Sobre el proyecto

Proyecto real para un cliente: diseñé y desarrollé el sitio completo, desde la estructura y el diseño visual hasta el despliegue. El objetivo era dar al consultorio una presencia profesional en línea, explicar sus servicios con claridad y facilitar que un posible cliente lo contacte en pocos clics.

**Mi rol:** diseño, maquetación, desarrollo front-end, SEO básico y despliegue. [Ajusta aquí si hiciste algo más o algo menos.]

---

## ✨ Características

- **Página de una sola vista (landing)** con secciones: inicio, nosotros, formación y experiencia, servicios, testimonios, contacto y mapa.
- **Carrusel de imágenes** en la portada (Swiper).
- **Animaciones al hacer scroll** (AOS) y desplazamiento suave entre secciones.
- **Diseño responsive**: menú móvil, botón de "volver arriba" y barra lateral de redes en escritorio.
- **Contacto en varios canales**: formulario (Formspree), botón de WhatsApp, correo y redes sociales.
- **Mapa de Google Maps** con la ubicación del consultorio.
- **Seis áreas de servicio** presentadas en tarjetas: laboral y seguridad social, administrativo, conciliaciones, familia, tutelas y litigios.
- **Páginas legales**: política de privacidad, términos y condiciones, y una página para solicitar la eliminación de datos.
- **Página 404** personalizada.

## 🔍 SEO y visibilidad

- Etiquetas `title` y `description` pensadas para búsquedas en español.
- **Open Graph y Twitter Card** para que el enlace se vea bien al compartirlo.
- **Datos estructurados (schema.org `LegalService`)** con nombre, contacto, horario y zonas de servicio.
- Verificación de **Google Search Console**.

---

## 🧰 Tecnologías

| Área | Herramientas |
|---|---|
| Estructura y estilos | HTML5, CSS3, Tailwind CSS (CDN) |
| Interactividad | JavaScript, Swiper, AOS |
| Íconos y tipografía | Font Awesome, Google Fonts (Roboto) |
| Formulario | Formspree |
| Despliegue | Netlify |

## 📁 Estructura

```
martineziure/
├── index.html                  # Página principal
├── politica-de-privacidad.html
├── terminos-y-condiciones.html
├── eliminar-datos.html         # Solicitud de eliminación de datos
├── 404.html
├── assets/                     # Imágenes y logo
├── css/                        # Estilos
└── js/                         # Menú, carrusel y scroll
```

## ▶️ Cómo verlo en local

No necesita instalación. Clona el repo y abre `index.html` en el navegador:

```bash
git clone https://github.com/DanielaM1293/martineziure.git
cd martineziure
```

Para verlo con un servidor local (recomendado):

```bash
python -m http.server 8000
# abre http://localhost:8000
```

> El formulario de contacto envía los datos a Formspree, por lo que solo funciona con conexión a internet.

---

## 📈 Lo que aprendí

[Escribe 2 o 3 frases propias. Por ejemplo: trabajar con un cliente real, traducir sus necesidades a una estructura clara, SEO local, o manejar el contenido legal y de privacidad.]

## 🔜 Próximas mejoras

- Versión en inglés, ya que el público incluye colombianos en el exterior.
- Medir rendimiento y accesibilidad con Lighthouse.
- Sección de preguntas frecuentes.

---

## 👩‍💻 Autora

**Estefany Martínez** — Junior Frontend / Full-Stack Developer · Bogotá, Colombia
[GitHub](https://github.com/DanielaM1293) · [LinkedIn](https://www.linkedin.com/in/estefany-daniela-mart%C3%ADnez-ni%C3%B1o-b0832b209) · [Portafolio](https://estefanymar.netlify.app)

---

## 🇬🇧 English summary

Website for **Martínez Iure**, a law office in Bogotá, Colombia, focused on labor and social security law for Colombians living abroad. I designed and built the full site: responsive landing page, contact form (Formspree), WhatsApp integration, Google Maps, legal pages, structured data (schema.org) for SEO, and deployment on Netlify.

**Stack:** HTML5, CSS3, Tailwind CSS, JavaScript, Swiper, AOS, Formspree, Netlify.
**Live site:** [martineziure.netlify.app](https://martineziure.netlify.app/)
