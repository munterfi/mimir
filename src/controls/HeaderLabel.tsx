interface Props {
    text: string;
    logoPath?: string;
}

function HeaderLabel(props: Props) {
    return (
        <div>
            {props.text}
            {props.logoPath && <img src={props.logoPath} alt="headerImage"/>}
        </div>
    )
}

export default HeaderLabel;