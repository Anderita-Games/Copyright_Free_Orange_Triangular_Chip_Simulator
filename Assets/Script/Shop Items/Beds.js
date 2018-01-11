#pragma strict
var Money : int;

//news
public var News : UnityEngine.UI.Text;
public var News2 : UnityEngine.UI.Text;

function Start () {
	
}

function Update () {
	
}

//Bed Functions
function Beds1() {
	Money = PlayerPrefs.GetInt("Money");
	if (Money > 14 && PlayerPrefs.GetString("Bed") != "Cardboard") {
		Money -= 15;
		News2.text = News.text;
		News.text = "You just bought a Cardboard Matress!";
		PlayerPrefs.SetString("Bed", "Cardboard");
		PlayerPrefs.SetInt("Money", Money);
	}
}

function Beds2() {
	Money = PlayerPrefs.GetInt("Money");
	if (Money > 49 && PlayerPrefs.GetString("Bed") != "Trash Mattress") {
		Money -= 50;
		News2.text = News.text;
		News.text = "You just bought a Trash Mattress!";
		PlayerPrefs.SetString("Bed", "Trash Mattress");
		PlayerPrefs.SetInt("Money", Money);
	}
}

function Beds3() {
	Money = PlayerPrefs.GetInt("Money");
	if (Money > 99 && PlayerPrefs.GetString("Bed") != "Camp Mattress") {
		Money -= 100;
		News2.text = News.text;
		News.text = "You just bought a Camp Mattress!";
		PlayerPrefs.SetString("Bed", "Camp Mattress");
		PlayerPrefs.SetInt("Money", Money);
	}
}

function Beds4() {
	Money = PlayerPrefs.GetInt("Money");
	if (Money > 799 && PlayerPrefs.GetString("Bed") != "Decent Mattress") {
		Money -= 800;
		News2.text = News.text;
		News.text = "You just bought a Decent Mattress!";
		PlayerPrefs.SetString("Bed", "Decent Mattress");		
		PlayerPrefs.SetInt("Money", Money);
	}
}

function Beds5() {
	Money = PlayerPrefs.GetInt("Money");
	if (Money > 3999 && PlayerPrefs.GetString("Bed") != "Great Mattress") {
		Money -= 4000;
		News2.text = News.text;
		News.text = "You just bought a Great Mattress!";
		PlayerPrefs.SetString("Bed", "Great Mattress");
		PlayerPrefs.SetInt("Money", Money);
	}
}

function Beds6() {
	Money = PlayerPrefs.GetInt("Money");
	if (Money > 8999 && PlayerPrefs.GetString("Bed") != "WaterBed 9000") {
		Money -= 9000;
		News2.text = News.text;
		News.text = "You just bought a WaterBed 9000!";
		PlayerPrefs.SetString("Bed", "WaterBed 9000");
		PlayerPrefs.SetInt("Money", Money);
	}
}