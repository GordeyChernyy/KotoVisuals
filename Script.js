textureW = 1920;
textureH = 1080;

rearW = 1920;
rearH = 540;

frontW = 1920;
frontH = 540;

function Initialize() 
{ 

    layer = Document.FindLayer("Untitled Layer");

	rearScaleY = rearH/textureH;
	rearPosY = 1.0 - rearScaleY;

	frontScaleX = frontW/textureW;
	frontScaleY = frontH/textureH;
	frontPosY = - (frontScaleY + ((rearScaleY*2)-1) );

    Log("rearScaleY : " + rearScaleY);
    Log("rearPosY : " + rearPosY);
    Log("frontScaleX : " + frontScaleX);
    Log("frontScaleY : " + frontScaleY);
    Log("frontPosY : " + frontPosY);

    for (var i = 0; i < layer.GetNumNodes(); i++) {
    	node = layer.GetNode(i);
    	if(node.GetName() == "Texture Rear"){
    		node.SetFloat("Transform.Position Y", rearPosY);
    		node.SetFloat("Transform.Scale Y", rearScaleY);
    	}else if(node.GetName() == "Texture Front"){
			node.SetFloat("Transform.Position Y", frontPosY);
    		node.SetFloat("Transform.Scale Y", frontScaleY);
    		node.SetFloat("Transform.Scale X", frontScaleX);
    	}else if(node.GetName() == "Render Rear"){
    		node.SetInt("Attributes.Width", rearW);
    		node.SetInt("Attributes.Height", rearH);
    	}else if(node.GetName() == "Render Front"){
    		node.SetInt("Attributes.Width", frontW);
    		node.SetInt("Attributes.Height", frontH);
    	}else if(node.GetName() == "Front Aspect Ratio"){
    		node.SetInt("Attributes.Width", frontW);
    		node.SetFloat("Attributes.Value 1", frontW/frontH);
    	}
    }
}

function Update()  { 

}

Initialize();