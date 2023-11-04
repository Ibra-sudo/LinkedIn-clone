// import {
//   createBrowserRouter,
//   BrowserRouter,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";

// import Login from "../Pages/Login";
// import Signup from "../Pages/Signup";
// import Home from "../Pages/Home";
// import Network from "../Pages/Network";
// import Jobs from "../Pages/Jobs";
// import Messaging from "../Pages/Messaging";
// import Notifications from "../Pages/Notifications";
// import Profile from "../Pages/Profile";

// import { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";

// function router() {
//   const { currentUser } = useContext(AuthContext);
//   const RequireAuth = ({ children }) => {
//     return currentUser ? children : <Navigate to="/" />;
//   };
//   console.log(currentUser);

//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/">
//             <Route path="/" element={<Login />} />
//             <Route path="/signup" element={<Signup />} />
//             <Route
//               path="/home"
//               element={
//                 <RequireAuth>
//                   {" "}
//                   <Home />
//                 </RequireAuth>
//               }
//             />
//             <Route
//               path="/network"
//               element={
//                 <RequireAuth>
//                   {" "}
//                   <Network />
//                 </RequireAuth>
//               }
//             />
//             <Route
//               path="/jobs"
//               element={
//                 <RequireAuth>
//                   {" "}
//                   <Jobs />
//                 </RequireAuth>
//               }
//             />
//             <Route
//               path="/messaging"
//               element={
//                 <RequireAuth>
//                   {" "}
//                   <Messaging />
//                 </RequireAuth>
//               }
//             />
//             <Route
//               path="/notifications"
//               element={
//                 <RequireAuth>
//                   {" "}
//                   <Notifications />
//                 </RequireAuth>
//               }
//             />
//             <Route
//               path="/profile"
//               element={
//                 <RequireAuth>
//                   {" "}
//                   <Profile />
//                 </RequireAuth>
//               }
//             />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );

// return createBrowserRouter([
//   {
//     path: "/",
//     element: <Login />,
//   },
//   {
//     path: "/home",
//     element: (
//       <RequireAuth>
//         {" "}
//         <Home />{" "}
//       </RequireAuth>
//     ),
//   },
//   {
//     path: "/signup",
//     element: <Signup />,
//   },
//   {
//     path: "/network",
//     element: (
//       <RequireAuth>
//         {" "}
//         <Network />
//       </RequireAuth>
//     ),
//   },
//   {
//     path: "/jobs",
//     element: (
//       <RequireAuth>
//         {" "}
//         <Jobs />
//       </RequireAuth>
//     ),
//   },
//   {
//     path: "/messaging",
//     element: (
//       <RequireAuth>
//         {" "}
//         <Messaging />
//       </RequireAuth>
//     ),
//   },
//   {
//     path: "/notifications",
//     element: (
//       <RequireAuth>
//         {" "}
//         <Notifications />
//       </RequireAuth>
//     ),
//   },
//   {
//     path: "/profile",
//     element: (
//       <RequireAuth>
//         {" "}
//         <Profile />
//       </RequireAuth>
//     ),
//   },
// ]);

// export default router;

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Login />,
//   },
//   {
//     path: "/home",
//     element: (
//       <RequireAuth>
//         {" "}
//         <Home />{" "}
//       </RequireAuth>
//     ),
//   },
//   {
//     path: "/signup",
//     element: <Signup />,
//   },
//   {
//     path: "/network",
//     element: (
//       <RequireAuth>
//         {" "}
//         <Network />
//       </RequireAuth>
//     ),
//   },
//   {
//     path: "/jobs",
//     element: (
//       <RequireAuth>
//         {" "}
//         <Jobs />
//       </RequireAuth>
//     ),
//   },
//   {
//     path: "/messaging",
//     element: (
//       <RequireAuth>
//         {" "}
//         <Messaging />
//       </RequireAuth>
//     ),
//   },
//   {
//     path: "/notifications",
//     element: (
//       <RequireAuth>
//         {" "}
//         <Notifications />
//       </RequireAuth>
//     ),
//   },
//   {
//     path: "/profile",
//     element: (
//       <RequireAuth>
//         {" "}
//         <Profile />
//       </RequireAuth>
//     ),
//   },
// ]);
