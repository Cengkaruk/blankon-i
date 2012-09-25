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
	
	var unalocatedPartition = function() {
		
	};
	
	return {
		disk: disk
		, partitionInfo: partitionInfo
		, partition: partition
		, unalocatedPartition: unalocatedPartition
	}
}();
