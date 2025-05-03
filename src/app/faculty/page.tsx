import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import TeamCard from "@/components/ui/TeamCard";
import CommonHeading from "@/components/ui/CommonHeading";
import Banner from "@/components/common/Banner";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";

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
    image: "/images/team/Munazanasti.png",
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
    icon: "/icons/qualification.svg",
  },
  {
    id: 2,
    title: "Personalized teaching approach",
    icon: "/icons/personalized.svg",
  },
  {
    id: 3,
    title: "Industry experts with real-world knowledge",
    icon: "/icons/industry.svg",
  },
  {
    id: 4,
    title: "Passionate about student success",
    icon: "/icons/passionate.svg",
  },
];

const FacultyPage = () => {
  return (
    <main className="bg-[#FFF7F0]">
      {/* Banner Section */}
      <Banner title="Faculty" desp="Meet Our Expert Faculty at One Aim">
        <Link href="/" className="hover:text-[#FF7B07]">
          Home
        </Link>
        <span>/</span>
        <span className="text-[#FF7B07]">Faculty</span>
      </Banner>

      {/* Faculty Intro Section */}
      <section className="padding-yx">
        <div className="container mx-auto max-w-6xl">
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

            <div className="grid grid-cols-2 gap-4">
              {facultyHighlights.map((highlight, index) => (
                <div
                  key={highlight.id}
                  className={` px-4 py-12 rounded-lg shadow-sm ${
                    highlight.id === 1
                      ? "bg-[#DC8940] text-white -rotate-[9deg]"
                      : "bg-white"
                  }`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div
                      className={`w-12 h-12 mb-3 bg-[#FF7B07]/10 rounded-full flex items-center justify-center ${
                        highlight.id === 1 ? " bg-white/40" : "bg-[#DC8940]"
                      }`}
                    >
                      <FaCheckCircle
                        className={` text-xl text-white ${
                          highlight.id === 1 ? " text-white" : "text-[#DC8940]"
                        } `}
                      />
                    </div>
                    <p
                      className={`text-sm font-medium ${
                        highlight.id === 1 ? " text-white" : "text-[#DC8940]"
                      }`}
                    >
                      {highlight.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Faculty & Mentors Section */}
      <section className="padding-yx">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center  w-max mx-auto mb-12">
            <CommonHeading title="Faculty & Mentors!" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamInfo.map((faculty) => (
              <div key={faculty.id} className="h-full">
                <TeamCard
                  name={faculty.name}
                  qualification={faculty.qualifications}
                  description={faculty.description}
                  image={faculty.image}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Faculty Section */}
      <section className="padding-yx">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-[#FFF1E5] rounded-lg px-8 py-14 border border-dashed border-[#FF7B07]/30">
            <h3 className="text-2xl font-bold text-primaryred mb-4">
              Join Our Faculty
            </h3>
            <p className="text-gray-700 mb-6">
              Are you passionate about teaching and shaping the future? We're
              always looking for talented educators to join our team. If you're
              interested, send your resume to [Insert HR Email].
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FacultyPage;
