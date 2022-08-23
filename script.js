'use strict';

const toggleBtn = document.querySelector('.toggle-btn');
const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');
const light = document.querySelector('.light');
const dark = document.querySelector('.dark');

const body = document.getElementById('body');
const logo = document.querySelector('.logo');
const form = document.querySelector('.form');
const input = document.getElementById('input');
const content = document.querySelector('.content');
const searchBtn = document.querySelector('.search');

const githubName = document.querySelector('.github-name');
const joined = document.querySelector('.joined');
const summary = document.querySelector('.summary');
const profileInfo = document.querySelector('.profile-info');
const infoTitle = document.querySelectorAll('.info-title');
const infoNum = document.querySelectorAll('.info-num');
const socialLink = document.querySelectorAll('.social-link');

toggleBtn.addEventListener('click', () => {
	sun.classList.toggle('hide');
	moon.classList.toggle('hide');
	light.classList.toggle('hide');
	dark.classList.toggle('hide');

	body.classList.toggle('light-mode-bg');
	logo.classList.toggle('light-mode-logo-color');
	dark.classList.toggle('light-mode-text-1');
	form.classList.toggle('light-mode-container-bg');
	form.classList.toggle('light-mode-box-shadow');
	content.classList.toggle('light-mode-container-bg');
	content.classList.toggle('light-mode-box-shadow');
	input.classList.toggle('light-mode-container-bg');
	input.classList.toggle('light-mode-text-1');
	githubName.classList.toggle('light-mode-text-heading');
	joined.classList.toggle('light-mode-text-2');
	summary.classList.toggle('light-mode-text-1');
	profileInfo.classList.toggle('light-mode-container-bg-2');
	infoNum.forEach((num) => num.classList.toggle('light-mode-text-2'));
	infoTitle.forEach((title) => title.classList.toggle('light-mode-text-1'));
	socialLink.forEach((link) => link.classList.toggle('light-mode-text-1'));
});

form.addEventListener('submit', getUserInfo);

function getUserInfo() {
	let inputVal = document.getElementById('input').value;
	console.log(typeof inputVal);

	try {
		fetch(`https://api.github.com/users/${inputVal}`)
			.then((res) => res.json())
			.then((data) => createProfile(data));
	} catch {}
}

function createProfile(data) {
	console.log(data);
	githubName.innerHTML = data.login;
}
