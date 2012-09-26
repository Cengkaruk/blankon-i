// Partoedi is a Partition editor
var partoedi = function() {
	var disk = function() {
		var layer = new Kinetic.Layer();
		
		return layer;
	};
	
	var partitionInfo = function() {
		var group = new Kinetic.Group();
		
		return group;
	};
	
	var partition = function() {
		var rect = new Kinetic.Rect({
			width: 100,
			height: 50
		});
		
		return rect;
	};
	
	var unalocatedPartition = function(property) {
		var group = new Kinetic.Group();
		
		//var plusIcon = new Kinetic.Image();
		
		var rect = new Kinetic.Rect({
			width: property.width,
			height: property.height,
			fill: {
        start: {
          x: property.width/2,
          y: property.width/2
        },
        end: {
          x: 50,
          y: 50
        },
        colorStops: [0, '#A7A2A2', 1, '#DCDCDC']
      },
      stroke: 'white',
      strokeWidth: 2
		});
		
		return rect;
	};
	
	return {
		disk: disk
		, partitionInfo: partitionInfo
		, partition: partition
		, unalocatedPartition: unalocatedPartition
	}
}();
