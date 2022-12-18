import { ThreeDots } from "react-loader-spinner";
import { ButtonEl } from "./Button.styled";

export default function Button(props) {
	return (
		<ButtonEl
			type={props.type}
			className={props.className}
			disabled={props.isLoading ?? false}
		>
			{props.isLoading ? (
				<ThreeDots
					height="15"
					width="80"
					radius="9"
					color="white"
					ariaLabel="three-dots-loading"
					visible={true}
				/>
			) : (
				<span>{props.text}</span>
			)}
		</ButtonEl>
	);
}
