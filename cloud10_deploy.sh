# set in tasks/config.json
#     "basePath": "http://cloud10.dbis.rwth-aachen.de:8085/cae/wireframing/",
#set in src/js/misc/YjsSync.js
#       url : "http://cloud10.dbis.rwth-aachen.de:8083"

#npm run build:widget
echo COPY TO cloud10
scp -r widget/** cae@cloud10.dbis.rwth-aachen.de:./web/wireframing