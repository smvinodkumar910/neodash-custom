1. docker pull neo4jlabs/neodash:latest
2. Created a Artifact repo
	us-central1-docker.pkg.dev/prj-edw-geocoder-1/neodash-docker-repo
	
3. run below command to authenticate artifact repo from docker in cloud shell
	gcloud auth configure-docker us-central1-docker.pkg.dev/prj-edw-geocoder-1/neodash-docker-repo
	
4. docker image ls 

5. tag the downloaded docker image with the artifact repo 
	docker tag neo4jlabs/neodash us-central1-docker.pkg.dev/prj-edw-geocoder-1/neodash-docker-repo/neodash-editable:staging
	
6. docker push us-central1-docker.pkg.dev/prj-edw-geocoder-1/neodash-docker-repo/neodash-editable:staging
	docker push us-central1-docker.pkg.dev/prj-edw-geocoder-1/neodash-docker-repo/neodash:2.4.8-custom.1

7. Deploy the container in cloud Run.


--------------------

docker pull hlinneo4j2/neodash:2.4.8-custom.5
docker tag hlinneo4j2/neodash:2.4.8-custom.5 us-central1-docker.pkg.dev/prj-edw-geocoder-1/neodash-docker-repo/neodash:2.4.8-custom.5
docker push us-central1-docker.pkg.dev/prj-edw-geocoder-1/neodash-docker-repo/neodash:2.4.8-custom.5
----------------------------------------------------------------------------

8. Create a standalone deployment with below environment variables.

-e ssoEnabled=false \
-e ssoProviders=[] \
-e ssoDiscoveryUrl="https://example.com" \
-e standalone=true \
-e standaloneProtocol="neo4j+s" \
-e standaloneHost="9331dcbc.databases.neo4j.io" \
-e standalonePort="7687" \
-e standaloneDatabase="neo4j" \
-e standaloneDashboardName="SIMILAR SUPPLIER" \
-e standaloneDashboardDatabase="neo4j" \
-e standaloneDashboardURL="dashboards" \
-e standaloneAllowLoad=true \
-e standaloneLoadFromOtherDatabases=false \
-e standaloneMultiDatabase=false \
-e standaloneDatabaseList="neo4j" \

------------------------------------------------------

Next Steps :

1. How to have this app only inside Aptive network (inbound) ?
2. Connecting to Aptive hosted neo4j backend  (outbound) ?     ---- if its not possible have to deploy in kubernates.

-------------------------------------------------

To build custom docker image :

docker build . -t us-central1-docker.pkg.dev/prj-edw-geocoder-1/neodash-docker-repo/neodash-custom-editable:custom.1

docker push us-central1-docker.pkg.dev/prj-edw-geocoder-1/neodash-docker-repo/neodash-custom-editable:custom.1

-------

docker build . -t us-central1-docker.pkg.dev/prj-edw-geocoder-1/neodash-docker-repo/neodash:2.4.8-custom.3.1

docker push us-central1-docker.pkg.dev/prj-edw-geocoder-1/neodash-docker-repo/neodash:2.4.8-custom.3.1