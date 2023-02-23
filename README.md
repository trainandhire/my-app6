
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