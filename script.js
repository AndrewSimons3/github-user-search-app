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
const summary = document.querySelector('.summary');
const profileInfo = document.querySelector('.profile-info');
const infoTitle = document.querySelectorAll('.info-title');
const infoNum = document.querySelectorAll('.info-num');
const socialLink = document.querySelectorAll('.social-link');

const profilePicDsk = document.querySelector('.profile-pic-dsk');
const profilePicTabMob = document.querySelector('.profile-pic-tab-mob');
const githubName = document.querySelector('.github-name');
const githubUsername = document.querySelector('.github-username');
const joined = document.querySelector('.joined');
const repoNum = document.querySelector('.repo-num');
const followerNum = document.querySelector('.follower-num');
const followingNum = document.querySelector('.following-num');
const location = document.querySelector('.location');
const twitter = document.querySelector('.twitter');
const github = document.querySelector('.github');
const website = document.querySelector('.website');
const errorMsg = document.querySelector('.error')

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

fetch('https://api.github.com/users/octocat')
	.then((res) => res.json())
	.then((data) => updateProfile(data));

form.addEventListener('submit', getUserInfo);

input.addEventListener('input', () => {
  errorMsg.style.display = 'none';
})

function getUserInfo(e) {
	e.preventDefault();
	let inputVal = document.getElementById('input').value;

	fetch(`https://api.github.com/users/${inputVal}`)
		.then((res) => res.json())
		.then((data) => updateProfile(data))
		.catch((error) => errorMsg.style.display = 'block');

	input.value = '';
}

function updateProfile(data) {
	console.log(data)
	const day = data.created_at.slice(8, 10);
	const month = data.created_at.slice(5, 7);
	const year = data.created_at.slice(0, 4);
	if (!data.name) {
		githubName.innerHTML = `@${data.login}`;
	} else {
		githubName.innerHTML = data.name;
	}
	githubUsername.innerHTML = `@${data.login}`;
	joined.innerHTML = `Joined ${day} ${month} ${year}`;
	summary.innerHTML = data.bio;
	repoNum.innerHTML = data.public_repos;
	followerNum.innerHTML = data.followers;
	followingNum.innerHTML = data.following;
  profilePicTabMob.src = data.avatar_url;
  profilePicDsk.src = data.avatar_url;
	if (data.bio === null) {
		summary.innerHTML = 'Not Available';
	} else {
		summary.innerHTML = data.bio;
	}

	if (data.location === null) {
		location.innerHTML = 'Not Available';
	} else {
		location.innerHTML = data.location;
		location.href = `https://google.com/maps/place/${data.location}`;
	}
	if (data.twitter_username === null) {
		twitter.innerHTML = 'Not Available';
	} else {
		twitter.innerHTML = data.twitter_username;
		twitter.href = `https://twitter.com/${data.twitter_username}`;
	}
	if (data.blog === null || data.blog === '') {
		website.innerHTML = 'Not Available';
	} else {
		website.innerHTML = data.blog;
		website.href = data.blog;
	}
	if (data.html_url === null) {
		github.innerHTML = 'Not Available';
	} else {
		github.innerHTML = data.html_url;
		github.href = data.html_url;
	}
}
