import { getPostText, scrape } from './src/urgent';

const source =
	`<script src="/cdn-cgi/apps/head/dsFpVOvNEklLYGoVvI1dC01gu0g.js"></script>` +
	`<body style="background-color:#FFFFFF">` +
	`<p style="text-align:center; color:#000000">` +
	`<strong>Current Time: 07:17 Local</strong><br>` +
	`<strong>07:30 - </strong>Planetcrusher Assault<br>` +
	`<strong>07:30 - </strong>The Second Battle of Halphia Lake<br>` +
	`<strong>07:30 - </strong>Doldoris Vera Suppression Op<br>` +
	`<strong>07:30 - </strong>Omen of the Planetbreaker<br>` +
	`</p>`;

const events = scrape(source);
const text = getPostText(events);

console.log(events);
console.log(text);
