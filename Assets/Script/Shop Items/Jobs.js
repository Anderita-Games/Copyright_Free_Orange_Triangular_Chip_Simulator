#pragma strict
var Job;
var sp : int;

//news
public var News : UnityEngine.UI.Text;
public var News2 : UnityEngine.UI.Text;

function Start () {

}

function Update () {
	
}

//Job Fucntions
function Jobs1() {
	if (sp > -1 && PlayerPrefs.GetString("Job") != "Beggar") {
		News2.text = News.text;
		News.text = "You are now a Beggar!";
		PlayerPrefs.SetString("Job", "Beggar");
	}
}

function Jobs2() {
	sp = PlayerPrefs.GetInt("sp");
	if (sp > 9 && PlayerPrefs.GetString("Job") != "Scam Artist") {
		sp -= 10;
		News2.text = News.text;
		News.text = "You are now a Scam Artist!";
		PlayerPrefs.SetString("Job", "Scam Artist");
		PlayerPrefs.SetInt("sp", sp);
	}
}

function Jobs3() {
	sp = PlayerPrefs.GetInt("sp");
	if (sp > 49 && PlayerPrefs.GetString("Job") != "Thief") {
		sp -= 50;
		News2.text = News.text;
		News.text = "You are now a Thief!";
		PlayerPrefs.SetString("Job", "Thief");
		PlayerPrefs.SetInt("sp", sp);
	}
}

function Jobs4() {
	sp = PlayerPrefs.GetInt("sp");
	if (sp > 99 && PlayerPrefs.GetString("Job") != "Paper Salesman") {
		sp -= 100;
		News2.text = News.text;
		News.text = "You are now a Paper Salesman!";
		PlayerPrefs.SetString("Job", "Paper Salesman");
		PlayerPrefs.SetInt("sp", sp);
	}
}

function Jobs5() {
	sp = PlayerPrefs.GetInt("sp");
	if (sp > 999 && PlayerPrefs.GetString("Job") != "Human Lab Rat") {
		sp -= 1000;
		News2.text = News.text;
		News.text = "You are now a Human Lab Rat!";
		PlayerPrefs.SetString("Job", "Human Lab Rat");
		PlayerPrefs.SetInt("sp", sp);
	}
}

function Jobs6() {
	sp = PlayerPrefs.GetInt("sp");
	if (sp > 1999 && PlayerPrefs.GetString("Job") != "Cop") {
		sp -= 2000;
		News2.text = News.text;
		News.text = "You are now a Cop!";
		PlayerPrefs.SetString("Job", "Cop");
		PlayerPrefs.SetInt("sp", sp);
	}
}

function Jobs7() {
	sp = PlayerPrefs.GetInt("sp");
	if (sp > 9999 && PlayerPrefs.GetString("Job") != "Programmer") {
		sp -= 10000;
		News2.text = News.text;
		News.text = "You are now a Programmer!";
		PlayerPrefs.SetString("Job", "Programmer");
		PlayerPrefs.SetInt("sp", sp);
	}
}

function Jobs8() {
	sp = PlayerPrefs.GetInt("sp");
	if (sp > 49999 && PlayerPrefs.GetString("Job") != "Hacker") {
		sp -= 50000;
		News2.text = News.text;
		News.text = "You are now a 1337 Haxor!";
		PlayerPrefs.SetString("Job", "Hacker");
		PlayerPrefs.SetInt("sp", sp);
	}
}

function Jobs9() {
	sp = PlayerPrefs.GetInt("sp");
	if (sp > 99999 && PlayerPrefs.GetString("Job") != "Rapper") {
		sp -= 100000;
		News2.text = News.text;
		News.text = "You are now a Rapper!";
		PlayerPrefs.SetString("Job", "Rapper");
		PlayerPrefs.SetInt("sp", sp);
	}
}