#pragma strict
var Money : int;

//news
public var News : UnityEngine.UI.Text;
public var News2 : UnityEngine.UI.Text;

function Start () {

}

function Update () {

}

//Food Upgrade Functions
function FoodUp1() {
	Money = PlayerPrefs.GetInt("Money");
	if (Money > 99 && PlayerPrefs.GetString("smoothie") == "") {
		Money -= 99;
		News2.text = News.text;
		News.text = "You just bought a Smoothie Machine!";
		PlayerPrefs.SetString("smoothie", "true");
		PlayerPrefs.SetInt("Money", Money);
	}
}

function FoodUp2() {
	Money = PlayerPrefs.GetInt("Money");
	if (Money > 999 && PlayerPrefs.GetString("refrigerator") == "") {
		Money -= 1000;
		News2.text = News.text;
		News.text = "You just bought a refrigerator!";
		PlayerPrefs.SetString("refrigerator", "true");
		PlayerPrefs.SetInt("Money", Money);
	}
}
