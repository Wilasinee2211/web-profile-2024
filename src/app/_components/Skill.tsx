import {
  faDocker,
  faJava,
  faJs,
  faPhp,
  faPython,
  faReact,
  faRust,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "./common/Card";

type Props = {};

const Skill = (props: Props) => {
  return (
    <Card title="Skill(ความสามารถ)">
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4 text-zinc-800">
        <div className="text-center">
          <FontAwesomeIcon icon={faPhp} className="h-10" />
          <p>ความแข็งแกร่งทางกายภาพ</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faPython} className="h-10" />
          <p>ทักษะในการต่อสู้</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faRust} className="h-10" />
          <p>การบิน</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faReact} className="h-10" />
          <p>พละกำลังเหนือมนุษย์</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faJava} className="h-10" />
          <p>ความสามารถในการสร้างแรงลม</p>
        </div>
        
      </div>
    </Card>
  );
};

export default Skill;
