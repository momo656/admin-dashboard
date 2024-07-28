import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./page/dashboard/Dashboard";
import Team from "./page/team/Team";
import Contacts from './page/contacts/contacts';
import Invoices from './page/invoices/Invoices';
import Form from './page/form/Form';
import Calendar from './page/calendar/Calendar';
import Faq from './page/faq/Faq';
import BarChart from './page/bar/Bar';
import PieChart from './page/pie/Pie';
import LineChart from './page/line/Line';
import Geogrphy from './page/geogrphy/Geogrphy';

const  router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route
        index
        element={<Dashboard />}
      />
      <Route
        path="team"
        element={<Team />}
      />
      <Route
        path="contacts"
        element={<Contacts />}
      />
      <Route
        path="invoices"
        element={<Invoices />}
      />
      <Route
        path="form"
        element={<Form />}
      />
      <Route
        path="calendar"
        element={<Calendar />}
      />
      <Route
        path="faq"
        element={<Faq />}
      />
      <Route
        path="bar"
        element={<BarChart />}
      />
      <Route
        path="pie"
        element={<PieChart />}
      />
      <Route
        path="line"
        element={<LineChart />}
      />
      <Route
        path="geogrphy"
        element={<Geogrphy />}
      />
      
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
