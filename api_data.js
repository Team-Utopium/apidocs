define({ "api": [
  {
    "type": "get",
    "url": "/projects",
    "title": "Projects",
    "name": "Projects",
    "group": "General",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "projects",
            "description": "<p>All the current projects and their data</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "projects.name",
            "description": "<p>Name of the project</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "projects.description",
            "description": "<p>Description of the project</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "projects.active",
            "description": "<p>The state of the project</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "projects.logoUrl",
            "description": "<p>The logo of the project</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "projects.tags",
            "description": "<p>Tags for the project</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fetchedAt",
            "description": "<p>Date this data was fetched at</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "\n{\n    projects: [\n        {\n            name: 'Demo 1',\n            description: 'Wolvesville, but in Discord!',\n            active: true,\n            logoUrl:\n                'https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg',\n            tags: ['Demo'],\n        },\n        {\n            name: 'Demo 2',\n            description: 'Another project goes here',\n            active: false,\n            logoUrl:\n                'https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg',\n            tags: ['Thingy'],\n        },\n    ],\n    fetchedAt: '2021-09-13T01:12:37.834Z',\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/index.js",
    "groupTitle": "General",
    "sampleRequest": [
      {
        "url": "https://api.utopium.xyz/projects"
      }
    ]
  },
  {
    "type": "get",
    "url": "/",
    "title": "Get Status",
    "group": "Status",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "Message",
            "description": "<p>Current status of the API. Should return either &quot;OK&quot; or an error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "{\n    message: \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://api.utopium.xyz/"
      }
    ],
    "version": "0.0.0",
    "filename": "src/index.js",
    "groupTitle": "Status",
    "name": "Get"
  }
] });
