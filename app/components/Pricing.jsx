import { pricingData } from "../data";
import PriceItem from "./PriceItem";
import Reveal from "./Reveal";
import Title from "./Title";

const Pricing = () => {
  return (
    <section id="pricing" className="pricing lg:py-20 py-12">
      <div className="container">
        {/* TITLE START */}
        <Title
          title="Choose the Perfect Package that fits your needs"
          subTitle="Explore Our Pricing Packages"
        />
        {/* TITLE END */}
        <ul className="grid lg:grid-cols-3  gap-8">
          {pricingData?.map((item) => (
            <Reveal from={100} key={item?.id}>
              <PriceItem item={item} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Pricing;
