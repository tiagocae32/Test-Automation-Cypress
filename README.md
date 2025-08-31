# Testing Ticketazo

Este proyecto contiene pruebas automatizadas para el registro de usuarios en Ticketazo utilizando Cypress con TypeScript.

## Estructura

- **cypress/e2e/Ticketazo/**: Pruebas end-to-end del registro de usuario.
- **cypress/e2e/Ticketazo/Data/**: Datos de prueba y generadores aleatorios.
- **cypress/e2e/Ticketazo/Helpers/**: Funciones auxiliares.
- **cypress/e2e/Ticketazo/Constants/**: Constantes usadas en los tests.
- **cypress/support/commands.ts**: Comandos personalizados de Cypress para reutilizar acciones comunes en los tests.

## Instalación

1. Clona el repositorio.
```bash
git clone https://github.com/tiagocae32/Test-Automation-Cypress.git
```

2. Instala dependencias:
```bash
npm install
```

## Ejecución de tests

Para correr los tests de Cypress:
```bash
npx cypress open
```
o en modo headless:
```bash
npx cypress run
```

## Contribución

- Mantén el código modular y reutilizable.
- Agrega nuevos tests en la carpeta correspondiente.
- Documenta cualquier función nueva en este README.

## Contacto

Para dudas o sugerencias, contactame a mi mail: tiagoviezzoli@gmail.com