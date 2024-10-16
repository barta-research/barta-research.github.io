// Updated Team.jsx

import Person1Image from "../../assets/Meet_with_the_teams/Dr Ahmedul Kabir.jpg";
import Person2Image from "../../assets/Meet_with_the_teams/Shebuty Rayana.jpg";
import Person3Image from "../../assets/Meet_with_the_teams/Zarif Masud.jpg";
import Person4Image from "../../assets/Meet_with_the_teams/Abhijit Paul.jpg";
import Person5Image from "../../assets/Meet_with_the_teams/Sharif Mohammad Abdullah.jpg";
import Person6Image from "../../assets/Meet_with_the_teams/Mashiat Amin Farin.jpg";
import Tumpa_1307 from "../../assets/Meet_with_the_teams/1307.jpeg";
import Rony_1325 from "../../assets/Meet_with_the_teams/1325.jpg";
import Detail from "./components/Detail";

const teamInfo = [
	{
		name: "Dr Ahmedul Kabir",
		workplace: "Institue of Information Technology, University of Dhaka",
		position: "Associate Professor",
		email: "kabir@iit.du.ac.bd",
		googleScholar: "https://scholar.google.com/",
		github: "https://github.com/",
		linkedin: "https://www.linkedin.com/in/ahmedul-kabir-90469134/",
		role: "Co-Director",
		image: Person1Image,
	},
	{
		name: "Shebuti Rayana",
		workplace: "Computer and Information Sciences, SUNY at Old Westbury, United States",
		position: "Assistant Professor",
		email: "rayanas@oldwestbury.edu",
		googleScholar: "https://shebuti.com/",
		github: "https://github.com/",
		linkedin: "https://www.linkedin.com/in/shebuti-rayana/",
		role: "Co-Director",
		image: Person2Image,
	},
	{
		name: "Zarif Masud",
		workplace: "University of Toronto, Canada",
		position: "PhD Student",
		email: "zarif.masud@gmail.com",
		googleScholar: "https://scholar.google.com/",
		github: "https://github.com/",
		linkedin: "https://www.linkedin.com/in/zarifmasud/",
		role: "Research Fellow",
		image: Person3Image,
	},
	{
		name: "Abhijit Paul",
		workplace: "Samsung R&D Institute, Bangladesh",
		position: "Academic Internship",
		email: "bsse1201@iit.du.ac.bd",
		googleScholar: "https://scholar.google.com/",
		github: "https://github.com/abj-paul",
		linkedin: "https://www.linkedin.com/in/abj-paul/",
		role: "Lead Undergrad Researcher",
		image: Person4Image,
	},
	{
		name: "Sharif Mohammad Abdullah",
		workplace: "IIT, University of Dhaka",
		position: "Undergrad Student",
		email: "bsse1211@iit.du.ac.bd",
		googleScholar: "https://www.researchgate.net/profile/Sharif-Mohammad-5",
		github: "https://github.com/SharifMAbdullah/",
		linkedin: "https://www.linkedin.com/in/sharifmabdullah/",
		role: "Undergrad Researcher",
		image: Person5Image,
	},
	{
		name: "Mashiat Amin Farin",
		workplace: "Brain Station Ltd.",
		position: "Blockchain Engineer",
		email: "bsse1202@iit.du.ac.bd",
		googleScholar: "https://scholar.google.com/",
		github: "https://github.com/",
		linkedin: "https://www.linkedin.com/in/mashiataminfarin/",
		role: "Undergrad Researcher",
		image: Person6Image,
	},
	{
		name: "Umme Kulsum Tumpa",
		workplace: "IIT, University of Dhaka",
		position: "Undergrad Student",
		email: "bsse1307@iit.du.ac.bd",
		googleScholar: "https://scholar.google.com/",
		github: "https://github.com/UmmeKulsumTumpa",
		linkedin: "https://www.linkedin.com/in/umme-kulsum-tumpa-082245288",
		role: "Undergrad Researcher",
		image: Tumpa_1307,
	},
	{
		name: "Rony Majumder",
		workplace: "IIT, University of Dhaka",
		position: "Undergrad Student",
		email: "bsse1325@iit.du.ac.bd",
		googleScholar: "https://scholar.google.com/",
		github: "https://github.com/rony31416",
		linkedin: "https://www.linkedin.com/in/rony-majumder-7064332a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
		role: "Undergrad Researcher",
		image: Rony_1325,
	},
	
];

const Team = () => {
	return (
		<div>
			<h1 className="text-3xl font-bold py-2 text-center my-8">Our Team</h1>
			<div className="grid grid-cols-3 mx-28 gap-14 mb-10">
				{teamInfo.map((individualDetail) => (
					<div key={individualDetail.name}>
						<Detail user={individualDetail} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Team;
