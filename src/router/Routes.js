const ROUTES = {
    home: "/",
    about: "/about",
    lodging: (lodging = ":id") => `/lodging/${lodging}` 
};

export default ROUTES;