﻿rtl.module("projects",["System","JS","Web","Classes","Avamm","webrouter","AvammForms","dhtmlx_base","SysUtils"],function () {
  "use strict";
  var $mod = this;
  rtl.createClass($mod,"TProjectForm",pas.AvammForms.TAvammForm,function () {
  });
  this.Project = null;
  this.ShowProject = function (URl, aRoute, Params) {
    var aForm = null;
    aForm = $mod.TProjectForm.$create("Create$1",[pas.AvammForms.TAvammFormMode.fmInlineWindow,"projects",Params.GetValue("Id"),""]);
  };
  this.ShowProjectList = function (URl, aRoute, Params) {
    var aParent = null;
    if ($mod.Project === null) {
      aParent = rtl.getObject(pas.Avamm.GetAvammContainer());
      $mod.Project = pas.AvammForms.TAvammListForm.$create("Create$1",[aParent,"projects","1C"]);
      var $with1 = $mod.Project;
      $with1.Grid.setHeader("Name,Nummer,Status,Kategorie",",",Array.of({}));
      $with1.Grid.setColumnIds("NAME,ID,STATUS,CATEGORY");
      $with1.Grid.attachHeader("#text_filter,#text_filter,#select_filter,#text_filter");
      $with1.Grid.setInitWidths("*,100,150,100,200");
      $with1.Grid.init();
    };
    $mod.Project.Show();
  };
  $mod.$resourcestrings = {strProject: {org: "Projekte"}};
  $mod.$init = function () {
    if (pas.Avamm.getRight("Projects") > 0) pas.Avamm.RegisterSidebarRoute(rtl.getResStr(pas.projects,"strProject"),"projects",$mod.ShowProjectList);
    pas.webrouter.Router().RegisterRoute("\/projects\/by-id\/:Id\/",$mod.ShowProject,false);
  };
});
//# sourceMappingURL=projects.js.map