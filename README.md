
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

                

            









                