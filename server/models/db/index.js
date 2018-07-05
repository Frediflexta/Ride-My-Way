import usersTable from '../db/users';
import ridesTable from '../db/rides';
import requestsTable from '../db/requests';

usersTable();
setTimeout(ridesTable, 500);
setTimeout(requestsTable, 1000);
