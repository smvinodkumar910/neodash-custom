
1. Below change is to avoid showing pop-up while opening shared dashboard url. 

in src/application/ApplicationThunks.ts
    line no : 258 commented.
    line no: 259 added const skipConfirmation = true;

2. Changed logo :

In Dockerfile

    line no; 24 added ENV DASHBOARD_HEADER_BRAND_LOGO=Aptiv_logo.png

3. DashboardHeader.tsx 
line no: 54 : commented line no. 54 to 58 the <nav> tag.


4. while deploying add below parameter in cloud Run. 

DASHBOARD_HEADER_BRAND_LOGO 
DASHBOARD_HEADER_BRAND_LOGO_DARK