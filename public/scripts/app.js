require.config({
  paths: {
  "kinetic": "lib/kinetic.min",
	"jquery": "lib/jquery",
	"hogan" : "hogan",
	"lodash" : "lodash.min"
  }
});

require(["kinetic", "components/installer", "components/partition",  "components/button"], function(kinetic, installer, partition, button){
	
	//var stage = new Kinetic.Stage({
	//	container: 'container',
	//	width: 500,
	//	height: 200
	//})
	
	//var disk = partition.createComponents().disk
	//var handle = partition.createComponents().handle
	
	//stage.add(disk)
	//stage.add(handle)
	
	var installer = installer.installer().init;
})