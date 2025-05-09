import Image from "next/image";
import { teamMembers } from "../data/team";
import Header from "../common/header";

export default function AboutTeam() {
  return (
    <div className="team-section py-[6.5rem] px-[1rem] flex flex-col justify-center items-center">
      <div className="container max-w-[67rem] flex flex-col justify-center items-center gap-[4rem]">
        <Header title="The Peoples Behind Custo" description="Together, we turn bold ideas into powerful tools for modern businesses."/>

        <div className="team grid grid-cols-4 gap-[1.25rem]">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col gap-[1.5rem]">
              <Image src={member.image} alt={member.name} width={253} height={280} />
              <div className="flex flex-col gap-[0.03125rem]">
                <p className="text-xlarge text-grayscale-950 font-medium">{member.name}</p>
                <p className="text-medium text-grayscale-600">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}