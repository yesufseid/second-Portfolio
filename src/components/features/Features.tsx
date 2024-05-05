import Title from "../../layout/Title";
import {featuresData} from "../../data/data"
import Card from "./Card";

export default function Features() {
  return (
    <section id="features" className="w-full h-[800px]  border-b-[1px] border-b-black">
      <Title title={'features'} des={'what i do'} />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        {featuresData.map((item) => (
          <Card title={item.title} des={item.des} icon={item.icon} />
        ))}
      </div>
    </section>
  )
}
