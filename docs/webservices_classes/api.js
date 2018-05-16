YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "ModuleFactoryUtil",
        "ResponseUtil",
        "SaleController",
        "UserController",
        "ValidateUtil"
    ],
    "modules": [
        "config",
        "controllers",
        "middleware",
        "models",
        "utils"
    ],
    "allModules": [
        {
            "displayName": "config",
            "name": "config",
            "description": "Objeto con las propiedades de configuración principal."
        },
        {
            "displayName": "controllers",
            "name": "controllers",
            "description": "Exporta todos los middlewares."
        },
        {
            "displayName": "middleware",
            "name": "middleware",
            "description": "Habilita soporte CORS."
        },
        {
            "displayName": "models",
            "name": "models",
            "description": "Modelo encargado de realizar las operaciones\nde base de dato para la entidad sales."
        },
        {
            "displayName": "utils",
            "name": "utils",
            "description": "Factory para manejar instancias."
        }
    ],
    "elements": []
} };
});