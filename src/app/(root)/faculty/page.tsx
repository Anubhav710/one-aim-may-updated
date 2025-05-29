import React from "react";
import TeamCard from "@/components/ui/TeamCard";

import Banner from "@/components/common/Banner";
import Link from "next/link";
import {
  EducationIcon,
  IndustryIcon,
  PassionIcon,
  TeachingIcon,
} from "@/components/icons";
import { CommonHeading2 } from "@/components/common/CommonHeading2";
import Banner2 from "@/components/common/Banner2";
import axios from "axios";
import { TeamMemberList } from "@/types";

const teamInfo = [
  {
    id: 1,
    name: "Diksha kashyap",
    qualifications: {
      experience: "Fresher",
      education: "MA Political Science, UGC NET",
      subject: "Political Science",
    },
    description:
      "Enthusiastic, Aspiring to be a Professor, passionate educator, make complex information easy.",
    role: "Faculty (Indian Polity)",
    image: "/images/team/Dikshakashyap.png",
  },
  {
    id: 2,
    name: "Ritika kaushal",
    qualifications: {
      experience: "4 Years of Experience",
      education:
        "BA Programming with Data Analytics, MBA in Human Resource and Operations",
      subject: "Economics",
    },
    description: "Make subjects engaging and relatable for students.",
    role: "Faculty",
    image: "/images/team/Ritikakaushal.png",
  },
  {
    id: 3,
    name: "Aatiba Nasti",
    qualifications: {
      experience: "5 Years as Lecturer",
      education: "B.Tech Civil Engineering, M.Tech Transportation Engineering",
      subject: "Mathematics, Physics, Chemistry, and Reasoning",
    },
    description: "Educator, a passion for lifelong learning.",
    role: "Faculty",
    image: "/images/team/AatibaNasti.png",
  },
  {
    id: 4,
    name: "Munaza Nasti ",
    qualifications: {
      experience: "7 Years of Experience",
      education: "B.Sc Masters in Gender Studies",
      subject: "Mathematics",
    },
    description:
      "Dr. Patel is a mathematics expert who makes complex concepts simple and engaging. His innovative teaching methods have helped countless students excel in mathematics and competitive exams.",
    role: "Mathematics Head",
    image: "/images/team/MunazaNasti.png",
  },
  {
    id: 5,
    name: "Saloni Vaishnoi",
    qualifications: {
      experience: "15 Years",
      education: "B.Tech, M.A., B.Ed., pursuing PhD",
      subject: "Geography",
    },
    description: "Karate player, PLC programming, training in Doordarshan.",
    role: "Faculty",
    image: "/images/team/SaloniVaishnoi.png",
  },
  {
    id: 6,
    name: "Col Paresh Dave",
    qualifications: {
      experience: "14 Years of Experience",
      education: "M.Com., CA",
      subject: "Commerce",
    },
    description:
      "Mr. Kumar brings real-world financial expertise to the classroom. His experience in chartered accountancy and commerce education makes him an invaluable asset for commerce students.",
    role: "Commerce Expert",
    image: "/images/team/ColPareshDave.png",
  },
  {
    id: 7,
    name: "Narendra Raj Singh",
    qualifications: {
      experience: "23 Years",
      education: "M.S (AI & ML), M.B.A (IB), M.A (Business Economics)",
      subject: "Geography, Indian Art & Architecture",
    },
    description: "Corporate Training.",
    role: "Faculty",
    image: "/images/team/NarendraRajSingh.png",
  },
  {
    id: 8,
    name: "Preeti Rathi",
    qualifications: {
      experience: "6 Years",
      education: "PhD pursuing, UGC NET, MA (Economics), BEd",
      subject: "Economics, Medieval History",
    },
    description:
      "Researcher, educator, training & consultancy, case study specialist.",
    role: "Faculty",
    image: "/images/team/PreetiRathi.png",
  },

  {
    id: 10,
    name: "Charu Singh",
    qualifications: {
      experience: "Taken two mains (UPPCS), Content Developer",
      education: "B.Sc, B.Ed",
      subject: "General Studies",
    },
    description: "Faculty for Hindi medium.",
    role: "Faculty",
    image: "/images/team/CharuSingh.png",
  },
  {
    id: 11,
    name: "Hammad Jafri",
    qualifications: {
      experience: "2 years of teaching experience",
      education: "B.Sc. (Hons) Maths & B.Ed from AMU",
      subject: "Indian Polity",
    },
    description: "Faculty for English medium.",
    role: "Faculty (Indian Polity)",
    image: "/images/team/HammadJafri.png",
  },
  {
    id: 12,
    name: "Sarvesh Mishra",
    qualifications: {
      experience:
        "Worked as a general studies faculty in Eklavya Academy, Indore. Provided 1-on-1 UPSC answer writing mentorship. Worked as a guest faculty in various colleges.",
      education:
        "Bachelor of Arts (Political Science, Economics, Sociology), B.Ed",
      subject: "General Studies",
    },
    description: "Experienced mentor in UPSC preparation.",
    role: "Faculty",
    image: "/images/team/SarveshMishra.png",
  },
  {
    id: 13,
    name: "Monu Kumar",
    qualifications: {
      experience: "1.5 years",
      education: "B.A. (Political Science)",
      subject: "Political Science",
    },
    description: "Faculty for Hindi medium.",
    role: "Faculty",
    image: "/images/team/MonuKumar.png",
  },
  {
    id: 14,
    name: "Manish Mishra",
    qualifications: {
      experience: "9 years of teaching experience in UPSC and State PCS",
      education: "B.Sc, M.A. (Sociology), M.A. (History), LLB (Law)",
      subject: "Sociology & History",
    },
    description: "Faculty for Hindi medium.",
    role: "Faculty",
    image: "/images/team/ManishMishra.png",
  },
  {
    id: 15,
    name: "Satyendra Kumar Sharma",
    qualifications: {
      experience: "10 years",
      education: "Post Graduate in Economics, Political Science, and History",
      subject: "Economics, Political Science, and History",
    },
    description:
      "Faculty at Chahal IAS Academy, Geetanjali IAS Academy, and Chanakya IAS Academy.",
    role: "Faculty",
    image: "/images/team/SatyendraKumarSharma.png",
  },
];

const facultyHighlights = [
  {
    id: 1,
    title: "Highly qualified and experienced educators",
    icon: <EducationIcon />,
  },
  {
    id: 2,
    title: "Personalized teaching approach",
    icon: <TeachingIcon />,
  },
  {
    id: 3,
    title: "Industry experts with real-world knowledge",
    icon: <IndustryIcon />,
  },
  {
    id: 4,
    title: "Passionate about student success",
    icon: <PassionIcon />,
  },
];

const FacultyPage = async () => {
  // Change const to let to allow assignment
  let teamMemberList: TeamMemberList | null = null;
  try {
    const response = await axios.get<TeamMemberList>(
      `${process.env.BASE_URL}/api/v1/blogs`, // Use environment variable for base URL
      {
        headers: {
          Authorization: `Bearer ${process.env.AUTH_TOKEN}`, // Use environment variable for auth token
        },
      }
    );
    // Assign the fetched data to blogList
    teamMemberList = response.data;
  } catch (err) {
    console.error("Error fetching blogs:", err);
    // Optionally handle the error state, e.g., set blogList to an empty array
    teamMemberList = [];
  }

  return (
    <main className="bg-[#FFF7F0]">
      {/* Banner Section */}
      <Banner title="Faculty" desp="Meet Our Expert Faculty at One Aim">
        <Link href="/" className="hover:text-[#FF7B07]">
          Home
        </Link>
        <span>{">"}</span>
        <span className="text-[#FF7B07]">Faculty</span>
      </Banner>

      {/* Faculty Intro Section */}
      <section>
        <div className="screen padding-tx">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#C1151B] mb-4">
                Meet Our Expert Faculty at One Aim
              </h2>
              <p className="text-gray-700 mb-6">
                At One Aim, we take pride in our team of experienced and
                dedicated educators who are committed to providing high-quality
                education. Our faculty members bring years of expertise in their
                respective fields, ensuring students receive the best guidance
                and mentorship.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 grid-cols-1 gap-9 max-sm:gap-14">
              {facultyHighlights.map((highlight, index) => (
                <div
                  key={highlight.id}
                  className={` px-4 py-12 group bg-white text-lightorange rounded-3xl shadow-sm  space-y-4 hover:bg-lightorange duration-500 hover:text-white font-medium  hover:-rotate-[10deg]`}
                >
                  <div className="h-14 w-14  rounded-full p-2 group-hover:bg-white/20 bg-lightorange/10  flex items-center justify-center">
                    {highlight.icon}
                  </div>
                  <h2 className=" text-xl leading-6">{highlight.title}</h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Faculty & Mentors Section */}
      <section>
        <div className="screen padding-yx">
          <div className="text-center  w-max mx-auto ">
            <CommonHeading2 title="Faculty & Mentors!" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {teamMemberList.map((faculty) => (
              <div key={faculty.slug} className="h-full">
                <TeamCard
                  name={faculty.name}
                  designation={faculty.designation}
                  experience={faculty.experience}
                  qualification={faculty.qualifications}
                  specialization={faculty.designation}
                  description={faculty.short_description}
                  image={faculty.featured_image_url}
                  facultSlug={faculty.slug}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Faculty Section */}
      <div>
        <section className="padding-bx screen hidden md:block">
          <div className="box p-5 flex  items-center max-sm:h-[30vh] md:h-[35vh]">
            <CommonHeading2
              title="Join Our Faculty"
              desc="Are you passionate about teaching and shaping the future? We're
              always looking for talented educators to join our team. If you're
              interested, send your resume to [Insert HR Email]."
            />
          </div>
        </section>
        <section className="padding-bx block md:hidden">
          <div className=" p-5 bg-[#f8e7d9] rounded-2xl flex justify-center items-center max-sm:h-[30vh] md:h-[35vh]">
            <CommonHeading2
              title="Join Our Faculty"
              desc="Are you passionate about teaching and shaping the future? We're
              always looking for talented educators to join our team. If you're
              interested, send your resume to [Insert HR Email]."
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export default FacultyPage;
