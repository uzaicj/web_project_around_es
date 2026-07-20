# Around The U.S.

## Descripción

Around The U.S. es una aplicación web interactiva que permite explorar una galería de tarjetas con imágenes de distintos lugares del mundo. El usuario puede editar su perfil, agregar nuevas tarjetas con su propia imagen y título, y ver cada imagen en una vista ampliada mediante ventanas emergentes (popups).

Este proyecto forma parte del Sprint 8 del bootcamp Full Stack de TripleTen, cuyo objetivo fue refactorizar la lógica del proyecto aplicando Programación Orientada a Objetos (POO) con TypeScript, sustituyendo funciones sueltas por clases reutilizables y fuertemente tipadas.

## Funcionalidad

- Edición de la información del perfil (nombre y descripción).
- Agregado de nuevas tarjetas con imagen y título.
- Visualización ampliada de imágenes en un popup.
- Validación de formularios en tiempo real, con mensajes de error y activación/desactivación dinámica del botón de envío.
- Cierre de ventanas emergentes mediante botón de cerrar, clic en el área sombreada, o la tecla Esc.

## Tecnologías y técnicas utilizadas

- HTML5 semántico
- CSS3 (metodología BEM)
- TypeScript
- Programación Orientada a Objetos (POO): encapsulamiento, herencia, y genéricos
- Clases implementadas:
  - `FormValidator`: validación de formularios reutilizable.
  - `Card` y `Section<T>`: creación y renderizado de tarjetas mediante genéricos y funciones de callback.
  - `Popup`, `PopupWithImage`, `PopupWithForm`: jerarquía de clases para el manejo de ventanas emergentes mediante herencia.
  - `UserInfo`: gestión de la información del perfil del usuario.
- Compilador `tsc` para la transpilación de TypeScript a JavaScript.

## Publicación

El proyecto fue publicado mediante GitHub Pages.

---

## Autor

Desarrollado por Uzaí como parte del programa Full Stack Developer de TripleTen.
