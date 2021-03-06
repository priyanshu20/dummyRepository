// import http status codes
const {
	BAD_REQUEST,
	NOT_AUTHORIZED,
	FORBIDDEN,
	NOT_FOUND,
	NOT_ACCEPTABLE
} = require("../utility/statusCodes");
// import helper functions
const { sendError, sendSuccess } = require("../utility/helpers");

module.exports.index = (req, res) => {
	return sendSuccess(res, {
		status: "ok",
		totalResults: 38,
		articles: [
			{
				source: { id: null, name: "NDTV News" },
				author: null,
				title:
					"BJP's Tarkishore Prasad To Be Nitish Kumar's Deputy In Bihar: Sources - NDTV",
				description:
					"BJP's Tarkishore Prasad will be the new Bihar Deputy Chief Minister with Sushil Kumar Modi expected to be moved to Delhi for a post in the union cabinet, sources told NDTV on Sunday.",
				url:
					"https://www.ndtv.com/india-news/tarkishore-prasad-to-be-next-bihar-deputy-chief-minister-sushil-modi-to-get-post-in-union-cabinet-2325481",
				urlToImage:
					"https://c.ndtvimg.com/2020-11/o3r9nalc_tarkishore-prasad-facebook_625x300_15_November_20.jpg",
				publishedAt: "2020-11-15T11:31:05Z",
				content:
					"Tarkishore Prasad was elected to the Bihar assembly from Katihar.\r\nPatna: BJP's Tarkishore Prasad will be the new Bihar Deputy Chief Minister with Sushil Kumar Modi expected to be moved to Delhi for … [+1524 chars]"
			},
			{
				source: { id: null, name: "The Indian Express" },
				author: "Lifestyle Desk",
				title:
					"Riteish Deshmukh’s fashionably sustainable Diwali is winning hearts; check it out here - The Indian Express",
				description:
					'One of the netizens replied to his video saying, "That is something very welcoming amazing you have done a very good thing need of the hour Kudos" and we honestly couldn\'t agree more!',
				url:
					"https://indianexpress.com/article/lifestyle/fashion/riteish-deshmukh-fashionably-sustainable-diwali-is-winning-hearts-check-it-out-here-7052196/",
				urlToImage:
					"https://images.indianexpress.com/2020/11/ritesh-1200.jpg",
				publishedAt: "2020-11-15T11:11:05Z",
				content:
					"By: Lifestyle Desk | New Delhi | \r\nUpdated: November 15, 2020 5:11:05 pm\r\nHow cute do they all look together! (Photo: Riteish Deshmukh/ Twitter)In a video posted by actor Riteish Deshmukh on Twitter,… [+1620 chars]"
			},
			{
				source: { id: null, name: "NDTV News" },
				author: null,
				title:
					"BSF Pays Tribute To Sub-Inspector Killed In Pakistan Ceasefire Violation - NDTV",
				description:
					"The Border Security Force (BSF) on Sunday paid tribute to Sub-Inspector Rakesh Dobhal, 39, who was killed in the line of duty on the eve of Diwali, during ceasefire violation by Pakistan in Jammu and Kashmir's Baramulla district.",
				url:
					"https://www.ndtv.com/india-news/bsf-pays-tribute-to-sub-inspector-rakesh-dobhal-killed-in-pakistan-ceasefire-violation-2325476",
				urlToImage:
					"https://c.ndtvimg.com/2020-11/8ted4a2o_bsf-subinspector-rakesh-dobhal_625x300_15_November_20.jpg",
				publishedAt: "2020-11-15T11:10:17Z",
				content:
					"BSF Sub-Inspector Rakesh Dobhal, 39, was killed in ceasefire violation by Pakistan in J&amp;K on Friday.\r\nNew Delhi: The Border Security Force (BSF) on Sunday paid tribute to Sub-Inspector Rakesh Dob… [+1741 chars]"
			},
			{
				source: { id: null, name: "NDTV News" },
				author: null,
				title:
					"What Shah Rukh Khan And Daughter Suhana Shared On Diwali - NDTV",
				description:
					'Diwali 2020: "Let\'s pray that this Diwali sets the tone for a brighter, happier life ahead," wrote Shah Rukh Khan',
				url:
					"https://www.ndtv.com/entertainment/what-shah-rukh-khan-and-daughter-suhana-shared-on-diwali-2325474",
				urlToImage:
					"https://c.ndtvimg.com/2020-11/80b2rcp8_diwali-2020-shah-rukh-khan-_625x300_15_November_20.jpg",
				publishedAt: "2020-11-15T11:09:35Z",
				content:
					'Diwali 2020: Shah Rukh Khan posted this photo. (Image courtesy: iamsrk)\r\nHighlights\r\n<ul><li>Shah Rukh Khan shared a photo of himself \r\n</li><li>"Happy Diwali to one and all," he wrote \r\n</li><li>Suh… [+1628 chars]'
			},
			{
				source: { id: null, name: "Livemint" },
				author: "Agencies",
				title:
					"RCEP: 15 nations sign world's largest free trade agreement — 10 things to know - Mint",
				description:
					"Fifteen Asia Pacific nations, including China, Japan and South Korea, on Sunday signed the pact, encompassing nearly a third of the world’s population and gross domestic product.India pulled out of the agreement last year over concerns about cheap Chinese goo…",
				url:
					"https://www.livemint.com/news/world/rcep-15-nations-sign-world-s-largest-free-trade-agreement-10-things-to-know-11605435401854.html",
				urlToImage:
					"https://images.livemint.com/img/2020/11/15/600x338/87e74f856625451883790465da3c98a8-87e74f856625451883790465da3c98a8-0_1605435636813_1605435672178.jpg",
				publishedAt: "2020-11-15T10:33:33Z",
				content:
					"China and 14 other countries agreed on Sunday to set up the worlds largest trading bloc, encompassing nearly a third of all economic activity, in a deal many in Asia are hoping will help hasten a rec… [+4706 chars]"
			},
			{
				source: { id: null, name: "NDTV News" },
				author: null,
				title:
					"Congress Leader Ahmed Patel, Who Tested Covid Positive, Moved To ICU, Says Son - NDTV",
				description:
					"Congress leader Ahmed Patel has been admitted to the ICU of Gurgaon's Medanta Hospital, his family said on Sunday.",
				url:
					"https://www.ndtv.com/india-news/coronavirus-news-congress-leader-ahmed-patel-who-is-covid-positive-in-icu-says-son-faisal-patel-2325456",
				urlToImage:
					"https://c.ndtvimg.com/2020-08/9ne2thro_ahmed-patel-congress_625x300_15_August_20.jpg",
				publishedAt: "2020-11-15T10:25:06Z",
				content:
					"Congress leader Ahmed Patel's son, Faisal Patel, tweeted Sunday afternoon (File)\r\nNew Delhi: Senior Congress leader Ahmed Patel, who tested positive for coronavirus on October 1, has been admitted to… [+3426 chars]"
			},
			{
				source: {
					id: "the-times-of-india",
					name: "The Times of India"
				},
				author: "TIMESOFINDIA.COM",
				title:
					"How effective was the firecracker ban in fighting Delhi’s pollution? - Times of India",
				description:
					"India News: Air pollution has many forms and is caused by several factors. That’s what confounds the battle to contain it. For at least a decade now India’s capit",
				url:
					"https://timesofindia.indiatimes.com/india/how-effective-was-the-firecracker-ban-in-fighting-delhis-pollution/articleshow/79231170.cms",
				urlToImage:
					"https://static.toiimg.com/thumb/msid-79231233,width-1070,height-580,imgsize-1006551,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
				publishedAt: "2020-11-15T10:24:00Z",
				content: null
			},
			{
				source: { id: null, name: "Hindustan Times" },
				author: "hindustantimes.com | Edited by: Amit Chaturvedi",
				title:
					"‘Soumitra Chatterjee’s death colossal loss to world of cinema’: PM Modi - Hindustan Times",
				description:
					"Soumitra Chatterjee was admitted to Belle Vue hospital on October 6 after he tested positive for the coronavirus disease (Covid-19). He was later shifted to Intensive Care Unit (ICU) as Covid encephalopathy set in.",
				url:
					"https://www.hindustantimes.com/india-news/soumitra-chatterjee-s-death-colossal-loss-to-world-of-cinema-pm-modi/story-S1JErha1E2DhXk7QT3kwCO.html",
				urlToImage:
					"https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2020/11/15/Pictures/soumitra-chatterjee-dies-aged-85_1c95d648-2725-11eb-8924-93a7f7a2e27c.jpg",
				publishedAt: "2020-11-15T09:32:06Z",
				content:
					"Prime Minister Narendra Modi on Sunday condoled the death of Bengali actor Soumitra Chatterjee, saying it’s a colossal loss to the world of cinema.\r\n“Shri Soumitra Chatterjee’s death is a colossal lo… [+1889 chars]"
			},
			{
				source: { id: null, name: "NDTV News" },
				author: null,
				title:
					"Reliance Retail Buys Urban Ladder for Rs 182 Crore; All You Need To Know - NDTV Profit",
				description:
					"The acquisition would amplify Reliance's e-commerce presence in India to emerge as a potent competitor to current sector leaders such as Walmart Inc's Flipkart and Jeff Bezos's Amazon.",
				url:
					"https://www.ndtv.com/business/reliance-retail-buys-urban-ladder-for-rs-182-crore-picks-majority-stake-all-you-need-to-know-2325441",
				urlToImage:
					"https://c.ndtvimg.com/2020-07/8avj7hm_mukesh-ambani-bloomberg_625x300_10_July_20.jpg",
				publishedAt: "2020-11-15T09:30:30Z",
				content:
					"Reliance Retail Limited operates India's fastest-growing retail business\r\nMukesh Ambai-led Reliance Industries' retail arm Reliance Retail Ventures has bought a 96 per cent stake in online furniture … [+2644 chars]"
			},
			{
				source: { id: null, name: "NDTV News" },
				author: "Gadgets 360 Staff With Inputs From ANI",
				title:
					"Zoom to Temporarily Lift 40-Minute Meeting Limit on Thanksgiving Day - Gadgets 360",
				description:
					"Zoom has announced that it would relax its forty-minute time limit for meetings so that people can use the video conferencing service without any restrictions on Thanksgiving Day.",
				url:
					"https://gadgets.ndtv.com/apps/news/zoom-meeting-time-limit-40-minutes-temporarily-lift-thanksgiving-day-2325433",
				urlToImage:
					"https://i.gadgets360cdn.com/large/zoom_chinese_govt_tianamen_square_activists_blocked_reuters_1591938417385.jpg",
				publishedAt: "2020-11-15T09:13:25Z",
				content:
					"Zoom has said that it would lift its standard forty-minute limit on free video calls for Thanksgiving Day to make it simpler for families to spend time virtually on the US holiday. The removal of the… [+1564 chars]"
			},
			{
				source: { id: null, name: "Telangana Today" },
				author: null,
				title:
					"Scientists decode how Mars lost its water and continues to lose - Telangana Today",
				description:
					"Scientists using an instrument aboard NASA's Mars Atmosphere and Volatile Evolution (MAVEN) spacecraft have discovered that water vapour near the surface of the Red Planet is lofted higher into the atmosphere",
				url:
					"https://telanganatoday.com/scientists-decode-how-mars-lost-its-water-and-continues-to-lose",
				urlToImage:
					"https://cdn.telanganatoday.com/wp-content/uploads/2020/11/Scientists-decode-how-Mars-lost-its-water-and-continues-to-lose.jpg",
				publishedAt: "2020-11-15T09:07:34Z",
				content:
					"Washington: Scientists have further decoded the phenomenon that led Mars to lose the equivalent of a global ocean of water up to hundreds of feet deep over billions of years.\r\nScientists using an ins… [+3114 chars]"
			},
			{
				source: {
					id: "the-times-of-india",
					name: "The Times of India"
				},
				author: "PTI",
				title:
					"Virat Kohli is a very powerful guy in world cricket: Mark Taylor - Times of India",
				description:
					'Cricket News: Virat Kohli is "a very powerful guy" in world cricket who can perform both the roles of an aggressive cricketer and a statesman with great aplomb, fee',
				url:
					"https://timesofindia.indiatimes.com/sports/cricket/india-in-australia/virat-kohli-is-a-very-powerful-guy-in-world-cricket-mark-taylor/articleshow/79231616.cms",
				urlToImage:
					"https://static.toiimg.com/thumb/msid-79231588,width-1070,height-580,imgsize-38829,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
				publishedAt: "2020-11-15T09:00:00Z",
				content: null
			},
			{
				source: { id: null, name: "The Indian Express" },
				author: "Tech Desk",
				title:
					"Samsung teases what appears to be a rollable screen smartphone - The Indian Express",
				description:
					"The stretchable phone is also expected to solve the problem of crease which is usually seen on foldable devices. The smartphone is expected to be launched next year.",
				url:
					"https://indianexpress.com/article/technology/tech-news-technology/samsung-rollable-stretchable-display-phone-specs-launch-7052311/",
				urlToImage:
					"https://images.indianexpress.com/2020/01/Galaxy-Fold-FB2.jpg",
				publishedAt: "2020-11-15T08:45:31Z",
				content:
					"By: Tech Desk | New Delhi | \r\nNovember 15, 2020 2:15:31 pm\r\nSamsung Galaxy Fold 2 (Representational Image: Express Photo)While foldable phones from Samsung are still in their second generation, the S… [+1917 chars]"
			},
			{
				source: { id: null, name: "The Indian Express" },
				author: "New York Times",
				title:
					"Biden asked Republicans to give him a chance. They’re not interested - The Indian Express",
				description:
					"Before Biden is a wall of Republican resistance, starting with Trump’s refusal to concede, extending to GOP lawmakers’ reluctance to acknowledge his victory and stretching to ordinary voters who deny the election’s outcome.",
				url:
					"https://indianexpress.com/article/world/biden-asked-republicans-to-give-him-a-chance-theyre-not-interested-7052172/",
				urlToImage:
					"https://images.indianexpress.com/2020/11/Joe-Biden-1-1200.jpg",
				publishedAt: "2020-11-15T08:28:59Z",
				content:
					"With COVID-19 surging across the country, Biden's top health care priority is whipping the federal government's response into shape. Biden's to-do list on health care begins with new hires and a rewr… [+2287 chars]"
			},
			{
				source: {
					id: "the-times-of-india",
					name: "The Times of India"
				},
				author: "TNN",
				title:
					"Vijay’s Master teaser becomes the most liked teaser in India - Times of India",
				description:
					"Vijay's Master teaser breaks record and becomes the most liked teaser",
				url:
					"https://timesofindia.indiatimes.com/entertainment/tamil/movies/news/vijays-master-teaser-becomes-the-most-liked-teaser-in-india/articleshow/79231250.cms",
				urlToImage:
					"https://static.toiimg.com/thumb/msid-79231250,width-1070,height-580,overlay-toi_sw,pt-32,y_pad-40,resizemode-75,imgsize-512440/79231250.jpg",
				publishedAt: "2020-11-15T08:22:00Z",
				content:
					"Bhumi Pednekar, an avid supporter of climate conservation and nature protection, believes in the idea of sustainability, recycling and upcycling to avoid any wastages. She even wore her mothers sari … [+234 chars]"
			},
			{
				source: { id: null, name: "Hindustan Times" },
				author: "Reuters | Posted by Nilavro Ghosh",
				title:
					"India rate cuts bets fall as recovery gains hold, inflation stays high - Hindustan Times",
				description:
					"With inflation staying above 7% in October for a second straight month, well above the RBI’s medium term target of 4%, views that India is near the end of the current rate cutting cycle have become more pronounced.",
				url:
					"https://www.hindustantimes.com/business-news/india-rate-cuts-bets-fall-as-recovery-gains-hold-inflation-stays-high/story-EJFPlv9GCsuV24hJJ703BO.html",
				urlToImage:
					"https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2020/11/15/Pictures/outside-photo-headquarters-reserve-mumbai-pictured-india_43c62630-2718-11eb-bf59-6b6d61a0f07e.jpg",
				publishedAt: "2020-11-15T08:05:06Z",
				content:
					"Negative real rates in India and recovering growth alongside high inflation suggest its central bank has little room for more monetary stimulus, but policy is likely to stay accommodative, economists… [+2372 chars]"
			},
			{
				source: { id: null, name: "Hindustan Times" },
				author: "hindustantimes.com | Edited by Kunal Gaurav",
				title:
					"Pro-Trump march: What is Antifa that US President accused of attacking his supporters? - Hindustan Times",
				description:
					"Trump said that Antifa tried attacking his “innocent” supporters present at the MAGA rally but had to “ran for the hills” because they “aggressively fought back.”",
				url:
					"https://www.hindustantimes.com/world-news/pro-trump-march-what-is-antifa-that-us-president-accused-of-attacking-his-supporters/story-i4hxfL7LIUfpyZqUiVxz3N.html",
				urlToImage:
					"https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2020/11/15/Pictures/results-trump-right-protest-groups-election-million_e53a106e-2716-11eb-bf59-6b6d61a0f07e.jpg",
				publishedAt: "2020-11-15T08:01:45Z",
				content:
					"US President Donald Trump accused Antifa of attacking his supporters during a rally in Washington DC after reports of violent clashes emerged on Saturday night. Hundreds of thousands of pro-Trump pro… [+1803 chars]"
			},
			{
				source: { id: null, name: "NDTV News" },
				author: null,
				title:
					"SpaceX-NASA's Crew-1 Mission To Launch Four Astronauts Tonight - NDTV",
				description:
					'Four astronauts were poised to launch on the SpaceX Crew Dragon "Resilience" to the International Space Station on Sunday, the first of what the US hopes will be many routine missions following a successful test flight in late spring.',
				url:
					"https://www.ndtv.com/world-news/spacex-nasas-crew-1-mission-to-launch-four-astronauts-on-sunday-2325412",
				urlToImage:
					"https://c.ndtvimg.com/2020-11/ghkmi7bk_spacex-falcon-9-rocket_625x300_14_November_20.jpg",
				publishedAt: "2020-11-15T07:24:13Z",
				content:
					'A SpaceX Falcon 9 rocket is readied for the first operational NASA commercial crew mission.\r\nWashington: Four astronauts were poised to launch on the SpaceX Crew Dragon "Resilience" to the Internatio… [+4190 chars]'
			},
			{
				source: { id: null, name: "Hindustan Times" },
				author: "Srimoyee Chowdhury",
				title:
					"NASA shares pic of astronaut playing saxophone in space. ‘So cool’ say netizens - Hindustan Times",
				description:
					"Astronaut Jessica Meir can be seen floating in zero gravity while playing the instrument.",
				url:
					"https://www.hindustantimes.com/it-s-viral/nasa-shares-pic-of-astronaut-playing-saxophone-in-space-so-cool-say-netizens/story-c0CAA26idamJHrttyrZEYI.html",
				urlToImage:
					"https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2020/11/15/Pictures/_3a181062-2713-11eb-8924-93a7f7a2e27c.png",
				publishedAt: "2020-11-15T07:23:21Z",
				content:
					"It was not long ago that NASA asked netizens what they wish to carry on a trip to the Moon. Now, the space agency has shared a photograph of an unusual thing taken to space by an astronaut. Chances a… [+1269 chars]"
			},
			{
				source: { id: null, name: "Livemint" },
				author: "PTI",
				title:
					"Researchers identify new compounds to potentially treat novel coronavirus - Mint",
				description:
					"According to the researchers  these compounds disrupt the functioning of a protein complex inside human cells that are critical for the replication and survival of coronaviruses",
				url:
					"https://www.livemint.com/science/health/researchers-identify-new-compounds-to-potentially-treat-novel-coronavirus-11605424213331.html",
				urlToImage:
					"https://images.livemint.com/img/2020/11/15/600x338/AFP_8V867R_1605424793071_1605424809664.jpg",
				publishedAt: "2020-11-15T07:21:21Z",
				content:
					"Washington: Researchers have discovered new drug compounds that target a protein which enables the novel coronavirus and other viruses with pandemic potential to replicate in human cells, an advance … [+2187 chars]"
			}
		]
	});
};
