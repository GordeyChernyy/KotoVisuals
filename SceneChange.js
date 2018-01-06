var curScene = 0;
var sceneCount = 4;
var sceneNumberNode;
var isAlpha = true;

function Initialize() 
{ 
    layer = Document.FindLayer("Untitled Layer");
    sceneNumberNode = layer.FindNode("s_SceneNumber");
    
    // Initialize any *internal* variables here.
}

function OnKeyPress(key){
    if(key=='Q'){
    	curScene++;
    	if(curScene>sceneCount){
    		curScene = 0;
    	}
    	sceneNumberNode.SetFloat("Attributes.Value", curScene);
    	Log(curScene);
    }
    if(key=='W'){
        layer = Document.FindLayer("Untitled Layer");
        if(isAlpha){
            for (var i = 0; i < layer.GetNumNodes(); i++) {
                node = layer.GetNode(i);
                if(node.GetName() == "s_Hide"){
                    node.SetFloat("Attributes.Alpha", 0);
                }
            }
        }else{
            for (var i = 0; i < layer.GetNumNodes(); i++) {
                node = layer.GetNode(i);
                if(node.GetName() == "s_Hide"){
                    node.SetFloat("Attributes.Alpha", 1);
                }
            }
        }

        isAlpha ^= true;
    }
}

Initialize();