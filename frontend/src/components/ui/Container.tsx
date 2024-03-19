import Divider from "./Divider";

type PropsContainer = {
    header: JSX.Element
    body: JSX.Element
    footer: JSX.Element
}

export default function Container(props: PropsContainer) {
    return (
        <div className="container flex flex-wrap flex-col max-w-7xl">
            <div>{props.header}</div>
            <Divider />
            <div>{props.body}</div>
            <Divider />
            <div>{props.footer}</div>
        </div>
    )
  }
  