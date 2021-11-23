<html>
<script src = "https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
<div ng-app="speechApp" ng-controller="speechController as spc">
<form name="myForm">
<div align="center">
  Speak your commands: 
  <textarea name="speechReg" contenteditable="false" ng-model="spc.final">
      <span style="color:red" ng-show="myForm.$dirty && myForm.user.$invalid">
  </textarea>


 
  <button name="start" id="start"  ng-click="spc.start()" >
    {{spc.startStop}}
  </button><br>
</div>
  <br><br>
  Group Name:<br><input type="text" name="group" ng-model="group" align="justify"><br><br>
  Suite Name:<br><input type="text" name="suite" ng-model="suite" align="justify"><br><br>
  Test case Name:<br><input type="text" name="test" ng-model="test" align="justify"><br><br>


  <input type="submit" value="Submit"/><br>
</form>
</div>
<body>

<script src="./js/speechApp.js"></script>
<script src="./js/speechController.js"></script>



</body>
</html>
