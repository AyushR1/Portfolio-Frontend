import Button from "../parts/Button";
import Heading from "../parts/Heading";
import HeroImage from "../../assets/img/hero.jpg"

export default function About(props) {
	return (
		<div className="">
			<Heading section={"About"} />
			<div className="flex flex-col md:flex-row">
				<div className="flex flex-col justify-center w-1/2 text-base text-gray font-fira">
					<p className="mb-6 ">Hi, I'm {props.name}!</p>
					<p className="mb-6">{props.firstParagraph}</p>
					<p className="mb-12 ">{props.secondParagraph}</p>
					<div>
						<Button title={"Contact"} type="toSection" section="contact" />
					</div>
				</div>
				<div className="flex justify-end w-64">
				<img src={HeroImage} alt="my profile" className="rounded-full" />
				</div>
			</div>
		</div>
	);
}
