"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/Employee/employeeLogin";
exports.ids = ["pages/api/Employee/employeeLogin"];
exports.modules = {

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "mysql2":
/*!*************************!*\
  !*** external "mysql2" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("mysql2");

/***/ }),

/***/ "next/dist/compiled/next-server/pages-api.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages-api.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.dev.js");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FEmployee%2FemployeeLogin&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5CEmployee%5CemployeeLogin.js&middlewareConfigBase64=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FEmployee%2FemployeeLogin&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5CEmployee%5CemployeeLogin.js&middlewareConfigBase64=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages-api/module.compiled */ \"(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(api)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _pages_api_Employee_employeeLogin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages\\api\\Employee\\employeeLogin.js */ \"(api)/./pages/api/Employee/employeeLogin.js\");\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_Employee_employeeLogin_js__WEBPACK_IMPORTED_MODULE_3__, \"default\"));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_Employee_employeeLogin_js__WEBPACK_IMPORTED_MODULE_3__, \"config\");\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/Employee/employeeLogin\",\n        pathname: \"/api/Employee/employeeLogin\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    userland: _pages_api_Employee_employeeLogin_js__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRkVtcGxveWVlJTJGZW1wbG95ZWVMb2dpbiZwcmVmZXJyZWRSZWdpb249JmFic29sdXRlUGFnZVBhdGg9LiUyRnBhZ2VzJTVDYXBpJTVDRW1wbG95ZWUlNUNlbXBsb3llZUxvZ2luLmpzJm1pZGRsZXdhcmVDb25maWdCYXNlNjQ9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNMO0FBQzFEO0FBQ3FFO0FBQ3JFO0FBQ0EsaUVBQWUsd0VBQUssQ0FBQyxpRUFBUSxZQUFZLEVBQUM7QUFDMUM7QUFDTyxlQUFlLHdFQUFLLENBQUMsaUVBQVE7QUFDcEM7QUFDTyx3QkFBd0IsZ0hBQW1CO0FBQ2xEO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLFlBQVk7QUFDWixDQUFDOztBQUVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2Ntcy8/MzQzNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWdlc0FQSVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvcGFnZXMtYXBpL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IGhvaXN0IH0gZnJvbSBcIm5leHQvZGlzdC9idWlsZC90ZW1wbGF0ZXMvaGVscGVyc1wiO1xuLy8gSW1wb3J0IHRoZSB1c2VybGFuZCBjb2RlLlxuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi4vcGFnZXNcXFxcYXBpXFxcXEVtcGxveWVlXFxcXGVtcGxveWVlTG9naW4uanNcIjtcbi8vIFJlLWV4cG9ydCB0aGUgaGFuZGxlciAoc2hvdWxkIGJlIHRoZSBkZWZhdWx0IGV4cG9ydCkuXG5leHBvcnQgZGVmYXVsdCBob2lzdCh1c2VybGFuZCwgXCJkZWZhdWx0XCIpO1xuLy8gUmUtZXhwb3J0IGNvbmZpZy5cbmV4cG9ydCBjb25zdCBjb25maWcgPSBob2lzdCh1c2VybGFuZCwgXCJjb25maWdcIik7XG4vLyBDcmVhdGUgYW5kIGV4cG9ydCB0aGUgcm91dGUgbW9kdWxlIHRoYXQgd2lsbCBiZSBjb25zdW1lZC5cbmV4cG9ydCBjb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBQYWdlc0FQSVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5QQUdFU19BUEksXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9FbXBsb3llZS9lbXBsb3llZUxvZ2luXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvRW1wbG95ZWUvZW1wbG95ZWVMb2dpblwiLFxuICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGFyZW4ndCB1c2VkIGluIHByb2R1Y3Rpb24uXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcIlwiXG4gICAgfSxcbiAgICB1c2VybGFuZFxufSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhZ2VzLWFwaS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FEmployee%2FemployeeLogin&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5CEmployee%5CemployeeLogin.js&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./backend/db.js":
/*!***********************!*\
  !*** ./backend/db.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mysql2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2 */ \"mysql2\");\n\nlet db;\ndb = mysql2__WEBPACK_IMPORTED_MODULE_0__.createConnection({\n    host: process.env.DATABASE_HOST,\n    user: process.env.DATABASE_USER,\n    password: process.env.DATABASE_PASSWORD,\n    database: process.env.DATABASE_NAME,\n    port: process.env.DATABASE_PORT\n}); // Wrap connection in .promise() to use async/await\ndb.connect((err)=>{\n    if (err) {\n        console.error(\"Database connection failed:\", err.stack);\n        return;\n    }\n    console.log(\"Connected to the database.\");\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9iYWNrZW5kL2RiLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTJCO0FBRTNCLElBQUlDO0FBQ0pBLEtBQUtELG9EQUFzQixDQUFDO0lBQzFCRyxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLGFBQWE7SUFDL0JDLE1BQU9ILFFBQVFDLEdBQUcsQ0FBQ0csYUFBYTtJQUNoQ0MsVUFBVUwsUUFBUUMsR0FBRyxDQUFDSyxpQkFBaUI7SUFDdkNDLFVBQVVQLFFBQVFDLEdBQUcsQ0FBQ08sYUFBYTtJQUNuQ0MsTUFBTVQsUUFBUUMsR0FBRyxDQUFDUyxhQUFhO0FBQ2pDLElBQUssbURBQW1EO0FBRXhEYixHQUFHYyxPQUFPLENBQUMsQ0FBQ0M7SUFDVixJQUFJQSxLQUFLO1FBQ1BDLFFBQVFDLEtBQUssQ0FBQywrQkFBK0JGLElBQUlHLEtBQUs7UUFDdEQ7SUFDRjtJQUNBRixRQUFRRyxHQUFHLENBQUM7QUFDZDtBQUVBLGlFQUFlbkIsRUFBRUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NjbXMvLi9iYWNrZW5kL2RiLmpzP2Q3OGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG15c3FsIGZyb20gJ215c3FsMic7IFxyXG5cclxubGV0IGRiO1xyXG5kYiA9IG15c3FsLmNyZWF0ZUNvbm5lY3Rpb24oe1xyXG4gIGhvc3Q6IHByb2Nlc3MuZW52LkRBVEFCQVNFX0hPU1QsXHJcbiAgdXNlcjogIHByb2Nlc3MuZW52LkRBVEFCQVNFX1VTRVIsXHJcbiAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LkRBVEFCQVNFX1BBU1NXT1JELFxyXG4gIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5EQVRBQkFTRV9OQU1FLFxyXG4gIHBvcnQ6IHByb2Nlc3MuZW52LkRBVEFCQVNFX1BPUlRcclxufSk7ICAvLyBXcmFwIGNvbm5lY3Rpb24gaW4gLnByb21pc2UoKSB0byB1c2UgYXN5bmMvYXdhaXRcclxuXHJcbmRiLmNvbm5lY3QoKGVycikgPT4ge1xyXG4gIGlmIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJEYXRhYmFzZSBjb25uZWN0aW9uIGZhaWxlZDpcIiwgZXJyLnN0YWNrKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgY29uc29sZS5sb2coXCJDb25uZWN0ZWQgdG8gdGhlIGRhdGFiYXNlLlwiKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkYjsiXSwibmFtZXMiOlsibXlzcWwiLCJkYiIsImNyZWF0ZUNvbm5lY3Rpb24iLCJob3N0IiwicHJvY2VzcyIsImVudiIsIkRBVEFCQVNFX0hPU1QiLCJ1c2VyIiwiREFUQUJBU0VfVVNFUiIsInBhc3N3b3JkIiwiREFUQUJBU0VfUEFTU1dPUkQiLCJkYXRhYmFzZSIsIkRBVEFCQVNFX05BTUUiLCJwb3J0IiwiREFUQUJBU0VfUE9SVCIsImNvbm5lY3QiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJzdGFjayIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./backend/db.js\n");

/***/ }),

/***/ "(api)/./pages/api/Employee/employeeLogin.js":
/*!*********************************************!*\
  !*** ./pages/api/Employee/employeeLogin.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var _backend_db_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../backend/db.js */ \"(api)/./backend/db.js\");\n/* harmony import */ var _utils_cors_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/cors.js */ \"(api)/./utils/cors.js\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n\n\n\n\nasync function handler(req, res) {\n    try {\n        await (0,_utils_cors_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(req, res);\n    } catch (error) {\n        console.error(\"CORS error:\", error);\n        return res.status(500).json({\n            error: \"CORS failed\"\n        });\n    }\n    if (req.method === \"POST\") {\n        const { email, password } = req.body;\n        const getUserQuery = \"Select check_Employee_email(?) as email_checker\";\n        const getUser = (email)=>{\n            return new Promise((resolve, reject)=>{\n                _backend_db_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].query(getUserQuery, [\n                    email\n                ], (err, results)=>{\n                    if (err) reject(err);\n                    else !results ? resolve(\"User not found\") : resolve(results);\n                });\n            });\n        };\n        const checkPassword = (password, hash_password)=>{\n            return new Promise((resolve, reject)=>{\n                bcrypt__WEBPACK_IMPORTED_MODULE_3__.compare(password, hash_password, (err, isMatch)=>{\n                    if (err) reject(err);\n                    if (!isMatch) reject(\"Incorrect Password\");\n                    else resolve(true);\n                });\n            });\n        };\n        try {\n            const user = await getUser(email);\n            await checkPassword(password, user[0].email_checker.password);\n            res.send(user[0].email_checker);\n            res.status(200).json({\n                message: \"Login successful\"\n            });\n        } catch (error) {\n            console.log(error);\n            res.status(400).json({\n                error\n            });\n        }\n    } else {\n        res.status(405).json({\n            message: \"Method not allowed\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvRW1wbG95ZWUvZW1wbG95ZWVMb2dpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUErQjtBQUNTO0FBQ0s7QUFDakI7QUFFYixlQUFlSSxRQUFRQyxHQUFHLEVBQUVDLEdBQUc7SUFDNUMsSUFBSTtRQUNGLE1BQU1KLDBEQUFPQSxDQUFDRyxLQUFLQztJQUNyQixFQUFFLE9BQU9DLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLGVBQWVBO1FBQzdCLE9BQU9ELElBQUlHLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUgsT0FBTztRQUFjO0lBQ3JEO0lBRUEsSUFBSUYsSUFBSU0sTUFBTSxLQUFLLFFBQVE7UUFDekIsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRSxHQUFHUixJQUFJUyxJQUFJO1FBQ3BDLE1BQU1DLGVBQWU7UUFFckIsTUFBTUMsVUFBVSxDQUFDSjtZQUNmLE9BQU8sSUFBSUssUUFBUSxDQUFDakIsU0FBU2tCO2dCQUMzQmpCLHNEQUFFQSxDQUFDa0IsS0FBSyxDQUFDSixjQUFjO29CQUFDSDtpQkFBTSxFQUFFLENBQUNRLEtBQUtDO29CQUNwQyxJQUFJRCxLQUFLRixPQUFPRTt5QkFDWCxDQUFDQyxVQUFVckIsUUFBUSxvQkFBb0JBLFFBQVFxQjtnQkFDdEQ7WUFDRjtRQUNGO1FBRUEsTUFBTUMsZ0JBQWdCLENBQUNULFVBQVVVO1lBQy9CLE9BQU8sSUFBSU4sUUFBUSxDQUFDakIsU0FBU2tCO2dCQUMzQmYsMkNBQWMsQ0FBQ1UsVUFBVVUsZUFBZSxDQUFDSCxLQUFLSztvQkFDNUMsSUFBSUwsS0FBS0YsT0FBT0U7b0JBQ2hCLElBQUksQ0FBQ0ssU0FBU1AsT0FBTzt5QkFDaEJsQixRQUFRO2dCQUNmO1lBQ0Y7UUFDRjtRQUVBLElBQUk7WUFDRixNQUFNMEIsT0FBTyxNQUFNVixRQUFRSjtZQUMzQixNQUFNVSxjQUFjVCxVQUFVYSxJQUFJLENBQUMsRUFBRSxDQUFDQyxhQUFhLENBQUNkLFFBQVE7WUFDNURQLElBQUlzQixJQUFJLENBQUNGLElBQUksQ0FBQyxFQUFFLENBQUNDLGFBQWE7WUFDOUJyQixJQUFJRyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFbUIsU0FBUztZQUFtQjtRQUNyRCxFQUFFLE9BQU90QixPQUFPO1lBQ2RDLFFBQVFzQixHQUFHLENBQUN2QjtZQUNaRCxJQUFJRyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFSDtZQUFNO1FBQy9CO0lBQ0YsT0FBTztRQUNMRCxJQUFJRyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVtQixTQUFTO1FBQXFCO0lBQ3ZEO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY21zLy4vcGFnZXMvYXBpL0VtcGxveWVlL2VtcGxveWVlTG9naW4uanM/YjZiOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZXNvbHZlIH0gZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IGRiIGZyb20gXCIuLi8uLi8uLi9iYWNrZW5kL2RiLmpzXCI7XHJcbmltcG9ydCBydW5Db3JzIGZyb20gXCIuLi8uLi8uLi91dGlscy9jb3JzLmpzXCI7XHJcbmltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBydW5Db3JzKHJlcSwgcmVzKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkNPUlMgZXJyb3I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiBcIkNPUlMgZmFpbGVkXCIgfSk7XHJcbiAgfVxyXG5cclxuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcclxuICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSByZXEuYm9keTtcclxuICAgIGNvbnN0IGdldFVzZXJRdWVyeSA9IFwiU2VsZWN0IGNoZWNrX0VtcGxveWVlX2VtYWlsKD8pIGFzIGVtYWlsX2NoZWNrZXJcIjtcclxuXHJcbiAgICBjb25zdCBnZXRVc2VyID0gKGVtYWlsKSA9PiB7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgZGIucXVlcnkoZ2V0VXNlclF1ZXJ5LCBbZW1haWxdLCAoZXJyLCByZXN1bHRzKSA9PiB7XHJcbiAgICAgICAgICBpZiAoZXJyKSByZWplY3QoZXJyKTtcclxuICAgICAgICAgIGVsc2UgIXJlc3VsdHMgPyByZXNvbHZlKFwiVXNlciBub3QgZm91bmRcIikgOiByZXNvbHZlKHJlc3VsdHMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgY2hlY2tQYXNzd29yZCA9IChwYXNzd29yZCwgaGFzaF9wYXNzd29yZCkgPT4ge1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIGJjcnlwdC5jb21wYXJlKHBhc3N3b3JkLCBoYXNoX3Bhc3N3b3JkLCAoZXJyLCBpc01hdGNoKSA9PiB7XHJcbiAgICAgICAgICBpZiAoZXJyKSByZWplY3QoZXJyKTtcclxuICAgICAgICAgIGlmICghaXNNYXRjaCkgcmVqZWN0KFwiSW5jb3JyZWN0IFBhc3N3b3JkXCIpO1xyXG4gICAgICAgICAgZWxzZSByZXNvbHZlKHRydWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IGdldFVzZXIoZW1haWwpO1xyXG4gICAgICBhd2FpdCBjaGVja1Bhc3N3b3JkKHBhc3N3b3JkLCB1c2VyWzBdLmVtYWlsX2NoZWNrZXIucGFzc3dvcmQpO1xyXG4gICAgICByZXMuc2VuZCh1c2VyWzBdLmVtYWlsX2NoZWNrZXIpO1xyXG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6IFwiTG9naW4gc3VjY2Vzc2Z1bFwiIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yIH0pO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXMuc3RhdHVzKDQwNSkuanNvbih7IG1lc3NhZ2U6IFwiTWV0aG9kIG5vdCBhbGxvd2VkXCIgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJyZXNvbHZlIiwiZGIiLCJydW5Db3JzIiwiYmNyeXB0IiwiaGFuZGxlciIsInJlcSIsInJlcyIsImVycm9yIiwiY29uc29sZSIsInN0YXR1cyIsImpzb24iLCJtZXRob2QiLCJlbWFpbCIsInBhc3N3b3JkIiwiYm9keSIsImdldFVzZXJRdWVyeSIsImdldFVzZXIiLCJQcm9taXNlIiwicmVqZWN0IiwicXVlcnkiLCJlcnIiLCJyZXN1bHRzIiwiY2hlY2tQYXNzd29yZCIsImhhc2hfcGFzc3dvcmQiLCJjb21wYXJlIiwiaXNNYXRjaCIsInVzZXIiLCJlbWFpbF9jaGVja2VyIiwic2VuZCIsIm1lc3NhZ2UiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/Employee/employeeLogin.js\n");

/***/ }),

/***/ "(api)/./utils/cors.js":
/*!***********************!*\
  !*** ./utils/cors.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cors */ \"cors\");\n\nconst cors = cors__WEBPACK_IMPORTED_MODULE_0__({\n    methods: [\n        \"GET\",\n        \"POST\",\n        \"PUT\",\n        \"DELETE\"\n    ],\n    origin: [\n        \"http://localhost:3000\",\n        \"https://your-frontend-domain.com\"\n    ]\n});\nfunction runCors(req, res) {\n    return new Promise((resolve, reject)=>{\n        cors(req, res, (result)=>{\n            if (result instanceof Error) {\n                return reject(result);\n            }\n            return resolve(result);\n        });\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (runCors);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9jb3JzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXdCO0FBRXhCLE1BQU1DLE9BQU9ELGlDQUFJQSxDQUFDO0lBQ2hCRSxTQUFTO1FBQUM7UUFBTztRQUFRO1FBQU87S0FBUztJQUN6Q0MsUUFBUTtRQUFDO1FBQXlCO0tBQW1DO0FBQ3ZFO0FBRUEsU0FBU0MsUUFBUUMsR0FBRyxFQUFFQyxHQUFHO0lBQ3ZCLE9BQU8sSUFBSUMsUUFBUSxDQUFDQyxTQUFTQztRQUMzQlIsS0FBS0ksS0FBS0MsS0FBSyxDQUFDSTtZQUNkLElBQUlBLGtCQUFrQkMsT0FBTztnQkFDM0IsT0FBT0YsT0FBT0M7WUFDaEI7WUFDQSxPQUFPRixRQUFRRTtRQUNqQjtJQUNGO0FBQ0Y7QUFFQSxpRUFBZU4sT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NjbXMvLi91dGlscy9jb3JzLmpzPzdiOTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvcnMgZnJvbSBcImNvcnNcIjtcclxuXHJcbmNvbnN0IGNvcnMgPSBDb3JzKHtcclxuICBtZXRob2RzOiBbXCJHRVRcIiwgXCJQT1NUXCIsIFwiUFVUXCIsIFwiREVMRVRFXCJdLFxyXG4gIG9yaWdpbjogW1wiaHR0cDovL2xvY2FsaG9zdDozMDAwXCIsIFwiaHR0cHM6Ly95b3VyLWZyb250ZW5kLWRvbWFpbi5jb21cIl0sXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gcnVuQ29ycyhyZXEsIHJlcykge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBjb3JzKHJlcSwgcmVzLCAocmVzdWx0KSA9PiB7XHJcbiAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgIHJldHVybiByZWplY3QocmVzdWx0KTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJ1bkNvcnM7XHJcbiJdLCJuYW1lcyI6WyJDb3JzIiwiY29ycyIsIm1ldGhvZHMiLCJvcmlnaW4iLCJydW5Db3JzIiwicmVxIiwicmVzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXN1bHQiLCJFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./utils/cors.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FEmployee%2FemployeeLogin&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5CEmployee%5CemployeeLogin.js&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();