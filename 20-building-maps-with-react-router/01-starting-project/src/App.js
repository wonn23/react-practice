import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import ErrorPage from './pages/Error';
import RootLayout from './pages/Root';
import HomePage from './pages/Home';

createBrowserRouter({
  path: '/',
  element: <RootLayout />,
  errorElement: <ErrorPage />,
  chilren: [
    {index: true, element: <HomePage />},
    {
      paht: 'events',
      element: <EventsRootLayout />,
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
            {
              path: 'edit',
              element: <EditEventPage />,
              action: manipulateEventAction,
            },
          ],
        },
        {
          path: 'newsletter',
          element: <NewsletterPage />,
          action: newsletterAction,
        },
      ],
    },
  ],
});

function App() {
  return <RouterProvider router={router} />;
}

export default App;
