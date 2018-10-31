# Microservicio <%=name%> 

Microservicio <%=name%> autogenerado.

<%=description%>

## Tecnologías

ms-generator usa los siguientes proyectos open source:

* [node.js]: Sistema I/O para backend
* [Karma]: Sistema de Test
* [Mongo]: Base de datos NoSQL
* [Webpack]: Empaquetado del componente


## Instalación

Requiere [node.js] v6+. 

Comprobar la versión:

    $ npm --version

### Instalación de las dependencias:

    $ npm install

### Instalación de los typings

    $ typings install

### Vinculación del Generador a la lista de Generadores:    
  
Desde la raiz del proyecto:

    $ npm link

## Vincular a Git

Para iniciar el repositorio local

    $ git init
    
## Ejecución

Ejecutar el microservicios:
    
    $ npm start

o en desarrollo

    $ npm run dev

## Distribución

Construir el microservicio para distribuir:
    
    $ npm run build


## Publicación

Para publicar el componente, hay que asegurarse de que se modifica la versión:

    <!-- package.json -->
    version: x.x.x
    X.x.x [MAJOR] Incrementos de tecnología y compatibilidad descendente
    x.X.x [MINOR] Incrementos de Funcionalidades
    x.x.X [PATCH] Incrementos evolutivos y correctivos que no añaden funcionalidad

Y se incluyen los archivos en el package.json

Y después ejecutar:

    $ npm publish


----

[//]: # (These are reference links used in the body)
   [Mongo]: <https://www.mongodb.com/es>
   [Webpack]: <https://webpack.github.io/>
   [Node.js]: <http://nodejs.org>
   [Karma]: <https://karma-runner.github.io>