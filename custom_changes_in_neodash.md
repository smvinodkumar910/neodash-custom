
1. Below change is to avoid showing pop-up while opening shared dashboard url. 

in src/application/ApplicationThunks.ts
    line no : 258 commented.
    line no: 259 added const skipConfirmation = true;

2. Changed logo :

In Dockerfile

    line no; 24 added ENV DASHBOARD_HEADER_BRAND_LOGO=Aptiv_logo.png

