import { Trophy, Tunnel, Tv } from "iconoir-react";
import Rectangle25 from "../assets/img/Rectangle_25.png";
import Rectangle26 from "../assets/img/Rectangle_26.png";
import Rectangle27 from "../assets/img/Rectangle_27.png";
import FeatureBox from "../components/FeatureBox";

const FeatureBoxes = () => {
  return (
    <div className="section-container grid gird-cols-1 lg:grid-cols-3 gap-[32px] lg:gap-[80px] bg-amber-100 lg:bg-transparent">
      <FeatureBox
        icon={<Trophy width={64} height={64} strokeWidth="0.5px" />}
        image={Rectangle25}
        title={"Nibh viverra"}
        text={
          "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa."
        }
      />
      <FeatureBox
        icon={<Tunnel width={64} height={64} strokeWidth="0.5px" />}
        image={Rectangle26}
        title={"Cursus amet"}
        text={
          "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa."
        }
      />
      <FeatureBox
        icon={<Tv width={64} height={64} strokeWidth="0.5px" />}
        image={Rectangle27}
        title={"Ipsum fermentum"}
        text={
          "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa."
        }
      />
    </div>
  );
};

export default FeatureBoxes;
