# ClockIn

## 🚀 Descripción del Proyecto

<!-- ![Project Logo](https://example.com/logo.png) -->

<!--[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://example.com/build-status)
[![Version](https://img.shields.io/badge/version-1.0-blue)](https://example.com/version)
[![License](https://img.shields.io/badge/license-MIT-yellow)](https://opensource.org/licenses/MIT)-->

**ClockIn** es una aplicación de control de asistencia diseñada para simplificar la gestión de equipos. Desarrollada con **React** para el frontend y **Node.js** para el backend, la aplicación permite a los empleados registrar su asistencia manualmente, mientras que los administradores tienen acceso a un completo dashboard para la gestión de usuarios, generación de reportes personalizados y geolocalización.

## 📌 Tabla de Contenidos

- [ClockIn](#clockin)
  - [🚀 Descripción del Proyecto](#-descripción-del-proyecto)
  - [📌 Tabla de Contenidos](#-tabla-de-contenidos)
  - [📦 Estructura del Proyecto](#-estructura-del-proyecto)
  - [🛠️ Requisitos Previos](#️-requisitos-previos)
  - [🚀 Ejecución del Proyecto](#-ejecución-del-proyecto)
    - [🌐 API](#-api)
    - [🖥️ Frontend](#️-frontend)
    - [🗄️ Base de Datos](#️-base-de-datos)
  - [🐳 Despliegue en Desarrollo con Docker Compose](#-despliegue-en-desarrollo-con-docker-compose)
  - [Comandos utiles](#comandos-utiles)
  - [👥 Autores y Colaboradores](#-autores-y-colaboradores)
  - [📜 Licencia](#-licencia)

---

## 📦 Estructura del Proyecto

ClockIn está organizado en las siguientes partes:

- **API**: Backend desarrollado con **Node.js** y **Express**.
- **Frontend**: Creado con **React** para una experiencia de usuario rápida y fluida.
- **Base de Datos**: Utiliza **MongoDB** para el almacenamiento de los datos de usuarios y registros de asistencia.
- **Despliegue**: Gestionado mediante **Docker** para simplificar el entorno de desarrollo y despliegue.

## 🛠️ Requisitos Previos

Antes de comenzar, asegúrate de tener las siguientes herramientas instaladas en tu máquina:

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [MongoDB](https://www.mongodb.com/)

---

## 🚀 Ejecución del Proyecto

### 🌐 API

```bash
# Navega a la carpeta de la API
cd api

# Instala las dependencias
npm install

# Inicia el servidor de desarrollo
npm start
```

### 🖥️ Frontend

```bash
Copiar código
# Navega a la carpeta del frontend
cd frontend

# Instala las dependencias
npm install

# Inicia el servidor de desarrollo
ng serve
```

### 🗄️ Base de Datos

---

## 🐳 Despliegue en Desarrollo con Docker Compose

Para levantar todo el entorno (API, frontend y base de datos) usando Docker:

Desde la raíz del proyecto

```bash
docker-compose up --build
```

Esto levantará todos los servicios necesarios y expondrá la API y el frontend en los puertos configurados en el archivo docker-compose.yml.

---

## Comandos utiles

Para implementar eslint y prettier se ha seguido la guia de [aqui](https://medium.com/@namtovar/configurando-eslint-y-prettier-para-un-proyecto-react-vite-ts-46cef56e5ad6) y [aqui](https://gist.github.com/ryokryok/2ab9be9f68091844503777d71c897315)

Para comprobar si existen conflictos entre prettier y eslint:

```bash
npx eslint-config-prettier ./src/main.tsx
```

---

## 👥 Autores y Colaboradores

- **Mykhaylo Lelgant** - [GitHub](https://github.com/Mykle23)

---

## 📜 Licencia

Este proyecto está bajo la licencia [MIT](https://opensource.org/licenses/MIT).
