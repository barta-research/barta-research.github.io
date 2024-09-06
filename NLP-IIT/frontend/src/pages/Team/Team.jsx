import Person1Image from "../../assets/Meet_with_the_teams/Dr Ahmedul Kabir.jpg";
import Person2Image from "../../assets/Meet_with_the_teams/Shebuty Rayana.jpg";
import Person3Image from "../../assets/Meet_with_the_teams/Zarif Masud.jpg";
import Person4Image from "../../assets/Meet_with_the_teams/Abhijit Paul.jpg";
import Person5Image from "../../assets/Meet_with_the_teams/Sharif Mohammad Abdullah.jpg";
import Person6Image from "../../assets/Meet_with_the_teams/Mashiat Amin Farin.jpg";
import Detail from "./components/Detail";

const Team = () => {

  const teamInfo = [
    {
      name: "Dr Ahmedul Kabir",
      workplace: "Institue of Information Technology, University of Dhaka",
      position: "Associate Professor",
      email: "kabir@iit.du.ac.bd",
      googleScholar: "google scholar",
      github: "github",
      linkedin: "linkedin",
      image: Person1Image,
    },
    {
      name: "Shebuty Rayana",
      workplace: "School of Arts and Sciences, SUNY Old Westbury, United States",
      position: "Assistant Professor",
      email: "rayanas@oldwestbury.edu",
      googleScholar: "google scholar",
      github: "github",
      linkedin: "linkedin",
      image: Person2Image,
    },
    {
      name: "Zarif Masud",
      workplace: "University of Toronto, Canada",
      position: "PhD Student",
      email: "zarif.masud@gmail.com",
      googleScholar: "google scholar",
      github: "github",
      linkedin: "linkedin",
      image: Person3Image,
    },
    {
      name: "Abhijit Paul",
      workplace: "Samsung R&D Institue, Bangladesh",
      position: "Academic Internship",
      email: "bsse1201@iit.du.ac.bd",
      googleScholar: "google scholar",
      github: "github",
      linkedin: "linkedin",
      image: Person4Image,
    },
    {
      name: "Sharif Mohammad Abdullah",
      workplace: "IIT, University of Dhaka",
      position: "Undergrad Student",
      email: "bsse1213@iit.du.ac.bd",
      googleScholar: "google scholar",
      github: "github",
      linkedin: "linkedin",
      image: Person5Image,
    },
    {
      name: "Mashiat Amin Farin",
      workplace: "Brain Station Ltd.",
      position: "Blockchain Engineer",
      email: "bsse1202@iit.du.ac.bd",
      googleScholar: "google scholar",
      github: "github",
      linkedin: "linkedin",
      image: Person6Image,
    },
  ];

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
