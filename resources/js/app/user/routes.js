import UserList from './pages/List';
import UserCreate from './pages/Create';
import UserEdit from './pages/Edit';

export default [
    {
        path: '/users',
        component: UserList
    },
    {
        path: '/users/create',
        component: UserCreate
    },
    {
        path: '/users/:userId/edit',
        component: UserEdit,
    }
]