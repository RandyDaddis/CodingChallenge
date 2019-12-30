@echo off

echo CreateDb
sqlcmd -r1 -E -S (localdb)\MSSQLLocalDB -i CreateDb.sql -o CreateDb.log
echo errorLevel: %errorlevel%
echo -----------------
if errorlevel 1 goto ERROR_CreateDb

echo CreateDbTables
sqlcmd -r1 -E -S (localdb)\MSSQLLocalDB -i CreateDbTables.sql -o CreateDbTables.log
echo errorLevel: %errorlevel%
echo -----------------
if errorlevel 1 goto ERROR_CreateDbTables

echo CreateDbStoredProcedures
sqlcmd -r1 -E -S (localdb)\MSSQLLocalDB -i CreateDbStoredProcedures.sql -o CreateDbStoredProcedures.log
echo errorLevel: %errorlevel%
echo -----------------
if errorlevel 1 goto ERROR_CreateDbStoredProcedures

echo InsertSeedData
sqlcmd -r1 -E -S (localdb)\MSSQLLocalDB -i InsertSeedData.sql -o InsertSeedData.log
echo errorLevel: %errorlevel%
echo -----------------
if errorlevel 1 goto ERROR_InsertSeedData

echo finished
timeout /t -1
exit

:ERROR_CreateDb
echo == ERROR => cref: CreateDb.log

:ERROR_CreateDbTables
echo == ERROR => cref: CreateDbTables.log

:ERROR_CreateDbStoredProcedures
echo == ERROR => cref: CreateDbStoredProcedures.log

:ERROR_InsertSeedData
echo == ERROR => cref: InsertSeedData.log
