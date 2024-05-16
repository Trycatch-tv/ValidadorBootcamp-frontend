import SigninContainer from '@/features/auth/signin/signin.auth.container';
import SignupContainer from '@/features/auth/signup/signup.auth.container';
import ListBackofficeContainer from '@/features/backoffice/list/list.backoffice.container';
import ProfileBootcampContainer from '@/features/bootcamps/profile/profile.bootcamp.container';
import HomeContainer from '@/features/home/Home.container';
import RankingContainer from '@/features/ranking/Ranking.container';
import AdminUsersContainer from '@/features/users/admin/admin.users.container';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/*',
        element: <HomeContainer />,
    },
    {
        path: 'signin',
        element: <SigninContainer />,
    },
    {
        path: 'signup',
        element: <SignupContainer />,
    },
    {
        path: 'ranking',
        element: <RankingContainer />,
    },
    {
        path: 'bootcamp/:id',
        element: <ProfileBootcampContainer />,
    },
    {
        path: 'backoffice',
        element: <ListBackofficeContainer />,
    },
    {
        path: 'backoffice/users',
        element: <AdminUsersContainer />,
    },
]);

export const MyRoutes = () => <RouterProvider router={router} />;
