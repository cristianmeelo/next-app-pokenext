import Image from "next/image";

import styles from "../styles/About.module.css";

const CharlidardImage: string =
  require("../public/images/charizard.png").default;

const About = () => {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi ad
        consectetur placeat reiciendis excepturi totam quisquam est repellendus
        maxime accusamus. Nihil officiis placeat aperiam maiores animi explicabo
        saepe voluptatibus numquam.
      </p>
      <Image
        src={CharlidardImage}
        alt="Charlizard Image"
        width={300}
        height={300}
      />
    </div>
  );
};

export default About;
