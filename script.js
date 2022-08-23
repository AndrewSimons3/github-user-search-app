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

toggleBtn.addEventListener('click', () => {
	sun.classList.toggle('hide');
	moon.classList.toggle('hide');
	light.classList.toggle('hide');
	dark.classList.toggle('hide');

	body.classList.toggle('light-mode-bg');
	logo.classList.toggle('light-mode-logo-color');
	form.classList.toggle('light-mode-container-bg');
	input.classList.toggle('light-mode-container-bg');
	content.classList.toggle('light-mode-container-bg');
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
  // return `
  // <div class="content">
	// 			<div class="left">
	// 				<img
	// 					src=${data.avatar_url}
	// 					class="profile-pic-dsk"
	// 					alt="profile pic dsk"
	// 				/>
	// 			</div>

	// 			<div class="right">
	// 				<div class="profile-header">
	// 					<img
	// 						src=${data.avatar_url}
	// 						class="profile-pic-tab-mob"
	// 						alt="profile picture"
	// 					/>
	// 					<div class="profile-header-content">
	// 						<h2>${data.login}</h2>
	// 						<a href="#">@${login}</a>
	// 						<span>Joined 25 Jan 2011</span>
	// 					</div>
	// 				</div>
	// 				<p class="summary">
	// 					Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
	// 					odio. Quisque volutpat mattis eros.
	// 				</p>
	// 				<div class="profile-info">
	// 					<div class="info">
	// 						<h4>Repos</h4>
	// 						<span>${public_repos}</span>
	// 					</div>
	// 					<div class="info">
	// 						<h4>Followers</h4>
	// 						<span>${followers}</span>
	// 					</div>
	// 					<div class="info">
	// 						<h4>Following</h4>
	// 						<span>${following}</span>
	// 					</div>
	// 				</div>

	// 				<ul class="social">
	// 					<li>
	// 						<img src="./assets/icon-location.svg" alt="location" /><a href="#"
	// 							>San Francisco</a
	// 						>
	// 					</li>
	// 					<li>
	// 						<img src="./assets/icon-website.svg" alt="website" /><a href="#"
	// 							>https://github.blog</a
	// 						>
	// 					</li>
	// 					<li>
	// 						<img src="./assets/icon-twitter.svg" alt="twitter" /><a href="#"
	// 							>Not Availble</a
	// 						>
	// 					</li>
	// 					<li>
	// 						<img src="./assets/icon-company.svg" alt="company" /><a href="#"
	// 							>@github</a
	// 						>
	// 					</li>
	// 				</ul>
	// 			</div>
	// 		</div>
  // `;
  
}