# Consumo de APIs en Angular

## Introducción
En la actualidad, el uso de APIs (Interfaz de Programación de Aplicaciones) es fundamental en el desarrollo de aplicaciones web, ya que permiten la integración de datos y servicios externos de forma eficiente. Angular, un popular framework frontend, proporciona herramientas poderosas para consumir y gestionar datos desde APIs mediante el uso de servicios. En esta práctica, se desarrolló un proyecto en Angular para consumir una API pública y mostrar los datos obtenidos en una tabla, utilizando componentes, servicios y buenas prácticas de desarrollo.

## Objetivo
El objetivo principal fue desarrollar un proyecto en Angular que consuma datos desde una API externa, mostrando los datos en una tabla y aplicando el uso de componentes y servicios para mantener un código modular y escalable.

---

## Parte 1: Creación del Proyecto en Angular
Para iniciar el proyecto, se utilizó el siguiente comando para generar una nueva aplicación de Angular:

```bash
ng new consumo-api-INICIALES
```
Luego, se accedió a la carpeta del proyecto:

```bash
cd consumo-api-INICIALES
```

## Parte 2: Crear el Servicio para Consumir la API
Se generó un servicio llamado UserService en la carpeta services utilizando el comando:

```bash
ng generate service services/user
```

El servicio se configuró para consumir la API de usuarios ubicada en 

```bash
https://api.escuelajs.co/api/v1/users:
```

```bash
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://api.escuelajs.co/api/v1/users';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(`${this.apiUrl}`);
  }
}
```

## Parte 3: Configuración de app.module.ts
Para poder realizar peticiones HTTP, se incluyó el HttpClientModule en app.module.ts:

```bash
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

## Parte 4: Crear el Componente de la Tabla de Usuarios
Se generó un componente llamado user-list:

```bash
ng generate component components/user-list
```

En este componente se consumió el servicio creado anteriormente:

```bash
import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  users: any[] = [];
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = Object.values(data);
    });
  }
}
```

## Parte 5: Crear la Vista para Mostrar los Datos en una Tabla
El archivo user-list.component.html contiene el siguiente código:

```bash
<div class="container mt-5">
  <h2>User List</h2>
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let user of users">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.role }}</td>
      </tr>
    </tbody>
  </table>
</div>
```

## Parte 6: Integrar el Componente en la Aplicación
Para integrar el componente, se incluyó en app.component.html:

```bash
<app-user-list></app-user-list>
```

## Parte 7: Ejecutar el Proyecto
Finalmente, se ejecutó el proyecto con:

```bash
ng serve
```

El resultado fue visible en el navegador accediendo a 

```bash
http://localhost:4200
```

## Preguntas de Reflexión Final
### ¿Qué ventajas tiene el uso de servicios en Angular para el consumo de APIs?

Permiten la separación de la lógica de negocio y la reutilización de código en diferentes componentes.

### ¿Por qué es importante separar la lógica de negocio de la lógica de presentación?

Facilita el mantenimiento, pruebas y escalabilidad del código al separar la manipulación de datos de la interfaz de usuario.

### ¿Qué otros tipos de datos o APIs podrías integrar en un proyecto como este?

Se podrían integrar datos de productos, órdenes, ubicaciones geográficas, clima, redes sociales, o análisis de datos en tiempo real.

## Conclusión
Esta práctica permitió profundizar en el uso de Angular para consumir APIs y presentar datos en la interfaz de usuario de manera eficiente. Aprender a utilizar servicios y componentes en Angular es crucial para desarrollar aplicaciones modulares, escalables y fáciles de mantener. Además, se adquirieron habilidades prácticas para la integración de datos externos en proyectos frontend.
