var Services = angular.module('starter.services',  ['ngResource']);

/**
 * A simple example service that returns some data.
 */


Services.factory('ProgramsService', function($resource) {
  var programs = [
    { id: 0, title: 'Laura', description: 'Furry little creatures. Obsessed with plotting assassination, but never following through on it.' },
    { id: 1, title: 'Programa 2', description: 'Lovable. Loyal almost to a fault. Smarter than they let on.' },
    { id: 2, title: 'Programa 3', description: 'Everyone likes turtles.' },
    { id: 3, title: 'Programa 4', description: 'An advanced pet. Needs millions of gallons of salt water. Will happily eat you.' }
    ];
  return {
    all: function() {
      return programs;
    },
    get: function(programId) {
      // Simple index lookup
      return programs[programId];
    }
  }
  });
