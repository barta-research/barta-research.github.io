import PublicationDetail from "./components/PublicationDetail";

const Publications = () => {
	const publications = [
		{
			id: 1,
			title: "Contrastive Learning for API Aspect Analysis",
			authors: "GM Shahariar, Tahmid Hasan, Anindya Iqbal, Gias Uddin",
			publishedIn:
				"38th IEEE/ACM International Conference on Automated Software Engineering (ASE 2023)",
			pdf: "https://arxiv.org/abs/2307.16878",
			code: "https://github.com/csebuetnlp/",
		},
		{
			id: 2,
			title:
				"CrossSum: Beyond English-Centric Cross-Lingual Abstractive Text Summarization for 1500+ Language Pairs",
			authors:
				"Abhik Bhattacharjee, Tahmid Hasan, Wasi Uddin Ahmad, Yuan-Fang Li, Yong-bin Kang, Rifat Shahriyar",
			publishedIn:
				"Proceedings of the 61st Annual Meeting of the Association for Computational Linguistics: ACL 2023",
			pdf: "https://arxiv.org/abs/2307.16878",
			code: "https://github.com/csebuetnlp/",
		},
		{
			id: 3,
			year: 2024,
			title:
			  "Towards Bridging Formal Methods and Human Interpretability: Evaluating Human Comprehension of Labeled Transition System Designs",
			authors: "Abhijit Paul, Proma Chowdhury, Kazi Sakib",
			publishedIn:
			  "On-Review: ICSE Design Workshop '25, Acceptance notification: December 18, 2024",
			pdf: "https://arxiv.org/abs/2307.16878",
			code: "https://github.com/csebuetnlp/",
			description:
			  "Explores cognitive dimensions of formal design using temporal logic, emphasizing lightweight methods for practical application.",
		  },
		  {
			id: 4,
			year: 2024,
			title:
			  "Where Journalism Silenced Voices: Exploring Discrimination in the Representation of Indigenous Communities in Bangladesh",
			authors:
			  "Abhijit Paul, Adity Khisa, Sharif Md. Abdullah, Zarif Masud, Dr. Ahmedul Kabir, Dr. Shebuti Rayana",
			publishedIn:
			  "Submitted to: CSCW (A), Revision notification: March 4, 2025",
			pdf: "https://arxiv.org/abs/2307.16878",
			code: "https://github.com/csebuetnlp/",
			description:
			  "Analyzes media representation biases against indigenous minorities using machine learning and sociological frameworks.",
		  },
		  {
			id: 5,
			year: 2023,
			title: "Bengali Document Layout Analysis -- A YOLOV8 Based Ensembling Approach",
			authors:
			  "Nazmus Sakib Ahmed, Saad Sakib Noor, Ashraful Islam Shanto Sikder, Abhijit Paul",
			publishedIn:
			  "Published in: Arxiv",
			pdf: "https://arxiv.org/abs/2307.16878",
			code: "https://github.com/csebuetnlp/",
			description:
			  "Experimentation results on Bangla Document Layout Analysis on the BadLaD dataset in DLSprint’23 where we placed 2nd.",
		  },
		  {
			id: 6,
			year: 2023,
			title: "Stemming: Evolution and Current State with Focus on Bangla",
			authors:
			  "Abhijit Paul, Mashiat Amin Farin, Sharif Md. Abdullah, Zarif Masud, Dr. Ahmedul Kabir, Dr. Shebuti Rayana",
			publishedIn:
			  "Target: NAACL (A*), Rejected due to irrelevane with conference",
			pdf: "https://arxiv.org/abs/2307.16878",
			code: "https://github.com/csebuetnlp/",
			description:
			  "Comprehensive review of stemming methods with a focus on Bangla, highlighting linguistic challenges and future directions.",
		  },
		  {
			id: 7,
			year: 2023,
			title:
			  "Exploring Diverse Coping Mechanisms in 2023: A Comprehensive Survey Across Backgrounds and Cultures",
			authors: "Abhijit Paul, Rony Majumder",
			publishedIn: "Arxiv",
			pdf: "https://arxiv.org/abs/2307.16878",
			code: "https://github.com/csebuetnlp/",
			description:
			  "Collected a dataset of coping mechanisms across culture for Gen-Z and Gen-Alpha age group. The findings provided interesting insight on the types of coping mechanism.",
		  },
	];

	return (
		<section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
			<h1 className="text-3xl sm:text-4xl font-semibold pb-8 text-center">
				Publications
			</h1>
			<div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
				{publications.map((publicationInfo) => (
					<PublicationDetail key={publicationInfo.id} publicationInfo={publicationInfo} />
				))}
			</div>
		</section>
	);
};

export default Publications;
