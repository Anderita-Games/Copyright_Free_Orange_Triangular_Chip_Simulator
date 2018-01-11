#pragma strict
import UnityEngine.EventSystems;

//Currency
var Crumbs : UnityEngine.UI.Text;
var Chips : UnityEngine.UI.Text;
var Bags : UnityEngine.UI.Text;
//Start Text
var Help_Title : UnityEngine.UI.Text;
var Help_Sub : UnityEngine.UI.Text;
//Button Menus
var Menu_Prestige : GameObject;
var Menu_Upgrades : GameObject;
//Prestige
var Prestige_Current : UnityEngine.UI.Text;
var Prestige_Additional : UnityEngine.UI.Text;
var Prestige_Addition : float;
//Purchase 
var Crumbs_P : UnityEngine.UI.Text;
var Chips_P : UnityEngine.UI.Text;
var Bags_P : UnityEngine.UI.Text;
var Button_Chip : UnityEngine.UI.Text;
var Button_Bag : UnityEngine.UI.Text;
var Chips_Available : int;
var Bags_Available : int;

function Start() {
	if (PlayerPrefs.GetInt("Crumbs") == 0 && PlayerPrefs.GetInt("Chips") == 0 && PlayerPrefs.GetInt("Bags") == 0) {
		PlayerPrefs.SetInt("Chips", 1);
		Help_Title.text = "H E L L O !";
		Help_Sub.text = "P R E S S  T H E  S C R E E N  T O  S T A R T !";
	}
	
	Menu_Prestige.SetActive (false);
	Menu_Upgrades.SetActive (false);
}

function Update() {
	Crumbs.text = "Crumbs: " + PlayerPrefs.GetInt("Crumbs");
	Chips.text = "Chips: " + PlayerPrefs.GetInt("Chips");
	Bags.text = "Bags: " + PlayerPrefs.GetInt("Bags");

	Prestige_Addition = ((PlayerPrefs.GetInt("Bags") * 10000) + (PlayerPrefs.GetInt("Chips") * 100) + PlayerPrefs.GetInt("Crumbs")) / 10000;
	Prestige_Current.text = "Current Bonus: " + PlayerPrefs.GetFloat("Prestige Bonus") + "%";
	Prestige_Additional.text = "Additional Bonus: " + Prestige_Addition + "%";

	Crumbs_P.text = Crumbs.text;
	Chips_P.text = Chips.text;
	Bags_P.text = Bags.text;
	Chips_Available = Mathf.Floor(PlayerPrefs.GetInt("Crumbs") / 100);
	Bags_Available = Mathf.Floor(PlayerPrefs.GetInt("Chips") / 100);
	if (Chips_Available >= 2) {
		Button_Chip.text = "Buy " + Chips_Available.ToString() + " Chips";
	}else {
		Button_Chip.text = "Buy 1 Chip";
	}
	if (Bags_Available >= 2) {
		Button_Bag.text = "Buy " + Bags_Available.ToString() + " Bags";
	}else {
		Button_Bag.text = "Buy 1 Bag";
	}

	if(Input.GetMouseButtonDown(0)) {
		if (Input.mousePosition.y <= 70 || Menu_Prestige.active == true || Menu_Upgrades.active == true) {
			Debug.Log("No addition here!");
		}else {
			if (Help_Title.text != "") {
				Help_Title.text = "";
				Help_Sub.text = "";
			}
			PlayerPrefs.SetInt("Crumbs", PlayerPrefs.GetInt("Crumbs") + (PlayerPrefs.GetInt("Chips") * (PlayerPrefs.GetFloat("Prestige Bonus") / 100 + 1)));
			PlayerPrefs.SetInt("Chips", PlayerPrefs.GetInt("Chips") + (PlayerPrefs.GetInt("Bags") * (PlayerPrefs.GetFloat("Prestige Bonus") / 100 + 1)));
		}
		//Debug.Log(Input.mousePosition.y);
	}
}

function Prestige () {
	if (Menu_Prestige.active == false) {
		Menu_Prestige.SetActive (true);
		Menu_Upgrades.SetActive (false);
	}else {
		Menu_Prestige.SetActive (false);
	}
}

function Button_Prestige () {
	PlayerPrefs.SetFloat("Prestige Bonus", PlayerPrefs.GetInt("Crumbs") + Prestige_Addition);
	PlayerPrefs.SetInt("Crumbs", 0);
	PlayerPrefs.SetInt("Chips", 1);
	PlayerPrefs.SetInt("Bags", 0);
}

function Upgrades () {
	if (Menu_Upgrades.active == false) {
		Menu_Upgrades.SetActive (true);
		Menu_Prestige.SetActive (false);
	}else {
		Menu_Upgrades.SetActive (false);
	}
}

function Purchase_Chip () {
	if (Chips_Available >= 1) {
		PlayerPrefs.SetInt("Chips",  PlayerPrefs.GetInt("Chips") + Chips_Available);
		PlayerPrefs.SetInt("Crumbs",  PlayerPrefs.GetInt("Crumbs") - (Chips_Available * 100));
	}else {
		Debug.Log("Cant buy a chip");
	}
}

function Purchase_Bag () {
	if (Bags_Available >= 1) {
		PlayerPrefs.SetInt("Bags",  PlayerPrefs.GetInt("Bags") + Bags_Available);
		PlayerPrefs.SetInt("Chips",  PlayerPrefs.GetInt("Chips") - (Bags_Available * 100));
	}else {
		Debug.Log("Cant buy a bag");
	}
}