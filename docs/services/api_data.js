define({ "api": [
  {
    "type": "DELETE",
    "url": "/user/sale",
    "title": "cancela una venta",
    "version": "1.0.0",
    "name": "cancelSale",
    "group": "Sales",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uuid",
            "description": "<p>Identificador unico de la venta.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Datos de la venta.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>Código HTTP.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "allowedValues": [
              "null"
            ],
            "optional": false,
            "field": "error",
            "description": "<p>Objeto de errores.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"data\": \"Sale disabled\",\n   \"success\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./routes.js",
    "groupTitle": "Sales",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>Código HTTP.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "allowedValues": [
              "null"
            ],
            "optional": false,
            "field": "data",
            "description": "<p>Data de respuesta.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>objeto de errores.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/user/sale",
    "title": "Lista las ventas por usuario",
    "version": "1.0.0",
    "name": "findUserRelationship",
    "group": "Sales",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email del usuario a consultar (queryParam).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Datos de usuario y ventas.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>Código HTTP.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "allowedValues": [
              "null"
            ],
            "optional": false,
            "field": "error",
            "description": "<p>Objeto de errores.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n       \"data\": [\n           {\n               \"UsersSalesId\": 1,\n               \"userId\": 1,\n               \"saleId\": 10,\n               \"sale\": {\n                   \"saleId\": 10,\n                   \"uuid\": \"d8f67bd0-586a-11e8-be68-2534d4e37682\",\n                   \"userEmail\": \"christiang15@hotmail.com\",\n                   \"saleDate\": \"2018-05-15T17:07:31.913Z\",\n                   \"saleAmount\": \"100\",\n                   \"saleStatus\": false\n               }\n           },\n           {\n               \"UsersSalesId\": 2,\n               \"userId\": 1,\n               \"saleId\": 9,\n               \"sale\": {\n                   \"saleId\": 9,\n                   \"uuid\": \"cdfdf370-586a-11e8-b62c-f116151c6c43\",\n                   \"userEmail\": \"christiang15@hotmail.com\",\n                   \"saleDate\": \"2018-05-15T17:07:15.468Z\",\n                   \"saleAmount\": \"200\",\n                   \"saleStatus\": true\n               }\n           },\n           {\n               \"UsersSalesId\": 3,\n               \"userId\": 1,\n               \"saleId\": 8,\n               \"sale\": {\n                   \"saleId\": 8,\n                   \"uuid\": \"bfb68e30-586a-11e8-9365-ad0a948dee97\",\n                   \"userEmail\": \"christiang15@hotmail.com\",\n                   \"saleDate\": \"2018-05-15T17:06:49.890Z\",\n                   \"saleAmount\": \"300\",\n                   \"saleStatus\": true\n               }\n           }\n       ],\n       \"success\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./routes.js",
    "groupTitle": "Sales",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>Código HTTP.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "allowedValues": [
              "null"
            ],
            "optional": false,
            "field": "data",
            "description": "<p>Data de respuesta.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>objeto de errores.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "POST",
    "url": "/user/sale",
    "title": "genera una venta",
    "version": "1.0.0",
    "name": "makeSale",
    "group": "Sales",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "amount",
            "description": "<p>monto.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Datos de la venta.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>Código HTTP.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "allowedValues": [
              "null"
            ],
            "optional": false,
            "field": "error",
            "description": "<p>Objeto de errores.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"data\": \"Sale Created\",\n   \"success\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./routes.js",
    "groupTitle": "Sales",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>Código HTTP.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "allowedValues": [
              "null"
            ],
            "optional": false,
            "field": "data",
            "description": "<p>Data de respuesta.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>objeto de errores.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "POST",
    "url": "/user/add",
    "title": "agrega un usuario",
    "version": "1.0.0",
    "name": "add",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fistname",
            "description": "<p>nombre.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>apellido.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>direccion.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Datos de usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>Código HTTP.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "allowedValues": [
              "null"
            ],
            "optional": false,
            "field": "error",
            "description": "<p>Objeto de errores.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"data\": \"User Created\",\n   \"success\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./routes.js",
    "groupTitle": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>Código HTTP.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "allowedValues": [
              "null"
            ],
            "optional": false,
            "field": "data",
            "description": "<p>Data de respuesta.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>objeto de errores.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "POST",
    "url": "/user/approve",
    "title": "aprueba un usuario",
    "version": "1.0.0",
    "name": "approve",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email del usuario.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Datos de usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>Código HTTP.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "allowedValues": [
              "null"
            ],
            "optional": false,
            "field": "error",
            "description": "<p>Objeto de errores.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"data\": \"User approved\",\n   \"success\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./routes.js",
    "groupTitle": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>Código HTTP.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "allowedValues": [
              "null"
            ],
            "optional": false,
            "field": "data",
            "description": "<p>Data de respuesta.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>objeto de errores.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "DELETE",
    "url": "/user/disable",
    "title": "desactiva un usuario",
    "version": "1.0.0",
    "name": "disable",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email del usuario.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Datos de usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>Código HTTP.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "allowedValues": [
              "null"
            ],
            "optional": false,
            "field": "error",
            "description": "<p>Objeto de errores.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"data\": \"User disabled\",\n   \"success\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./routes.js",
    "groupTitle": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>Código HTTP.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "allowedValues": [
              "null"
            ],
            "optional": false,
            "field": "data",
            "description": "<p>Data de respuesta.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>objeto de errores.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/user/all",
    "title": "Lista usuarios y ventas",
    "version": "1.0.0",
    "name": "findAllUsersAndSales",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Datos de usuario y ventas.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>Código HTTP.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "allowedValues": [
              "null"
            ],
            "optional": false,
            "field": "error",
            "description": "<p>Objeto de errores.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"data\": [\n       {\n           \"ids\": 2,\n           \"email\": \"elbriag@hotmail.com\",\n           \"firstname\": \"gabriel\",\n           \"lastname\": \"gimenez\",\n           \"address\": \"williams 1319\",\n           \"status\": true,\n           \"total\": \"494.20\",\n           \"num_vetas\": \"7\"\n       },\n       {\n           \"ids\": 1,\n           \"email\": \"christiang15@hotmail.com\",\n           \"firstname\": \"christian\",\n           \"lastname\": \"gimenez\",\n           \"address\": \"williams 1319\",\n           \"status\": true,\n           \"total\": \"600\",\n           \"num_vetas\": \"7\"\n       }\n   ],\n   \"success\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./routes.js",
    "groupTitle": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>Código HTTP.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "allowedValues": [
              "null"
            ],
            "optional": false,
            "field": "data",
            "description": "<p>Data de respuesta.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>objeto de errores.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "PUT",
    "url": "/user/update",
    "title": "actualiza un usuario",
    "version": "1.0.0",
    "name": "update",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fistname",
            "description": "<p>nuevo nombre.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>nuevo apellido.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>nueva direccion.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Datos de usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>Código HTTP.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "allowedValues": [
              "null"
            ],
            "optional": false,
            "field": "error",
            "description": "<p>Objeto de errores.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"data\": \"User updated\",\n   \"success\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./routes.js",
    "groupTitle": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>Código HTTP.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "allowedValues": [
              "null"
            ],
            "optional": false,
            "field": "data",
            "description": "<p>Data de respuesta.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>objeto de errores.</p>"
          }
        ]
      }
    }
  }
] });
