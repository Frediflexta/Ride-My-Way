import usersTable from '../db/users';
import ridesTable from '../db/rides';
import requestsTable from '../db/requests';

usersTable();
setTimeout(ridesTable, 1000);
setTimeout(requestsTable, 500);
