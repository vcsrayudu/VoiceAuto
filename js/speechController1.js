sApp.controller('speechController', function($scope) {
  this.rec = new webkitSpeechRecognition();
  this.final = '';
  this.temp = '';
  this.startStopflag=true;
  var inputs = ["", "", ""];
  var self = this;
  self.startStop="Start Recording"
	  self.suiteName=""
		  self.groupName=""
			  self.testName=""
  self.count=0;
  this.rec.continuous = true;
  this.rec.lang = 'en-US';
  this.rec.interimResults = true;
  this.rec.onerror = function(event) {
    console.log('error!');
  };

  this.start = function() {
	if(self.startStopflag)
		{
    self.rec.start();
   
    self.startStopflag=false;
    self.startStop="Stop Recording";
		}
	else
		{
		self.rec.stop();
		self.startStopflag=true;
		self.startStop="Start Recording";
		}
  };

  this.rec.onresult = function(event) {
    for(var i = event.resultIndex; i < event.results.length; i++) {
      if(event.results[i].isFinal) {
       // self.final = self.final.concat(event.results[i][0].transcript);
    	  var str=event.results[i][0].transcript
    	  if(angular.equals(str,' ok')||angular.equals(str,'ok ') || angular.equals(str,'OK'))
    		  {
    		 // self.final = self.temp;
    		  
    		  inputs[self.count]=self.temp;
    		  self.temp="";
    		  
    		  self.count++;
    		  break;
    		  }
    	  else
    		  {
    		  self.temp = event.results[i][0].transcript;
    		  self.final = self.temp;
    		  }
    	 
        console.log("Speek Work: "+event.results[i][0].transcript);
        $scope.$apply(); 
        
      } 
    }
    if(self.count==3)
    	{
    	self.count=0;
		self.startStopflag=true;
		self.startStop="Start Recording";
		//$scope.test=inputs[2];
    	//self.rec.stop();
    	}
 //   $scope.group=self.final;
    self.groupName=inputs[0];
    self.suiteName=inputs[1];
    self.testName=inputs[2];
	  $scope.$apply();
  };
  
  
  

});