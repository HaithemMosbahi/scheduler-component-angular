# scheduler-component-angular

The [scheduler component](https://github.com/HaithemMosbahi/scheduler-component-angular.git) is a web component that makes it easy to create highly customizable calendar to manage and schedule events. The scheduler is built using polymer 2.0 which uses ES 6 and implements custom element specification V1.

The aim of this project is to demonstrate how to integrate Web components within an existing angular 2+ application. More specificaly, this application uses the <scheduler-component> inside an angular tempalte component.

Moreover, The goal is to show you how a polymer web component can be interoperable with angular.

## Angular :heart: Web components

In the next section, I will illustrate the required setup in order to integrate a Web component within an Angular application.

* I want to use Custom elements 

The first step is to tell angular that you are going to use custom elements which are not part of angular application. To do so the angular module in which a web component will be used must add CUSTOM_ELEMENTS_SCHEMA to the schema Array.

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

Without the CUSTOM_ELEMENTS_SCHEMA, Angular check will fail when an unknown Html element is found in component's template.

* Install A Web component

In web components land, Bower is the recommended way to manage components. In order to use a web component from the [store](https://www.webcomponents.org/) of custom elements, we need to configure bower to be used with Angular CLI.

First of all, bower must be installed and a bower init will be needed in order to be able to install elements later.

We will consider bower_components as assets of our angular application. Thus, angular CLI and precisely Webpack will bundle the elements with the main application. Fortuantly, bower install destination can be configured. You need to create a file in the project root with .bowerrc as a name, then inside this file we will tell bower to add the installed components in angular's assets folder :

```json
{
  "directory" : "src/assets/bower_components"
}

```


* Start using your Web component

## License 

MIT © [Haithem Mosbahi](mailto:elmosbahihaithem@gmail.com)
