import Linkedin from '../Assets/Linkedin.png';
import GitHub from '../Assets/GitHub.png';
import UpWork from '../Assets/UpWork.png';
import Workana from '../Assets/Workana.png';

function SocialMedia() {
  return (
    <section className="socialMedias">
      <a href="https://www.linkedin.com/in/matheuskrc/">
        <img className="socialIcons" width="50px" alt="Linkedin Icon" src={Linkedin} />

      </a>

      <a href="https://github.com/MatheusKRC">
        <img className="socialIcons" width="50px" alt="GitHub Icon" src={GitHub} />

      </a>

      <a href="https://www.upwork.com/freelancers/~01170468b4c02307b4">
        <img className="socialIcons" width="50px" alt="UpWork Icon" src={UpWork} />

      </a>

      <a href="https://www.workana.com/freelancer/79d1f8be3f367e554f6e2c0d0a275cef">
        <img className="socialIcons" width="50px" alt="Workana Icon" src={Workana} />

      </a>

    </section>
  );
}

export default SocialMedia;
