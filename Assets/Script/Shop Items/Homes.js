#pragma strict
var House;
var Money : int;

//news
public var News : UnityEngine.UI.Text;
public var News2 : UnityEngine.UI.Text;


function Start () {
 
}

function Update () {
	
}

//Home Buttons

function Homes1() {
	Money = PlayerPrefs.GetInt("Money");
	if (Money > 9 && PlayerPrefs.GetString("House") != "Cardboard") {
		Money -= 10;
		News2.text = News.text;
		News.text = "You just bought a Cardboard House!";
		PlayerPrefs.SetString("House", "Cardboard");
		PlayerPrefs.SetInt("Money", Money);
	}
}

function Homes2() {
	Money = PlayerPrefs.GetInt("Money");
	if (Money > 199 && PlayerPrefs.GetString("House") != "Wood Shack") {
		Money -= 200;
		News2.text = News.text;
		News.text = "You just bought a Wood Shack!";
		PlayerPrefs.SetString("House", "Wood Shack");
		PlayerPrefs.SetInt("Money", Money);
	}
}

function Homes3() {
	Money = PlayerPrefs.GetInt("Money");
	if (Money > 999 && PlayerPrefs.GetString("House") != "Sketchy Apartment") {
		Money -= 1000;
		News2.text = News.text;
		News.text = "You just bought a Sketchy Apartment!";
		PlayerPrefs.SetString("House", "Sketchy Apartment");
		PlayerPrefs.SetInt("Money", Money);
	}
}

function Homes4() {
	Money = PlayerPrefs.GetInt("Money");
	if (Money > 3499 && PlayerPrefs.GetString("House") != "Decent Apartment") {
		Money -= 3500;
		News2.text = News.text;
		News.text = "You just bought a Decent Apartment!";
		PlayerPrefs.SetString("House", "Decent Apartment");
		PlayerPrefs.SetInt("Money", Money);
	}
}

function Homes5() {
	Money = PlayerPrefs.GetInt("Money");
	if (Money > 49999 && PlayerPrefs.GetString("House") != "RV") {
		Money -= 4000;
		News2.text = News.text;
		News.text = "You just bought a RV!";
		PlayerPrefs.SetString("House", "RV");
		PlayerPrefs.SetInt("Money", Money);
	}
}

function Homes6() {
	Money = PlayerPrefs.GetInt("Money");Money = PlayerPrefs.GetInt("Money");
	if (Money > 59999 && PlayerPrefs.GetString("House") != "Sketchy House") {
		Money -= 50000;
		News2.text = News.text;
		News.text = "You just bought a Sketchy House!";
		PlayerPrefs.SetString("House", "Sketchy House");
		PlayerPrefs.SetInt("Money", Money);
	}
}

function Homes7() {
	Money = PlayerPrefs.GetInt("Money");
	if (Money > 99999 && PlayerPrefs.GetString("House") != "Average House") {
		Money -= 100000;
		News2.text = News.text;
		News.text = "You just bought a Average House!";
		PlayerPrefs.SetString("House", "Average House");
		PlayerPrefs.SetInt("Money", Money);
	}
}

function Homes8() {
	Money = PlayerPrefs.GetInt("Money");
	if (Money > 1999999 && PlayerPrefs.GetString("House") != "Mansion") {
		Money -= 2000000;
		News2.text = News.text;
		News.text = "You just bought a Mansion!";
		PlayerPrefs.SetString("House", "Mansion");
		PlayerPrefs.SetInt("Money", Money);
	}
}
function Homes9() {
	Money = PlayerPrefs.GetInt("Money");
	if (Money > 9999999 && PlayerPrefs.GetString("House") != "Castle") {
		Money -= 10000000;
		News2.text = News.text;
		News.text = "You just bought a Castle!";
		PlayerPrefs.SetString("House", "Castle");
		PlayerPrefs.SetInt("Money", Money);
	}
}

function Homes10() {
	Money = PlayerPrefs.GetInt("Money");
	if (Money > 99999999 && PlayerPrefs.GetString("House") != "Island") {
		Money -= 100000000;
		News2.text = News.text;
		News.text = "You just bought a Small Island!";
		PlayerPrefs.SetString("House", "Island");
		PlayerPrefs.SetInt("Money", Money);
	}
}