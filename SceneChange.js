var curScene = 0;
var sceneCount = 4;
var sceneNumberNode;
var fadeImageNode;
var isAlpha = true;
var isFade = false;
var curFadeValue = 0.0;
var dir = 1;

function Initialize() 
{ 
    layer = Document.FindLayer("Untitled Layer");
    sceneNumberNode = layer.FindNode("s_SceneNumber");
    fadeImageNode = layer.FindNode("s_FadeImage");

    // Initialize any *internal* variables here.
}

function Update(){
    if(isFade){
        curFadeValue += 0.02 * dir;
        
        if(curFadeValue>1){ // fade out
            sceneNumberNode.SetFloat("Attributes.Value", curScene);
            dir = -1;
        }

        if(curFadeValue<0){ // fade finished
            dir = 1;
            isFade = false;
            fadeImageNode.SetFloat("Attributes.Alpha", 0);
        }
        fadeImageNode.SetFloat("Attributes.Alpha", curFadeValue);
        // Log();
    }
}

function NextScene(){
    curScene++;
    if(curScene>sceneCount){
        curScene = 0;
    }
}

function Fade(sceneNum){
    dir = 1;
    curFadeValue = fadeImageNode.GetFloat("Attributes.Alpha");
    isFade = true;
    
    if (sceneNum == -1){
        curScene = sceneNumberNode.GetFloat("Attributes.Value");
        NextScene();
    }else{
        curScene = sceneNum;
    }
}

function OnKeyPress(key){
    if(key=='Z'){
        Fade(0);
    }
    if(key=='X'){
        Fade(2);
    }
    if(key=='C'){
        Fade(1);
    }
    if(key=='V'){
        Fade(3);
    }
    if(key=='B'){
        Fade(4);
    }
    if(key=='Q'){
    	Fade(-1);
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