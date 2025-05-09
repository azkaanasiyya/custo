import Image from "next/image";
import { teamMembers } from "../data/team"; 

export default function AboutTeam() {
  return (
    <div className="team-section py-[104px] px-16 flex flex-col justify-center items-center">
      <div className="container max-w-[1072px] flex flex-col justify-center items-center gap-16">
        <div className="header flex flex-col justify-center items-center gap-4 max-w-[708px]">
          <div className="typography text-grayscale-950 font-semibold">
            <h3>The Peoples Behind Custo</h3>
          </div>
          <p className="text-xlarge text-grayscale-600">
            Together, we turn bold ideas into powerful tools for modern businesses.
          </p>
        </div>

        <div className="team grid grid-cols-4 gap-5">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col gap-6">
              <Image src={member.image} alt={member.name} width={253} height={280} />
              <div className="flex flex-col gap-0.5">
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
