# OTP Verification Form – Checklist

## 🚀 Instalación

Este proyecto usa **React 17**, por lo que es necesario forzar la instalación de dependencias para evitar conflictos de compatibilidad.

### Comandos de instalación:

```bash
# Opción 1: Forzar instalación (recomendado)
npm install --force

# Opción 2: Ignorar conflictos de peer dependencies
npm install --legacy-peer-deps

# Opción 3: Si usas Yarn
yarn install --ignore-engines
```

### ⚠️ Nota importante:
- El proyecto está configurado con **React 17.0.2** intencionalmente
- Las dependencias modernas pueden requerir React 18+, pero son compatibles con React 17
- Usar `--force` o `--legacy-peer-deps` es necesario para completar la instalación

### Desarrollo:
```bash
npm run dev
```

### 🌐 Servidor de desarrollo:
- **Puerto**: `http://localhost:5173`
- **Apertura automática**: El navegador se abrirá automáticamente
- **Acceso desde red local**: `http://[tu-ip]:5173` (útil para testing en móviles)

### 📱 Testing en dispositivos móviles:
1. Conecta tu dispositivo a la misma red WiFi
2. Encuentra tu IP local: `ipconfig` (Windows) o `ifconfig` (Mac/Linux)  
3. Accede desde el móvil: `http://192.168.x.x:5173`


## Formulario de OTP
- [X] Crear formulario con **4 campos de entrada** (un dígito cada uno)  
- [X] Restringir entradas a **solo dígitos numéricos**

## Interacción con el Teclado
- [X] Permitir **ingreso directo** de dígitos en cada campo  
- [X] Permitir **pegar código completo (4 dígitos)** y distribuir en los campos  
- [X] Navegación con **flechas izquierda/derecha** entre campos  
- [X] Al presionar **Backspace en campo vacío**, retroceder al anterior y borrar contenido  

## Validación y Estado del Botón
- [X] Validar que los 4 dígitos coincidan con **código recibido por parámetro GET en la URL**  
- [X] **Habilitar botón** (verde) al ingresar código correcto  
- [X] **Mantener botón deshabilitado** si código es incorrecto o incompleto  

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