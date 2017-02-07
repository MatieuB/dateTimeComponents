angular.module('test',['ui.materialize'])

.controller('MainCtrl',function ($scope) {

  $scope.test = 'testing...'
  $scope.vm = {}
  var currentTime = new Date();
$scope.vm.currentTime = currentTime;
$scope.vm.month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
$scope.vm.monthShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
$scope.vm.weekdaysFull = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
$scope.vm.weekdaysLetter = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
$scope.vm.disable = [false, 1, 7];
$scope.vm.today = 'Today';
$scope.vm.clear = 'Clear';
$scope.vm.close = 'Close';
var days = 15;
$scope.vm.minDate = (new Date($scope.vm.currentTime.getTime() - ( 1000 * 60 * 60 *24 * days ))).toISOString();
$scope.vm.maxDate = (new Date($scope.vm.currentTime.getTime() + ( 1000 * 60 * 60 *24 * days ))).toISOString();
$scope.vm.onStart = function () {
    console.log('onStart');
};
$scope.vm.onRender = function () {
    console.log('onRender');
};
$scope.vm.onOpen = function () {
    console.log('onOpen');
};
$scope.vm.onClose = function () {
    console.log('onClose');
};
$scope.vm.onSet = function () {
    console.log('onSet');
};
$scope.vm.onStop = function () {
    console.log('onStop');
};
$scope.vm.time = ''
$('#timepicker').pickatime({
  autoclose: true,
  twelvehour: false,
  afterDone: function(element,time) {
      console.log('after done fired');
      console.log(element,time);
      console.log('time',$('#timepicker')[0].value);
      $scope.vm.time = $('#timepicker')[0].value;
      $scope.$apply()
  }

});
$scope.toUTC = function(date,time,zone){
  console.log($scope.vm.date);
  console.log($scope.vm.time);
  //"1994-11-05T13:15:30Z"
  var d = $scope.vm.date
  var t = $scope.vm.time
  var dateEls = d.split('/');
  var year = dateEls[2]
  var month = dateEls[1]
  var day = dateEls[0]
  var timeEls = t.split(':')
  var hour = timeEls[0]
  var min = timeEls[1]
  console.log(dateEls);
  $scope.vm.utc = `${year}-${month}-${day}T${hour}:${min}:00Z`
  console.log($scope.vm.utc);
  // $scope.$apply()
}
})
