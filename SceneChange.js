var curScene = 0;
var sceneCount = 4;
var node;

function Initialize() 
{ 
    layer = Document.FindLayer("Untitled Layer");
    node = layer.FindNode("s_SceneNumber");
    
    // Initialize any *internal* variables here.
}

function OnKeyPress(key){
    if(key=='Q'){
    	curScene++;
    	if(curScene>sceneCount){
    		curScene = 0;
    	}
    	node.SetFloat("Attributes.Value", curScene);
    	Log(curScene);
    }
}

Initialize();