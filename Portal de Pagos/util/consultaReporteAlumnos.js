exports.consultaReporteAlumnos = (request, response, next) => {
    const tienePermiso = request.session.permisos.some(permiso => permiso.NombrePrivilegio === 'consultaReporteAlumnos');
    if (tienePermiso) {
        next();
    } else {
        return response.status(404).render('404');
    }
};
