#"basePath": "http://localhost:8001/wireframe/",
npm run build:widget 

echo COPY FILES TO myCAE
cd ..
sudo cp -R CAE-WireframingEditor/widget/** myCAE/frontend/wireframe
