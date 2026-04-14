# Organización de archivos CSS

## Estructura de archivos CSS del proyecto

El proyecto utiliza una arquitectura modular de CSS, donde cada página tiene su propio archivo de estilos, mejorantdo la organización y mantenibilidad del código.

### Archivos CSS

#### 1. **css/style.css** (Estilos Generales)

- Contiene los estilos generales y comunes del sitio
- Variables de colores `:root`
- Estilos base (html, body, \*)
- Header y navegación
- Componentes generales (cards, botones, formularios)
- Footer
- Media queries generales
- Estilos de accesibilidad

**Incluido en TODAS las páginas**

#### 2. **css/index.css** (Página de Inicio)

- Hero section fullwidth con ancho completo (100vw)
- Buscador de servicios
- Galería de servicios (service-card, service-overlay)
- Sección de propósito comunitario
- Animaciones (slideInDown, slideInUp)
- Estilos responsive específicos para index

**Usado en:** `index.html`

#### 3. **css/servicios.css** (Página de Servicios)

- Hero section estándar
- Carrusel de servicios
- Sistema de grilla de servicios
- Filtros de búsqueda
- Galería de items de servicio

**Usado en:** `html/servicios.html`

#### 4. **css/cupones.css** (Página de Cupones)

- Tarjetas de cupones (.cupon-card)
- Código de cupón (código dashed)
- Indicadores de descuento
- Sección de membresía
- Filtros de cupones
- Información de expiración

**Usado en:** `html/cupones.html`

#### 5. **css/contacto.css** (Página de Contacto)

- Formulario de contacto
- Información de contacto (.info-contacto)
- Horarios de atención (.horarios-section)
- Mapa incrustado
- Enlaces de redes sociales
- Estilos de validación de formularios

**Usado en:** `html/contacto.html`

#### 6. **css/registro.css** (Página de Registro)

- Formulario de registro de servicios
- Secciones del formulario (.form-section)
- Upload de archivos (.file-upload)
- Indicador de progreso (.progress-steps)
- Mensajes de éxito/error (.alert-registro)
- Validación de campos (.form-check, checkboxes)

**Usado en:** `html/registro.html`

## Estructura de inclusión en HTML

### Archivo index.html

```html
<!-- Se incluyen ambos archivos -->
<link rel="stylesheet" href="css/style.css" />
<link rel="stylesheet" href="css/index.css" />
```

### Archivos en carpeta html/

Se recomienda incluir los siguientes links en cada página:

```html
<!-- Página servicios.html -->
<link rel="stylesheet" href="../css/style.css" />
<link rel="stylesheet" href="../css/servicios.css" />

<!-- Página cupones.html -->
<link rel="stylesheet" href="../css/style.css" />
<link rel="stylesheet" href="../css/cupones.css" />

<!-- Página contacto.html -->
<link rel="stylesheet" href="../css/style.css" />
<link rel="stylesheet" href="../css/contacto.css" />

<!-- Página registro.html -->
<link rel="stylesheet" href="../css/style.css" />
<link rel="stylesheet" href="../css/registro.css" />
```

## Ventajas de esta estructura

1. **Modularidad**: Cada página tiene estilos separados
2. **Mantenibilidad**: Cambios en estilos específicos no afectan el resto del proyecto
3. **Rendimiento**: El navegador solo carga los estilos necesarios
4. **Escalabilidad**: Fácil agregar nuevas páginas con su propio CSS
5. **Reutilización**: Los estilos generales se comparten entre todas las páginas
6. **Organización**: Estructura clara y ordenada

## Nomenclatura de clases CSS

- Estilos de formularios: `.form-*`
- Tarjetas: `.card*`, `.cupon-card`, `.service-card`
- Secciones: `.section-*`
- Botones: `.btn-*`
- Componentes generales: Clases Bootstrap estándar

## Variables de color disponibles

```css
--color-primary: #1a237e /* Azul Oscuro */ --color-secondary: #ffc107
  /* Amarillo/Naranja */ --color-accent: #0d6efd /* Azul Claro */
  --color-success: #198754 /* Verde */ --color-danger: #dc3545 /* Rojo */
  --color-light-bg: #f8f9fa /* Gris Claro */ --color-text-dark: #212529
  /* Texto Oscuro */ --color-text-muted: #6c757d /* Texto Gris */;
```

## Responsive Breakpoints

- Desktop: > 768px
- Tablet: 576px - 768px
- Mobile: < 576px

Cada archivo CSS contiene sus propias media queries para mantener la organización.
