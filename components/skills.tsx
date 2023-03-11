"use client";
import React, { useState } from "react";

const Skills = ({ data }:{data:any}) => {
	const [activeTab, setActiveTab] = useState("Soft");

	const setBg = (active : any) => (activeTab === active ? "bg-black" : "bg-grey");
	const setTextClr = (active : any) => (activeTab === active ? "text-yellow" : "bg-grey");

	const tabs = (
		<div className='inline-flex flex-col space-y-5 justify-center  '>
			{["Soft", "Hard"].map((el) => (
				<button
					key={el}
					type='button'
					className={`btn ${setBg(el)} ${setTextClr(el)} py-4 px-10 rounded-lg`}
					onClick={() => setActiveTab(el)}
				>
					{el} Skills
				</button>
			))}
		</div>
	);
	const content = (
		<ul
			className={`flex flex-wrap content-center list-none py-4 gap-5`}
		>
			{data[activeTab].map(({ icon, text }:{icon:string,text:string}) => (
				<li key={text} className='skill text-lg'>
					<span> {icon}</span> {text}
				</li>
			))}
		</ul>
	);
	return (
		<div className="flex justify-start mx-10 p-4 sm:ml-2 sm:p-2">
            <span className="pl-10 pr-10">
			{tabs}
            </span>
            <span className="flex">
			{content}
            </span>
		</div>
	);
};

export default Skills;
