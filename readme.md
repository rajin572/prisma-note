<!-- For Installaization -->

1. npm init -y <br/>
2. npm install typescript ts-node @types/node --save-dev <br/>
3. npx tsc --init <br/>
4. npm install prisma --save-dev <br/>
5. npx prisma init --datasource-provider sqlite <br/>
6. npm install @prisma/client <br/>

<!-- Some Important Commands -->
<p>
Migraton : Related to SQL Query and Database <br/>
Generation : Related to Prisma Client (It changes localy)
</p>
1. npx prisma migrate dev --name init (It's use to write SQL command and create schema for a database)<br/>
2. npx prisma migrate dev (to exicute some change in schema) <br/>
3. npx prisma generate (use to add columns on table) <br/>
4. npm install prisma --save-dev <br/>
5. npx prisma init --datasource-provider sqlite <br/>
   <br/>
