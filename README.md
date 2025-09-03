# ECommerceApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.7.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


Question

I'm building a Full Stack application. Should I store images as a BLOBs in the database or as files on filesystem? Also, can you tell me the pros/cons of each approach?



Answer

Good question!

In general, processing images stored as BLOBs in the database is slower than images stored on the file system. Of course, the answer really depends on your application requirements.

---

However, if you need to display BLOB images in an Angular app, here is a discussion on this topic:

https://stackoverflow.com/questions/55591871/view-blob-response-as-image-in-angular

---

And if you’d like a comparison of the storage methods (BLOB vs file), see the links below. They cover the pros/cons of each approach

https://teamtreehouse.com/community/storing-image-in-database-compare-with-storing-at-the-folder-server



Finally, here's a good discussion on this topic on stackoverflow. You can see different viewpoints from other developers

Storing Images in DB - Yea or Nay?

https://stackoverflow.com/questions/3748/storing-images-in-db-yea-or-nay



# https://github.com/darbyluv2code/fullstack-angular-and-springboot/blob/master/bonus-content/ecommerce-project/01-display-category-name-in-product-list-grid/01-display-category-name-in-product-list-grid.md
ng generate component components/search
ng g c components/search
