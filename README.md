- nx-monorepo angular + nestjs

- simple color palette generator

-- How to start --

1. Execute the following command: npx nx run-many --target=serve --projects=api,color 
2. Enjoy :)

- FE host: http://localhost:4200/
- BE API host: 
  - http://localhost:3333/api/generate-colors
  - http://localhost:3333/api/generate-colors/:color (Use 'red' for example, 'red' is currently only supported option)
