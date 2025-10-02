import HomePage from './pages/Home';
import {Routes, Route, createBrowserRouter} from 'react-router-dom';
import EventsPage from './pages/EventsPage';
import NewEventPage from './pages/NewEventPage';
import EventDetailPage, {
  loader as eventsLoader,
  action as deleteEventAction,
} from './pages/EventDetailPage';
import EditEventPage from './pages/EditEventPage';
import MainNavigation from './components/MainNavigation';
import RootLayout from './components';
import {RouterProvider} from 'react-router-dom';
import EventsRoot from './pages/EventsRoot';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {index: true, element: <HomePage />},
      {
        path: 'events',
        element: <EventsRoot />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ':eventId',
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
            ],
          },
          {path: 'new', element: <NewEventPage />},
          {path: ':eventId/edit', element: <EditEventPage />},
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
