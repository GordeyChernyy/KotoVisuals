var alphaPlanes = [];
var audioTriggerValueNode;
var audioTresholdNode;
var timer = 0;

function Initialize() 
{ 
    layer = Document.FindLayer("BambooForest");
	
	for (var i = 0; i < layer.GetNumNodes(); i++) {
	    node = layer.GetNode(i);
	    if(node.GetName() == "s_AlphaPlane"){
	        alphaPlanes.push(node);
	        Log("s_AlphaPlane" );
	    }
	    if(node.GetName() == "s_AudioTriggerValue"){
	        audioTriggerValueNode = node;
	        Log("s_AudioTriggerValue" );
	    }
	    if(node.GetName() == "s_AudioTreshold"){
	        audioTresholdNode = node;
	        Log("s_AudioTreshold" );
	    }

	}

    // Initialize any *internal* variables here.
}

function Update(){
	for (var i = 0; i < alphaPlanes.length; i++) {
		var node = alphaPlanes[i];

		var curAlpha = node.GetFloat("Attributes.Alpha");
		curAlpha -= 0.2;
		if(curAlpha<0) curAlpha = 0;

	    alphaPlanes[i].SetFloat("Attributes.Alpha", curAlpha);
	}

	if(audioTriggerValueNode.GetFloat("Attributes.Current Value") > audioTresholdNode.GetFloat("Attributes.Value") ){
		var randomNode = alphaPlanes[Random(0, alphaPlanes.length)];
		randomNode.SetFloat("Attributes.Alpha", 1);
		

	}
	Log("trigger");
}

function Random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
Initialize();