var Services = angular.module('starter.services',  ['ngResource']);

/**
 * A simple example service that returns some data.
 */


Services.factory('ProgramsService', function($resource) {
  return {
    all: function() {
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.open("GET","http://outlook.mineducacion.gov.co:81",false);
      xmlhttp.send();
      txt=xmlhttp.responseText;

      var parser = new DOMParser();
      xmlDoc=parser.parseFromString(txt,"text/xml");

      var programLinks = xmlDoc.getElementsByTagName("A");
      var programs = [];
      console.log(programLinks);

      for(var i =0; i<programLinks.length; i++){
        var program = programLinks[i];
        var path = program.getAttribute("HREF");
        var filename = path.replace(/^.*\/|\.[^.]*$/g, '');
        var url = "http://outlook.mineducacion.gov.co:81" + path;
        programs.push({url: url, name: unescape(filename)});
      }

      return programs;
    },
    get: function(programId) {
      // Simple index lookup
      return programs[programId];
    }
  }
  });
