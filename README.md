
GIT Setup:  
----------

    1) Link laptop and website

        git config --global user.name "XXXXX"
        git config --global user.name "YYYYY"

    2) Link project and github repository

        git init
        git remote add origin URLXXX

    3) Process - upload code

        git add .
        git commit -m "XXXX"
        git push

Angular:
--------

        Angular is a framework to build single page applications.


        framework: combination of libraries and languages.

                -> HTML, css, typescript, rxjs, zone.js

        
    Prerequisites:
    --------------
    1) Download and install node.js

            check:  node -v
                    npm -v

    2) Install angular with npm
            
            npm install -g @angular/cli

            check: ng version

    3) Create project

            ng new my-app

    4) Start the server

            ng serve


Frontend Application Architecture:
----------------------------------


Angular concepts:
-----------------



Routing:
--------

        Angular is a SPA, routing helps us to navigate from one view to another view.

        Implementation:
        ---------------
        1) configure the path in app-routing module.
        2) add router-outlet tag for router output.

        Types of Routes:
        ----------------

                1) General Route

                        {path:'login', component: LoginComponent}

                2) Empty Route/ Void Route

                        {path:'login', component: LoginComponent}

                3) Fallback Route/ wildcard Route

                        {path:'**', component: PageNotFoundComponent}

                4) Children Route
                   --------------

                        {path:'dashboard',component:DashComponent, children:[
                                {path:'home',component: HomeCommponent}
                        ]}


                        ***) need to give router-outlet in dashobard

        Navigation:
        -----------

          1) From HTML:
             ----------

                <button routerLink="_____"> login </button>            
                

          2) From TS:
             ---------









Angular Architecture:
---------------------

        Data bidning:
        -------------

        Interpolation:  ts -> html
        --------------

                Passing data from class to template

                Implementation:
                ---------------


        Event Binding: html -> ts
        --------------

                Passing data from template to class.

                Implementation:
                --------------- 


        Two way binding:  html    ts
        ----------------

                Passing data in two-ways between html and ts.

                Implementation:
                ---------------
                1) Import FormsModule in app module.
                2) use ngModel at input

                ***) We should not give ngModel inside form tag.

        
TS Variable Strucute:
---------------------
        public phone:number = 94949393;
Variable naming rules:
-----------------------

1) Name should be descriptive.

        fn, ln 

        firstName, lastName

2) Name should be in camel case

        first-name, firstname, first_name, FirstName

        firstName

3) We cannot give spaces in between names.

        first name  

        firstName

4) Bolean vaiable names should start with "is".

        isIndian
        isShow

Directives:  useful to alter the DOM.
-----------

        Direcives are three types.

        1) structural directives 
        2) attribute    
        3) component

        1) structural directives:  useful to alter the structure of DOM.
        -------------------------

            1) *ngFor:  Useful to iterate over html elements.
               --------
                <ol>
                        <li *ngFor="let name of names">{{name}}</li>
                </ol>


            2) *ngIf: useful to show/hide element on condition base.
              -------

                <h1 *ngIf="CONDITION">

        2) Attribute Directives: useful to alter attribute value dynamically
        ------------------------

            1) ngStyle:
            -----------

                <td [ngStyle]="{color: user.marks<35?'red':'green'}">{{user.marks}}</td>

        
            2) ngClass:
            -----------

                <td [ngClass]="{'classOne':CONDITION, 'classtwo':CONDITION}">


        3) Component directives:
        ------------------------

                components are part of directives.

                components are subset, directives are superset.


Pipes: Pipes are useful to transform data from one format to another format.
------  

        symbol:  |

        ex:   uppercase ,lowercase, json, date

                

Service:
--------

        why:
        ----
        1) When logic is not related to view (API Calls)
        2) When same logic requried across multiple components.

        Implementtaion:
        ---------------
        1) create service

                ng g s data

        2) Inject service in component

                constructor(private _dataService:DataService){
                        
                }


Structures:
-----------

1) Component
------------

        app.component.html
                     .css
                     .ts
                     .spec.ts (unit testing file)


        ts file structure:
        ------------------

                1) import statemnts
                2) @Component decorator

                    -> selector
                    -> templateUrl
                    -> styleUrls

                3)  class

                    -> variables
                    -> constructor
                    -> life cycle hooks
                    -> custom methods


2) Service Structure
--------------------

        phones.service.ts
                      .spec.ts


        service ts file structure:
        --------------------------
        1) import statments
        2) Injectable decorator

                -> providedIn

        3) class

                -> variables
                -> constructor
                -> custom methods


Constructor:
------------

        -> it is a function part of every class

        -> calls automatically when class initializes.


Module structure:
------------------

        1) import statemnts
        2) NgModule decorator

            1) declarations -> componets, pipes, directives
            2) imports      -> modules
            3) exports      -> components, pipes, directives
            4) providers    -> services
            5) bootstrap    -> Initial load component

        3) class


Decorator:
----------

        Decorator provides information.

        4 types of decorators:

                1) Class Decorators:  @Component, @Injectable, @NgModule
                2) Property Decorators: @Input, @Output
                3) Function Decorators: @HostListner, @HostBinding
                4) Argument Decorators:


API Integration:
----------------

Client and server architecture:
-------------------------------

Request methods, Response codes:
-------------------------------




RXJS: Reactive Extension for JavaScript.
-----

        RXJS is responsible for all the async operations in Angular.


        It has 3 features:
                
                1) promise
                2) observable
                3) subject


                Promise                             observable
               ---------                           ------------
    1)    Single call back                  1) multiple callback

    2)    If we create promise              2) Observable is lazy,
          executes automatically                whenever we SUBSCRIBE then only it executes.
        
    3)    We cannot stop in bitween         3) we can stop in between using UNSUBSCRIBE method

    4)    Less rxjs operator support        4)  more rxjs operator support.


            Observable                           subject
            ----------                         ------------

    1)   Unicast                           1) Multicast

    2)   No state                          2) Maintains state


API Integration:
----------------
1) import HttpClientModule.

        import { HttpClientModule } from '@angular/common/http';

2) Inject HttpClient service in UsersService.

        constructor(private _httpClient:HttpClient){ }

3) Create a method to get data from api.
   -> API will return observable of data.

        getUsers():Observable<any>
        {
                this._httpClient.get("URL")
        }

4) Subscribe in ts file to get data

        this._usersService.getUsers().subscribe(
                (data:any)=>{

                },
                (err:any)=>{

                }
        )






















                