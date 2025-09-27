# OTP Verification Form – Checklist

## Formulario de OTP
- [ ] Crear formulario con **4 campos de entrada** (un dígito cada uno)  
- [X] Restringir entradas a **solo dígitos numéricos**

## Interacción con el Teclado
- [X] Permitir **ingreso directo** de dígitos en cada campo  
- [X] Permitir **pegar código completo (4 dígitos)** y distribuir en los campos  
- [X] Navegación con **flechas izquierda/derecha** entre campos  
- [X] Al presionar **Backspace en campo vacío**, retroceder al anterior y borrar contenido  

## Validación y Estado del Botón
- [ ] Validar que los 4 dígitos coincidan con **código recibido por parámetro GET en la URL**  
- [ ] **Habilitar botón** (verde) al ingresar código correcto  
- [ ] **Mantener botón deshabilitado** si código es incorrecto o incompleto  

## Estilo y Diseño
- [ ] Formulario **claro y fácil de usar**  
- [ ] Aplicar estilos básicos con **CSS o TailwindCSS**  

## Entrega
- [ ] Subir código a un **repositorio público en GitHub**  
- [ ] Compartir la **URL del repositorio**  

## Criterios de Evaluación
- [ ] Cumplimiento de la **funcionalidad especificada**  
- [ ] **Código limpio y organizado** con React + TypeScript  
- [ ] **Interacción fluida** con el teclado  
- [ ] **Gestión de estado eficiente** en React  
- [ ] (Opcional) Incluir **pruebas unitarias o de integración**