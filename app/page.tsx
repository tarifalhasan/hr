import Emily from "@/components/Emily";
import Motivations from "@/components/Motivations";
import PainPointOpportuanitis from "@/components/PainPointOpportuanitis";
import StepBox from "@/components/StepBox";

export default function Home() {
  const emilyProps = {
    name: "Emily",
    role: "HR Recruitment Specialist",
    age: 32,
    location: "New York City",
    education: "Master’s Degree in HR Management",
    experience: "7 years work experience",
    focus: "with a focus on recruitment",
  };

  const motivationsProps = {
    title: "Motivations",
    items: [
      "Streamline the recruitment process, making it more efficient and effective in attracting top talent.",
      "Promote a positive employer brand by improving the candidate experience.",
      "Committed to diversity and inclusion in the workplace.",
    ],
  };

  return (
    <div className="wrapper">
      <div className="container relative overflow-hidden">
        <div className="main-media">
          <div className=" grid sm:grid-cols-2 p-10">
            <div className="">
              <div className="header-media">
                <div className="left-side"></div>
                <Emily data={emilyProps} />
              </div>
            </div>
            <div className="">
              <Motivations data={motivationsProps} />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            <StepBox
              header="Sourcing"
              body="Identify potential candidates and sources for the particular role being open."
              imgSrc="/images/hr_0.png"
              smallBox1="Talent acquisition."
              smallBox2="Industry visibility."
            />
            <StepBox
              header="Screening"
              body="Review and assess candidate applications and qualifications to shortlist potential hires."
              imgSrc="/images/hr_1.png"
              smallBox1="Screening processes."
              smallBox2="Candidate evaluation."
            />
            <StepBox
              header="Interviewing"
              body="Conduct interviews to assess candidate skills, cultural fit, and suitability for the organization."
              imgSrc="/images/hr_2.png"
              smallBox1="Structured interviews."
              smallBox2="Collaborate for evaluations."
            />
            <StepBox
              header="Onboarding"
              body="Facilitate the smooth integration of new hires into the organization via trainings."
              imgSrc="/images/hr_3.png"
              smallBox1="Automate onboarding."
              smallBox2="Compliance with policies."
            />
          </div>

          <div>
            <div className="heading">
              <h2>Pain Points and opportunites</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4">
              <PainPointOpportuanitis
                data={[
                  "Job role design requires coordination",
                  "Employer branding has to reach prospects",
                  "Limited candidate engagement",
                  "Not enough position visibility",
                ]}
              />
              <PainPointOpportuanitis
                data={[
                  "Difficulty in tracking applicant data",
                  "Challenges in maintaining diversity in hiring",
                  "Opportunities for automation in onboarding",
                  "Not enough position visibility",
                ]}
                className=""
              />
              <PainPointOpportuanitis
                data={[
                  "Slow response from candidates",
                  "Need for better integration with HR systems",
                  "Limited candidate engagement",
                  "Improving communication with applicants",
                ]}
              />
              <PainPointOpportuanitis
                data={[
                  "Difficulty in assessing cultural fit",
                  "Enhancing reporting and analytics",
                  "Limited candidate engagement",
                  "Ensuring compliance with diversity goals",
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
