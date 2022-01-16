import React from "react";
import ReactDOM from "react-dom";
import propTypes from "prop-types";
const Simplecounter = (props) => {
	return (
		<div class="d-flex justify-content-center flex-row bd-highlight mb-3 bg-dark text-white w-100 p-3">
			<div class="border border-white w-10 p-4 fs-6">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-clock-fill"
					viewBox="0 0 16 16">
					<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
				</svg>
			</div>
			<div className="six" class="border border-white w-10 p-4 fs-5">
				{props.digitsix}
			</div>
			<div className="five" class="border border-white w-10 p-4 fs-5">
				{props.digitfive}
			</div>
			<div className="four" class="border border-white w-10 p-4 fs-5">
				{props.digitfour}
			</div>
			<div className="three" class="border border-white w-10 p-4 fs-5">
				{props.digithree}
			</div>
			<div className="two" class="border border-white w-10 p-4 fs-5">
				{props.digitwo}
			</div>
			<div className="one" class="border border-white w-10 p-4 fs-5">
				{props.digitone}
			</div>
		</div>
	);
};

let Counter = 0;
setInterval(function () {
	const six = Math.floor(Counter / 100000) % 10;
	const five = Math.floor(Counter / 10000) % 10;
	const four = Math.floor(Counter / 1000) % 10;
	const three = Math.floor(Counter / 100) % 10;
	const two = Math.floor(Counter / 10) % 10;
	const one = Math.floor(Counter / 1) % 10;
	console.log(six, five, four, three, two, one);
	Counter++;
	ReactDOM.render(
		<Simplecounter
			digitone={one}
			digitwo={two}
			digithree={three}
			digitfour={four}
			digitfive={five}
			digitsix={six}
		/>,
		document.querySelector("#app")
	);
}, 1000);

Simplecounter.propTypes = {
	digitsix: propTypes.number,
	digitfive: propTypes.number,
	digitfour: propTypes.number,
	digithree: propTypes.number,
	digitwo: propTypes.number,
	digitone: propTypes.number,
};
export default Simplecounter;
