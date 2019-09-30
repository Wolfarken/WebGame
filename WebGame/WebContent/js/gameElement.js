var keyTaken = false;

function TurnLightOnOff()
{
	var imageLightBulb = document.getElementById("light-bulb");
	
	if (imageLightBulb.getAttribute('src') == "../image/Light Bulb-Off.png")
	{
		imageLightBulb.src = "../image/Light Bulb-On.png";
		AllElementsOn();
	}
	else
	{
		imageLightBulb.src = "../image/Light Bulb-Off.png";
		AllElementsOff();
	}
}


function ElementsInteraction(id)
{
	var elementId = id.id;
	
	if (elementId === "key")
	{
		keyTaken = true;
	}
	
	$("#" + elementId).addClass("elementUsedHide");
	InteractedElement(elementId);
}


function InteractedElement(elementId)
{
	$("#" + elementId).hide();
}


function AllElementsOn()
{
	$(".element").not(".elementUsedHide").show();
}


function AllElementsOff()
{
	$(".element").hide();
}
